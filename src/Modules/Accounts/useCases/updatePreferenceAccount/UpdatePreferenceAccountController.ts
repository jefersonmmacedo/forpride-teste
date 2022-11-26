import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePreferenceAccountUseCase } from "./UpdatePreferenceAccountUseCase";
import { hash } from "bcrypt";

class UpdatePreferenceAccountController {
  constructor(private UpdatPreferenceAccountUseCase: UpdatePreferenceAccountUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { preference} = req.body;
    const { preferenceOption} = req.body;
    const id = req.params; 


    await collections.accounts.findOneAndUpdate(id, {$set:{preference: preference, preferenceOption: preferenceOption }}, {upsert: true}).then((result) => {
      console.log("Senha atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}


"Mulher"

"Bissexual"

export { UpdatePreferenceAccountController };
