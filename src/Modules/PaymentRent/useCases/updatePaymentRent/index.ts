import { PaymentRentRepository } from "../../repositories/implementations/PaymentRentRepository";
import { UpdatePaymentRentController } from "./UpdatePaymentRentController";
import { UpdatePaymentRentUseCase } from "./UpdatePaymentRentUseCase";

const paymentRentRepository = PaymentRentRepository.getInstance();

const updatePaymentRentUseCase = new UpdatePaymentRentUseCase(paymentRentRepository);

const updatePaymentRentController = new UpdatePaymentRentController(updatePaymentRentUseCase);

export { updatePaymentRentController };
