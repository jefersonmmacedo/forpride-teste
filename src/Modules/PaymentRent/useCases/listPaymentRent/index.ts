import { PaymentRentRepository } from "../../repositories/implementations/PaymentRentRepository";
import { ListPaymentRentController } from "./ListPaymentRentController";
import { ListPaymentRentUseCase } from "./ListPaymentRentUseCase";

const paymentRentRepository = PaymentRentRepository.getInstance();

const listPaymentRentUsecase = new ListPaymentRentUseCase(paymentRentRepository);

const listPaymentRentController = new ListPaymentRentController(listPaymentRentUsecase);

export { listPaymentRentController };
