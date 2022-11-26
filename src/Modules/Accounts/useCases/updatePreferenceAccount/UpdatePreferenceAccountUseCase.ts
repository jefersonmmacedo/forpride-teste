import { hash } from "bcrypt";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  país: string; 
  username: string;//
  age: string;
  maxAge: string;
  minAge: string;
  role: string;
  status: string;
  sex: string;//
  viweSex: string;//
  sexualOption: string;//
  viewSexualOption: string;//
  preference: string;
  preferenceOption: string;
  sign: string;
  birthDate:string;
  email: string;//
  phone: string;//
  online: boolean;
  patron: string;
  nickname: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  cep: string;
  latitude: string;
  longitude: string;
  recommendation: string;
  password: Promise<string>;
}

class UpdatePreferenceAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({    id, país, username, age, role, status, viweSex, sex, 
    sexualOption, 
    viewSexualOption, 
    preference, 
    preferenceOption,
    birthDate, sign, email, phone, password, online, patron,
    nickname, avatar, cover, relationship, city, uf, cep, maxAge, minAge,
    latitude, longitude, recommendation }: IRequest): Promise<void> {
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.update({
        id, país, username, age, role, status, viweSex, sex,
        sexualOption, 
        viewSexualOption, 
        preference, 
        preferenceOption,
        birthDate, sign, email, phone, password:passwordHash, online, patron,
        nickname, avatar, cover, relationship, city, uf, cep, maxAge, minAge,
        latitude, longitude, recommendation
      });

  }
}

export { UpdatePreferenceAccountUseCase };
