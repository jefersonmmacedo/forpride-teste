import { collections } from "../../../../../services/database.service";
import { Negotiations } from "../../models/Negotiations";
import { INegotiationsRepository } from "../../repositories/INegotiationsRepository";

class ListNegotiationsUnicUseCase {
  constructor(private NegotiationsRepository: INegotiationsRepository) {
    " ";
  }

  async execute() {
   const Negotiations = await collections.negotiations.find({});
   const NegotiationsAll = Negotiations.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(NegotiationsAll)
        }
  }

export { ListNegotiationsUnicUseCase };
