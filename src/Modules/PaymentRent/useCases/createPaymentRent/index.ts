import { PaymentRentRepository } from "../../repositories/implementations/PaymentRentRepository";
import { CreatePaymentRentController } from "./CreatePaymentRentController";
import { CreatePaymentRentUseCase } from "./CreatePaymentRentUseCase";

const paymentRentRepository = PaymentRentRepository.getInstance();
const createPaymentRentUseCase = new CreatePaymentRentUseCase(paymentRentRepository);
const createPaymentRentController = new CreatePaymentRentController(createPaymentRentUseCase);

export { createPaymentRentController };
