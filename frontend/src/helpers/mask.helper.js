export const maskCreditCard = (value) => {
  return value
    ?.replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2");
};

export const maskExpirationDate = (value) => {
  return value?.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");
};

export const maskCVV = (value) => {
  return value?.replace(/\D/g, "");
};

export const maskCurrency = (value) => {
  value = value?.replace(/\D/g, "");

  const parsedNumber = parseFloat(value) / 100;

  if (isNaN(parsedNumber)) return "0";

  return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(
    parsedNumber
  );
};
