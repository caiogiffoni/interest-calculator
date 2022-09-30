export const normalizeAmount = (value: string) => {
  if (!value) return "";

  return value.replace(/[\D]/g, "").replace(/(.*)(\d{2})$/, "R$ $1,$2");
};
