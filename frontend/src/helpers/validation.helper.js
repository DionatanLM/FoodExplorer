export function validateCreditCardNumber(cardnumber) {
  cardnumber = cardnumber.replace(/\s/g, "");

  let cardNo = cardnumber;
  let cardexp = /^\d{13,19}$/;
  if (!cardexp.exec(cardNo)) {
    return false;
  }

  // Now check the modulus 10 check digit - if required
  let checksum = 0; // running checksum total
  let j = 1; // takes value of 1 or 2

  // Process each digit one by one starting at the right
  let calc;
  for (let i = cardNo.length - 1; i >= 0; i--) {
    // Extract the next digit and multiply by 1 or 2 on alternative digits.
    calc = Number(cardNo.charAt(i)) * j;

    // If the result is in two digits add 1 to the checksum total
    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }

    // Add the units element to the checksum total
    checksum = checksum + calc;

    // Switch the value of j
    if (j == 1) {
      j = 2;
    } else {
      j = 1;
    }
  }

  // All done - if checksum is divisible by 10, it is a valid modulus 10.
  if (checksum % 10 != 0) {
    return false;
  }

  // The credit card is in the required format.
  return true;
}
