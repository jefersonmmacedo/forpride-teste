import { IPaymentRentRepository } from "../../repositories/IPaymentRentRepository";

interface IRequest {
  id: string;
  idClient: string;
  idCompany: string;
  IdNegotiation:string;
  value: string;
  parcel: number;
  linkComprovant: string;
  status: string;

}

class UpdatePaymentRentUseCase {
  constructor(private PaymentRentRepository: IPaymentRentRepository) {
    " ";
  }
  
  async execute({id, idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status, }: IRequest): Promise<void> {
         await this.PaymentRentRepository.update({
      id, idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status,
      });

  }
}

export { UpdatePaymentRentUseCase };
