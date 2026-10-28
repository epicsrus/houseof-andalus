// Single source of truth for olive tree packages and prices.
// Used by the package cards, the booking form and the booking API,
// so the amounts shown and emailed can never drift apart again.

export const olivePackages = [
  { id: "exclusive", trees: 1, price: 1000, title: "Exclusive Olive Patron", label: "Exclusive (1 tree)" },
  { id: "1", trees: 1, price: 300, title: "Book 1 Olive Tree", label: "1 tree" },
  { id: "3", trees: 3, price: 750, title: "Book 3 Olive Trees", label: "3 trees" },
  { id: "5", trees: 5, price: 1000, title: "Book 5 Olive Trees", label: "5 trees" },
];

export const findOlivePackage = (id) =>
  id === null || id === undefined ? undefined : olivePackages.find((p) => p.id === String(id));

export const formatPrice = (amount) => `£${Number(amount).toLocaleString("en-GB")}`;
