import { NextResponse } from 'next/server';
import { sendMail, formatKeyValueTable, plainTextSummary } from '../../../lib/email';
import { findProduct, formatProductPrice } from '../../../src/Components/FarmShop/farmShopProducts';

export async function POST(request) {
  try {
    const body = await request.json();

    // Verify Recaptcha
    if (body.token) {
      const secretKey = process.env.RECAPTCHA_SECRET_KEY;
      const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${body.token}`, {
        method: 'POST'
      });
      const verifyJson = await verifyRes.json();
      if (!verifyJson.success || verifyJson.score < 0.5) {
        return NextResponse.json({ message: 'Captcha verification failed' }, { status: 400 });
      }
    } else {
      return NextResponse.json({ message: 'Captcha token missing' }, { status: 400 });
    }

    // Product details always come from the product list, never from the browser
    const product = findProduct(body.slug);
    if (!body.name || !body.email || !product) {
      return NextResponse.json({ message: 'Name, email, and a product are required.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
    }
    const quantity = Math.min(Math.max(parseInt(body.quantity, 10) || 1, 1), 50);

    const record = {
      name: body.name,
      email: body.email,
      product: `${product.name} (${product.size})`,
      quantity,
      price: formatProductPrice(product.price),
      message: body.message || '',
      submittedAt: new Date().toISOString(),
    };

    console.info('Farm shop interest received', record); // eslint-disable-line no-console

    const tableHtml = formatKeyValueTable({
      Name: record.name,
      Email: record.email,
      Product: record.product,
      Quantity: record.quantity,
      Price: record.price,
      Message: record.message,
      'Submitted At': record.submittedAt,
    });
    const plainSummary = plainTextSummary({
      Name: record.name,
      Email: record.email,
      Product: record.product,
      Quantity: record.quantity,
      Price: record.price,
      Message: record.message,
      Submitted: record.submittedAt,
    });

    await Promise.all([
      sendMail({
        to: process.env.BOOKING_NOTIFY_TO || process.env.EMAIL_USER,
        subject: `Farm Shop Interest: ${record.name} (${record.product})`,
        text: `New farm shop interest\n\n${plainSummary}`,
        html: `<h2 style='font-family:Arial'>New Farm Shop Interest</h2>${tableHtml}`,
      }),
      sendMail({
        to: record.email,
        subject: 'House of Andalus – Farm Shop Interest Received',
        text: `Dear ${record.name},\n\nThank you for your interest in our ${record.product}. Our harvest products are on their way and we will email you as soon as they are ready to order.\n\n${plainSummary}\n\nHouse of Andalus`,
        html: `<p style='font-family:Arial'>Dear ${record.name},</p><p style='font-family:Arial'>Thank you for your interest in our ${record.product}. Our harvest products are on their way and we will email you as soon as they are ready to order.</p>${tableHtml}<p style='font-family:Arial'>Warmly,<br/>House of Andalus</p>`,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Farm shop interest error:', err); // eslint-disable-line no-console
    return NextResponse.json({ message: 'Server error processing your request.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'POST a farm shop interest to this endpoint.' });
}
