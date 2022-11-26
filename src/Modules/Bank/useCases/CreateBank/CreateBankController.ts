import { Request, Response } from "express";
import { CreateBankUseCase } from "./CreateBankUseCase";

class CreateBankController {
  constructor(private createBankUseCase: CreateBankUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix, } = req.body;

    this.createBankUseCase.execute({
      id,idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateBankController };






