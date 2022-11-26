import { PaymentRent } from "../models/PaymentRent";

interface IPaymentRentDTO {
  id: string;
  idClient: string;
  idCompany: string;
  IdNegotiation:string;
  value: string;
  parcel: number;
  linkComprovant: string;
  status: string;
}


interface IPaymentRentRepository {
  create({idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status, }: IPaymentRentDTO): Promise<void>;
  list();
  delete({id});
  update({id, idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status,}): Promise<void>
}

export { IPaymentRentRepository, IPaymentRentDTO };
