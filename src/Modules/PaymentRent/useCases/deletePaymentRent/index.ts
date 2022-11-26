import { PaymentRentRepository } from "../../repositories/implementations/PaymentRentRepository";
import { DeletePaymentRentController } from "./DeletePaymentRentController";
import { DeletePaymentRentUseCase } from "./DeletePaymentRentUseCase";

const paymentRentRepository = PaymentRentRepository.getInstance();
const deletePaymentRentUseCase = new DeletePaymentRentUseCase(paymentRentRepository);
const deletePaymentRentController = new DeletePaymentRentController(deletePaymentRentUseCase);

export { deletePaymentRentController };
