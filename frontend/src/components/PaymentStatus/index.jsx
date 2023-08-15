import React, { useEffect, useState } from "react";
import { Duration } from "./styles";
import ClockIcon from "../../icons/ClockIcon";
import ApprovedIcon from "../../icons/ApprovedIcon";

const PaymentStatus = () => {
  const [showProcessing, setShowProcessing] = useState(true);
  const [showApproved, setShowApproved] = useState(false);

  useEffect(() => {
    const processingTimeout = setTimeout(() => {
      setShowProcessing(false);
      setShowApproved(true);
    }, 3000);

    return () => clearTimeout(processingTimeout);
  }, []);

  return (
    <div>
      {showProcessing && (
        <Duration>
          <ClockIcon />
          <p>Processando pagamento...</p>
        </Duration>
      )}
      {showApproved && (
        <Duration>
          <ApprovedIcon />
          <p>Pagamento aprovado!</p>
        </Duration>
      )}
    </div>
  );
};

export default PaymentStatus;
