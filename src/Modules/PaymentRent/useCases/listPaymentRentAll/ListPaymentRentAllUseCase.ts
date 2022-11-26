import { collections } from "../../../../../services/database.service";
import { PaymentRent } from "../../models/PaymentRent";
import { IPaymentRentRepository } from "../../repositories/IPaymentRentRepository";

class ListPaymentRentAllUseCase {
  constructor(private PaymentRentsRepository: IPaymentRentRepository) {
    " ";
  }

  async execute() {
    
   const PaymentRent = await collections.paymentRent.find({});
   const PaymentRentAll = PaymentRent.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(PaymentRentAll)
        }
  }

export { ListPaymentRentAllUseCase };
