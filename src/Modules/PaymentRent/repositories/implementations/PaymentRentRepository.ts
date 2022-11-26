import { collections } from "../../../../../services/database.service";
import { PaymentRent } from "../../models/PaymentRent";
import { IPaymentRentDTO, IPaymentRentRepository } from "../IPaymentRentRepository";
import {v4 as uuidv4} from 'uuid'

class PaymentRentRepository implements IPaymentRentRepository {
  private paymentRent: PaymentRent[];

  private static INSTANCE: PaymentRentRepository;

  private constructor() {
    this.paymentRent = [];
  }

  public static getInstance(): PaymentRentRepository {
    if (!PaymentRentRepository.INSTANCE) {
      PaymentRentRepository.INSTANCE = new PaymentRentRepository();
    }

    return PaymentRentRepository.INSTANCE;
  }

  async create({ idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status, }: IPaymentRentDTO) {
    const payment: PaymentRent = new PaymentRent();
    const _id = uuidv4()
    Object.assign(payment, {
      _id, id: _id, idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status, created_at: new Date(),
    });

    this.paymentRent.push(payment);
    console.log(payment)

    await collections.paymentRent.insertOne(payment).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.paymentRent.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status,}): Promise<void> {}
}

export { PaymentRentRepository };
