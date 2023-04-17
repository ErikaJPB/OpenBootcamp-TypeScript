"use strict";
// Se utiliza para manejar solicitudes de manera jerárquica, es decir, se crea una cadena de objetos que pueden manejar la solicitud y si el primer objeto no puede manejarla, la pasa al siguiente objeto hasta que se maneja la solicitud o se llega al final de la cadena sin poder manejarla.
// Clase abstracta que implementa la interfaz PaymentHandler y proporciona la funcionalidad básica para todos los manejadores de pago.
class AbstractPaymentHandler {
    constructor() {
        this.nextHandler = null;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(amount) {
        if (this.nextHandler) {
            return this.nextHandler.handle(amount);
        }
        return null;
    }
}
// Clases concretas para cada uno de los métodos de pago
class CreditCardPaymentHandler extends AbstractPaymentHandler {
    getMaximumAmount() {
        return 1000;
    }
    getPaymentMethod() {
        return "Credit Card";
    }
}
class PayPalPaymentHandler extends AbstractPaymentHandler {
    getMaximumAmount() {
        return 500;
    }
    getPaymentMethod() {
        return "PayPal";
    }
}
class BankTransferPaymentHandler extends AbstractPaymentHandler {
    getMaximumAmount() {
        return 2000;
    }
    getPaymentMethod() {
        return "Bank Transfer";
    }
}
// Objeto payment processor que crea una cadena de responsabilidad con los manejadores de pago y maneja la solicitud del usuario
class PaymentProcessor {
    constructor() {
        const creditCardHandler = new CreditCardPaymentHandler();
        const payPalHandler = new PayPalPaymentHandler();
        const bankTransferHandler = new BankTransferPaymentHandler();
        creditCardHandler.setNext(payPalHandler).setNext(bankTransferHandler);
        this.paymentHandlers = creditCardHandler;
    }
    processPayment(amount) {
        const result = this.paymentHandlers.handle(amount);
        if (result) {
            return `Payment processed with ${result}!`;
        }
        else {
            return "No payment available";
        }
    }
}
const paymentProcessor = new PaymentProcessor();
console.log(paymentProcessor.processPayment(400)); // Payment processed with Credit Card
console.log(paymentProcessor.processPayment(1000)); // Payment processed with PayPal
console.log(paymentProcessor.processPayment(3000)); // No payment method available
//# sourceMappingURL=ChainOfResponsibility.js.map