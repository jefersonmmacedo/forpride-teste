import { collections } from "../../../../../services/database.service";
import { Bank } from "../../models/Bank";
import { IBankRepository } from "../../repositories/IBankRepository";

class ListBankUnicUseCase {
  constructor(private BankRepository: IBankRepository) {
    " ";
  }

  async execute() {
   const Bank = await collections.bank.find({});
   const BankAll = Bank.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(BankAll)
        }
  }

export { ListBankUnicUseCase };
