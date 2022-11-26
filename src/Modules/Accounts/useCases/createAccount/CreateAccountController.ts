import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

class CreateAccountController {
  constructor(private createAccountUseCase: CreateAccountUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, país, username, age, maxAge, minAge, role, status, viweSex, sex,
      sexualOption, 
      viewSexualOption, 
      preference, 
      preferenceOption,
      birthDate, sign, email, phone, password, online, patron,
      nickname, avatar, cover, relationship, city, uf, cep,
      latitude, longitude, recommendation } = req.body;

    this.createAccountUseCase.execute({
      id, país, username, age, maxAge, minAge, role, status, viweSex, sex,
    sexualOption, 
    viewSexualOption, 
    preference, 
    preferenceOption,
    birthDate, sign, email, phone, password, online, patron,
    nickname, avatar, cover, relationship, city, uf, cep,
    latitude, longitude, recommendation
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateAccountController };






