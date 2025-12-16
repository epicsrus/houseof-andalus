import { NextResponse } from 'next/server';
import { sendMail, formatKeyValueTable, plainTextSummary } from '../../../lib/email';

const priceTable = { 1: 50, 2: 95, 3: 135, 4: 170, 5: 200 };
const priceForCount = (count) => {
  if (!Number.isFinite(count) || count <= 0) return 0;
  return priceTable[count] ?? Math.round(count * 45);
};

export async function POST(request) {
  try {
    const body = await request.json();
    const trees = Number.parseInt(body.treeCount, 10);
    if (!body.name || !body.email || !trees || trees <= 0) {
      return NextResponse.json({ message: 'Name, email, and at least 1 tree are required.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
    }

    const totalPrice = priceForCount(trees);
    const record = {
      name: body.name,
      email: body.email,
      treeCount: trees,
      engravingNames: body.engravingNames || '',
      message: body.message || '',
      totalPrice,
      submittedAt: new Date().toISOString(),
    };

    // Simulated persistence (can be replaced with DB insert)
    console.info('Olive tree booking received', record); // eslint-disable-line no-console

    const adminSubject = `Olive Tree Booking: ${record.name} (${record.treeCount} tree${trees > 1 ? 's' : ''})`;
    const userSubject = 'House of Andalus – Olive Tree Booking Confirmation';
    const tableHtml = formatKeyValueTable({
      Name: record.name,
      Email: record.email,
      'Number of Trees': record.treeCount,
      'Names to Engrave': record.engravingNames,
      'Optional Message': record.message,
      'Total Price (€)': record.totalPrice,
      'Submitted At': record.submittedAt,
    });
    const plainSummary = plainTextSummary({
      Name: record.name,
      Email: record.email,
      Trees: record.treeCount,
      Engraving: record.engravingNames,
      Message: record.message,
      Total: `€${record.totalPrice}`,
      Submitted: record.submittedAt,
    });

    await Promise.all([
      sendMail({
        to: process.env.BOOKING_NOTIFY_TO || process.env.EMAIL_USER,
        subject: adminSubject,
        text: `New olive tree booking\n\n${plainSummary}`,
        html: `<h2 style='font-family:Arial'>New Olive Tree Booking</h2>${tableHtml}`,
      }),
      sendMail({
        to: record.email,
        subject: userSubject,
        text: `Dear ${record.name},\n\nThank you for booking ${record.treeCount} olive tree(s). We will plant and care for them on your behalf and have recorded the following details:\n\n${plainSummary}\n\nWe will be in touch with stewardship updates.\n\nHouse of Andalus`,
        html: `<p style='font-family:Arial'>Dear ${record.name},</p><p style='font-family:Arial'>Thank you for booking ${record.treeCount} olive tree(s) with House of Andalus. We will plant and care for them on your behalf. Here are your booking details:</p>${tableHtml}<p style='font-family:Arial'>We will share confirmation and stewardship updates soon.<br/>Warmly,<br/>House of Andalus</p>`,
      }),
    ]);

    return NextResponse.json({
      ok: true,
      received: { name: record.name, email: record.email, totalPrice: record.totalPrice, submittedAt: record.submittedAt },
    });
  } catch (err) {
    console.error('Olive tree booking error:', err); // eslint-disable-line no-console
    return NextResponse.json({ message: 'Server error processing booking.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'POST an olive tree booking to this endpoint.' });
}

