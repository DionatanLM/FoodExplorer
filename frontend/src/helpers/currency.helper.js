export const moneyToPtBr = (value = "0") => {
  if (value !== "0") {
    let newValue = String(value).replace(".", ",");
    return newValue;
  }
  return "0";
};

export const moneyToPtBrTwoPrecision = (value = "0") => {
  if (value !== "0" && value !== null) {
    let newValue = Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return newValue;
  }
  return "0";
};

export const formatPrice = (value) => {
  if (!value) {
    return "";
  }

  const numericValue = value.replace(/[^\d]/g, "");
  const formatted = `R$ ${numericValue.slice(0, -2)},${numericValue.slice(-2)}`;
  return formatted;
};

export const unformatPrice = (formattedValue) => {
  return parseFloat(formattedValue.replace(/[^\d,.]/g, "").replace(",", "."));
};
