import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPeriodTestUseCase } from "./ListPeriodTestUseCase";

class ListPeriodTestController {
  constructor(private ListPeriodTestUseCase: ListPeriodTestUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params;
   await collections.periodTest.find(idAccount).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
    //  console.log(result)
      return result;
     })
  }
}

export { ListPeriodTestController };
