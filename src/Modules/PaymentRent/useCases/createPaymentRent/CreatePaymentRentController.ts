import { Request, Response } from "express";

import { CreatePaymentRentUseCase } from "./CreatePaymentRentUseCase";

class CreatePaymentRentController {
  constructor(private createPaymentRentUseCase: CreatePaymentRentUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      id,idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status,
     } =
      req.body;
    this.createPaymentRentUseCase.execute({
      id,idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status,
    }).then((result) => {
      console.log(result)
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreatePaymentRentController };
