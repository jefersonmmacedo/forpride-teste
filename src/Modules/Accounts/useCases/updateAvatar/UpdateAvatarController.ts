import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateAvatarUseCase } from "./UpdateAvatarUseCase";


class UpdateAvatarController {
  constructor(private UpdatAvatarUseCase: UpdateAvatarUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { avatar} = req.body;
    const { cover} = req.body;
    const id = req.params; 


    await collections.accounts.findOneAndUpdate(id, {$set:{avatar: avatar, cover: cover}}, {upsert: true}).then((result) => {
      console.log("Senha atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateAvatarController };
