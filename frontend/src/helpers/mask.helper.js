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
