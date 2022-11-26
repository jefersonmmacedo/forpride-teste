import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

interface IResponse {
  id: string;
  id2: string;
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
  token: string;
  expiresIn: string;
  date: Date;
}

interface IRequest {
  username: string;
  email: string;
  password: string;
}

class AuthenticateAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({email, username, password  }: IRequest): Promise<IResponse> {
    console.log(email, username, password)
      await this.accountRepository.session(email, username, password);

      let user;

      if(email !== undefined) {
        user = await collections.accounts.findOne({email});
      }
      if(username !== undefined) {
        user = await collections.accounts.findOne({username});
      }
      
      console.log(user)
      
      console.log(password)
      console.log(user.password)
      const passwordCompare = await compare(password, user.password)
      console.log("passwordCompare")
      console.log(passwordCompare)
      console.log("password")
      console.log(password)

      if(!user ) {
        throw new Error("Username or email, incorrect!")
        }  else if(!passwordCompare) {
          throw new Error("password, incorrect!")
        }
        const userData = {
          id2: user._id,
          id: user.id,
          país: user.país,
          username: user.username,
          age: user.age,
          maxAge: user.maxAge,
          minAge: user.minAge,
          email: user.email,
          phone: user.phone,
          role: user.role,
          status: user.status,
          sex: user.sex,
          viweSex: user.viweSex,
          sexualOption: user.sexualOption,
          viewSexualOption: user.viewSexualOption,
          preference: user.preference,
          preferenceOption: user.preferenceOption,
          date: user.created_at,
          online: user.online,
          patron: user.patron,
          nickname: user.nickname,
          avatar: user.avatar,
          cover: user.cover,
          relationship: user.relationship,
          city: user.city,
          uf: user.uf,
          cep: user.cep,
          latitude: user.latitude,
          longitude: user.longitude,
          recommendation: user.recommendation,
          sign: user.sign,
          birthDate:user.birthDate,
        }
        console.log(userData)

      const token = sign({
        id2: user._id,
          id: user.id,
          país: user.país,
          username: user.username,
          age: user.age,
          maxAge: user.maxAge,
          minAge: user.minAge,
          email: user.email,
          phone: user.phone,
          role: user.role,
          status: user.status,
          type: user.type,
          date: user.created_at,
          online: user.online,
          patron: user.patron,
          nickname: user.nickname,
          avatar: user.avatar,
          cover: user.cover,
          relationship: user.relationship,
          city: user.city,
          uf: user.uf,
          cep: user.cep,
          latitude: user.latitude,
          longitude: user.longitude,
          recommendation: user.recommendation,
          sex: user.sex,
          viweSex: user.viweSex,
          sexualOption: user.sexualOption,
          viewSexualOption: user.viewSexualOption,
          preference: user.preference,
          preferenceOption: user.preferenceOption,
          sign: user.sign,
          birthDate:user.birthDate,
      }, "d64d7c8b83dd7212c25c3745933ee76e", 
      {
        subject: userData.id,
        expiresIn: "1d",
      });

      // console.log(token)
      // console.log(userData)

      return {
        id2: user._id,
        id: user.id,
        país: user.país,
          username: user.username,
          age: user.age,
          maxAge: user.maxAge,
          minAge: user.minAge,
          email: user.email,
          phone: user.phone,
          role: user.role,
          status: user.status,
          date: user.created_at,
          online: user.online,
          patron: user.patron,
          nickname: user.nickname,
          avatar: user.avatar,
          cover: user.cover,
          relationship: user.relationship,
          city: user.city,
          uf: user.uf,
          cep: user.cep,
          latitude: user.latitude,
          longitude: user.longitude,
          recommendation: user.recommendation,
          sex: user.sex,
          viweSex: user.viweSex,
          sexualOption: user.sexualOption,
          viewSexualOption: user.viewSexualOption,
          preference: user.preference,
          preferenceOption: user.preferenceOption,
          sign: user.sign,
          birthDate:user.birthDate,
          token:token,
          expiresIn: "1d",
      }
  }
}

export { AuthenticateAccountUseCase };