import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateAccountUseCase } from "./UpdateAccountUseCase";

class UpdateAccountController {
  constructor(private UpdateAccountUseCase: UpdateAccountUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {  país, viweSex, sex, age, maxAge, minAge,
      sexualOption, 
      viewSexualOption, 
      preference, 
      preferenceOption,
      birthDate, sign, phone, 
      nickname, avatar, cover, relationship, city, uf, cep } = req.body;
    const id = req.params; 


    await collections.accounts.findOneAndUpdate(id, {$set:{
      país, viweSex, sex, age, maxAge, minAge,
      sexualOption, 
      viewSexualOption, 
      preference, 
      preferenceOption,
      birthDate, sign, phone, 
      nickname, avatar, cover, relationship, city, uf, cep
    }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateAccountController };
