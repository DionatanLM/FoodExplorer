export function validateCreditCardNumber(cardnumber) {
  cardnumber = cardnumber.replace(/\s/g, "");

  let cardNo = cardnumber;
  let cardexp = /^\d{13,19}$/;
  if (!cardexp.exec(cardNo)) {
    return false;
  }

  let checksum = 0;
  let j = 1;

  let calc;
  for (let i = cardNo.length - 1; i >= 0; i--) {
    calc = Number(cardNo.charAt(i)) * j;

    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }

    checksum = checksum + calc;

    if (j == 1) {
      j = 2;
    } else {
      j = 1;
    }
  }

  if (checksum % 10 != 0) {
    return false;
  }

  return true;
}
