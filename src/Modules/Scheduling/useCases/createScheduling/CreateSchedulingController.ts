import { Request, Response } from "express";
import { CreateSchedulingUseCase } from "./CreateSchedulingUseCase";

class CreateSchedulingController {
  constructor(private createSchedulingUseCase: CreateSchedulingUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idClient, idProperty, idCompany, email, phone, whatsapp, status,
      day, month, year, shift, hour, ownACar, address, addressProperty, similarProperties, amountOfPeople, dateCompleted} = req.body;

    this.createSchedulingUseCase.execute({
      id, idClient, idProperty, idCompany, email, phone, whatsapp, status,
      day, month, year, shift, hour, ownACar, address, addressProperty, similarProperties, amountOfPeople, dateCompleted
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateSchedulingController };






