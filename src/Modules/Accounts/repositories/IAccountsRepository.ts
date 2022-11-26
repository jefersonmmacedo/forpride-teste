import { Accounts } from "../models/Accounts";

interface IAccountsDTO {
  id: string;
  país: string; 
  age: string;
  maxAge: string;
  minAge: string;
  username: string;//
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
  password: string;//
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
}
 
interface IAccountsRepository {
  create({
    id, país, username, age, maxAge, minAge, role, status, viweSex, sex,
    sexualOption, 
    viewSexualOption, 
    preference, 
    preferenceOption,
    birthDate, sign, email, phone, password, online, patron,
    nickname, avatar, cover, relationship, city, uf, cep,
    latitude, longitude, recommendation
  }: IAccountsDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findByUsername(username: string): Promise<void>;
  findByNickname(nickname: string): Promise<void>;
  findById(id: string): Promise<void>;
  session(email: string, username: string, password: string);
  sessionFast(id: string);
  list();
  update({
    id, país, username, age, maxAge, minAge, role, status, viweSex, sex,
    sexualOption, 
    viewSexualOption, 
    preference, 
    preferenceOption,
    birthDate, sign, email, phone, password, online, patron,
    nickname, avatar, cover, relationship, city, uf, cep,
    latitude, longitude, recommendation
  }: IAccountsDTO): void;
  delete({id});
}

export { IAccountsRepository, IAccountsDTO };
