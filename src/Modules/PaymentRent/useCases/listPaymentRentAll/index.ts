import { PaymentRentRepository } from "../../repositories/implementations/PaymentRentRepository";
import { ListPaymentRentAllController } from "./ListPaymentRentAllController";
import { ListPaymentRentAllUseCase } from "./ListPaymentRentAllUseCase";

const paymentRentRepository = PaymentRentRepository.getInstance();

const listPaymentRentAllUsecase = new ListPaymentRentAllUseCase(paymentRentRepository);

const listPaymentRentAllController = new ListPaymentRentAllController(listPaymentRentAllUsecase);

export { listPaymentRentAllController };
