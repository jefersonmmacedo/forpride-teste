import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPaymentRentUseCase } from "./ListPaymentRentUseCase";

class ListPaymentRentController {
  constructor(private listPaymentRenteCase: ListPaymentRentUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
   await collections.paymentRent.find(idCompany).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListPaymentRentController };
