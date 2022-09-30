export const normalizeAmount = (value: string) => {
  if (!value) return "";
  return `R$ ${value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".")}`;

  // return value.replace(/[\D]/g, "").replace(/(.*)(\d{2})$/, "R$ $1,$2");
  // return Number(value).toLocaleString("pt-BR", {
  //   style: "currency",
  //   currency: "BRL",
  // });
  // return String(
  //   Number(value).toLocaleString("pt-BR", {
  //     style: "currency",
  //     currency: "BRL",
  //   })
  // );
};
