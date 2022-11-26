import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePaymentRentUseCase } from "./UpdatePaymentRentUseCase";

class UpdatePaymentRentController {
  constructor(private UpdatePaymentRentUseCase: UpdatePaymentRentUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status, } = req.body;
    const id = req.params; 


    await collections.paymentRent.findOneAndUpdate(id, {$set:{idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdatePaymentRentController };
