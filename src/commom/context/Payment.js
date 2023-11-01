import { createContext, useContext, useState } from "react";

export const PaymentContext = createContext();
PaymentContext.displayName = "Pagamento";

export const PaymentProvider = ({ children }) => {
    const typesPayment = [{
        name: "Boleto",
        fees: 1,
        id: 1
    }, {
        name: "Pix",
        fees: 1,
        id: 2
    }, {
        name: "Cartão de Crédito",
        fees: 1.3,
        id: 3
    }, {
        name: "Cartão de Débito",
        fees: 1,
        id: 4
    }];
    const [formPayment, setFormPayment] = useState(typesPayment[0]);
    return(
        <PaymentContext.Provider value={{
            typesPayment,
            formPayment,
            setFormPayment
        }}>
            {children}
        </PaymentContext.Provider>
    )
}

export const usePaymentContext = () => {
   const { 
        typesPayment,
        formPayment, 
        setFormPayment 
    } = useContext(PaymentContext); 

    function changePaymentForm(id) {
        const currentPayment = typesPayment.find(payment => payment.id 
        === id);
        setFormPayment(currentPayment);
    }

    return {
        typesPayment,
        formPayment,
        changePaymentForm
    }
}