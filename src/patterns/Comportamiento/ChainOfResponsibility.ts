// Se utiliza para manejar solicitudes de manera jerárquica, es decir, se crea una cadena de objetos que pueden manejar la solicitud y si el primer objeto no puede manejarla, la pasa al siguiente objeto hasta que se maneja la solicitud o se llega al final de la cadena sin poder manejarla.

// Definir interfaz común para todos los manejadores de pago

interface PaymentHandler {
  setNext(handler: PaymentHandler): PaymentHandler;
  handle(amount: number): string | null;
}

// Clase abstracta que implementa la interfaz PaymentHandler y proporciona la funcionalidad básica para todos los manejadores de pago.

abstract class AbstractPaymentHandler implements PaymentHandler {
  private nextHandler: PaymentHandler | null = null;

  public setNext(handler: PaymentHandler): PaymentHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(amount: number): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(amount);
    }
    return null;
  }

  protected abstract getMaximumAmount(): number;
  protected abstract getPaymentMethod(): string;
}

// Clases concretas para cada uno de los métodos de pago

class CreditCardPaymentHandler extends AbstractPaymentHandler {
  protected getMaximumAmount(): number {
    return 1000;
  }

  protected getPaymentMethod(): string {
    return "Credit Card";
  }
}

class PayPalPaymentHandler extends AbstractPaymentHandler {
  protected getMaximumAmount(): number {
    return 500;
  }
  protected getPaymentMethod(): string {
    return "PayPal";
  }
}

class BankTransferPaymentHandler extends AbstractPaymentHandler {
  protected getMaximumAmount(): number {
    return 2000;
  }
  protected getPaymentMethod(): string {
    return "Bank Transfer";
  }
}

// Objeto payment processor que crea una cadena de responsabilidad con los manejadores de pago y maneja la solicitud del usuario

class PaymentProcessor {
  private paymentHandlers: PaymentHandler;

  constructor() {
    const creditCardHandler = new CreditCardPaymentHandler();
    const payPalHandler = new PayPalPaymentHandler();
    const bankTransferHandler = new BankTransferPaymentHandler();

    creditCardHandler.setNext(payPalHandler).setNext(bankTransferHandler);

    this.paymentHandlers = creditCardHandler;
  }

  public processPayment(amount: number): string {
    const result = this.paymentHandlers.handle(amount);

    if (result) {
      return `Payment processed with ${result}!`;
    } else {
      return "No payment available";
    }
  }
}

const paymentProcessor = new PaymentProcessor();
console.log(paymentProcessor.processPayment(400)); // Payment processed with Credit Card
console.log(paymentProcessor.processPayment(1000)); // Payment processed with PayPal
console.log(paymentProcessor.processPayment(3000)); // No payment method available.
