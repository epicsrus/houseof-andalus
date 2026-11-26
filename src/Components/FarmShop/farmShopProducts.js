// Single source of truth for the Farm Shop.
// Used by the shop page, the product pages and the interest API.
//
// To update a product: change its name, description, sizes or price here.
// price: null shows "Price coming soon".
// image: null shows the placeholder. When the real photo is ready, put it in
// public/assets/img/farm-shop/ and set e.g. image: "/assets/img/farm-shop/olive-oil-bottle.jpg".

export const farmShopCategories = [
  {
    id: "olive-oil",
    title: "Olive Oil",
    intro:
      "Pressed from the olives of our own grove in Andalusia. Choose a bottle, or refill it with our 1L and 2L pouches.",
  },
  {
    id: "cosmetics",
    title: "Natural Cosmetics",
    intro:
      "Gentle olive oil based care for body and skin, in three scented ranges. Each range includes a shower gel, body lotion and soap.",
  },
];

// Scent names are placeholders until the ranges are finalised.
export const cosmeticRanges = [
  { id: "scent-1", name: "Scent 1" },
  { id: "scent-2", name: "Scent 2" },
  { id: "scent-3", name: "Scent 3" },
];

const oliveOil = [
  {
    slug: "olive-oil-bottle",
    name: "House of Andalus Olive Oil",
    format: "Bottle",
    size: "Size to be confirmed",
    description:
      "Our olive oil, harvested and pressed in Andalusia. A golden, fresh oil for cooking, dressing and dipping.",
  },
  {
    slug: "olive-oil-refill-pouch-1l",
    name: "Olive Oil Refill Pouch",
    format: "Refill pouch",
    size: "1 litre",
    description:
      "Refill your bottle and reduce waste. The same olive oil in a 1 litre refillable pouch.",
  },
  {
    slug: "olive-oil-refill-pouch-2l",
    name: "Olive Oil Refill Pouch",
    format: "Refill pouch",
    size: "2 litres",
    description:
      "Our best value option for regular use. The same olive oil in a 2 litre refillable pouch.",
  },
].map((p) => ({ ...p, category: "olive-oil", range: null, price: null, image: null }));

const cosmeticTypes = [
  {
    key: "shower-gel",
    format: "Shower Gel",
    description: (scent) =>
      `A gentle olive oil shower gel in ${scent}, made to cleanse without drying the skin.`,
  },
  {
    key: "body-lotion",
    format: "Body Lotion",
    description: (scent) =>
      `A nourishing olive oil body lotion in ${scent}, for soft, comfortable skin every day.`,
  },
  {
    key: "soap",
    format: "Soap",
    description: (scent) =>
      `A traditional olive oil soap in ${scent}, rich and mild for hands and body.`,
  },
];

const cosmetics = cosmeticRanges.flatMap((range) =>
  cosmeticTypes.map((type) => ({
    slug: `${range.id}-${type.key}`,
    name: `${range.name} ${type.format}`,
    format: type.format,
    size: "Size to be confirmed",
    description: type.description(range.name),
    category: "cosmetics",
    range: range.id,
    price: null,
    image: null,
  }))
);

export const farmShopProducts = [...oliveOil, ...cosmetics];

export const findProduct = (slug) => farmShopProducts.find((p) => p.slug === slug);

export const productsIn = (categoryId, rangeId) =>
  farmShopProducts.filter((p) => p.category === categoryId && (!rangeId || p.range === rangeId));

export const formatProductPrice = (price) =>
  price === null || price === undefined ? "Price coming soon" : `£${Number(price).toLocaleString("en-GB")}`;
