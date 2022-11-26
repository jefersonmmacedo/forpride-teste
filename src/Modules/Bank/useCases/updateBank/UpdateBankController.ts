import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateBankUseCase } from "./UpdateBankUseCase";

class UpdateBankController {
  constructor(private UpdateBankUseCase: UpdateBankUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix, } = req.body;
    const id = req.params; 


    await collections.bank.findOneAndUpdate(id, {$set:{idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateBankController };
