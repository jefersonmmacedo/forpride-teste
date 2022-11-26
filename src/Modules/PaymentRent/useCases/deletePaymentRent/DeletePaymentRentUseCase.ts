import { IPaymentRentRepository } from "../../repositories/IPaymentRentRepository";

class DeletePaymentRentUseCase {
  constructor(private PaymentRentRepository: IPaymentRentRepository) {
    ("");
  }

  async execute({id}){

   await this.PaymentRentRepository.delete({id});
  }
}

export { DeletePaymentRentUseCase };
