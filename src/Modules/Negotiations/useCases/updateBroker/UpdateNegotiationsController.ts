import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateNegotiationsUseCase } from "./UpdateNegotiationsUseCase";

class UpdateNegotiationsController {
  constructor(private UpdateNegotiationsUseCase: UpdateNegotiationsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idCompany, idClient, idProperty, typNegotiation, documentations, contract, staus, deadline, parcel, notifications, } = req.body;
    const id = req.params; 


    await collections.negotiations.findOneAndUpdate(id, {$set:{idCompany, idClient, idProperty, typNegotiation, documentations, contract, staus, deadline, parcel, notifications,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateNegotiationsController };
