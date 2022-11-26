import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyUseCase } from "./ListPropertyUseCase";

class ListPropertyController {
  constructor(private listPropertyUseCase: ListPropertyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability, status} = req.params;
    const uf = req.query.uf;
    const city = req.query.city;
    const bedroom = req.query.bedroom;
    const suite = req.query.suite;
    const resdroom = req.query.resdroom;
    const garage = req.query.garage;

   await collections.property.find({
    "$and": [{ availability: availability },
    { status: status},
  ],
  "$or": [
    { uf: uf},
      { city: city},
      { bedroom: bedroom },
      { suite: suite },
      { resdroom: resdroom },
      { garage: garage },
  ]
}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPropertyController };
