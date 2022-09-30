export const normalizeAmount = (value: string) => {
  if (!value) return "";
  return `R$ ${value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".")}`;
};
