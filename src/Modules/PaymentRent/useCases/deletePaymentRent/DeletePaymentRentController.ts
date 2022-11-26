import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeletePaymentRentUseCase } from "./DeletePaymentRentUseCase";

class DeletePaymentRentController {
  constructor(private DeletePaymentRentUseCase: DeletePaymentRentUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.paymentRent.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeletePaymentRentController };
