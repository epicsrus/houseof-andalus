// Link preview details for the Farm Shop and its product pages
const description =
  'Olive oil and natural cosmetics made from the olives of the House of Andalus grove in Andalusia. Register your interest for our first harvest.';
const image = { url: '/assets/img/og/farm-shop.jpg', width: 1200, height: 630, alt: 'Olive tree at House of Andalus' };

export const metadata = {
  title: 'Farm Shop | House of Andalus',
  description,
  openGraph: {
    type: 'website',
    siteName: 'House of Andalus',
    title: 'Farm Shop | House of Andalus',
    description,
    url: '/farm-shop',
    images: [image],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farm Shop | House of Andalus',
    description,
    images: [image.url],
  },
};

export default function FarmShopLayout({ children }) {
  return children;
}
