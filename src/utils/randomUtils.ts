export const generateRandomEmail = () => `user${Math.floor(Math.random() * 10000)}@example.com`;
export const generateRandomPassword = () => Math.random().toString(36).slice(-8);


export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
}


