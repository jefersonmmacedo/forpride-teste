import { Posts } from "../models/Posts";

interface IPostsDTO {
  idAccount: string;
  age: string;
  avatar: string;
  nickname:string;
  username:string;
  nameGroup: string;
  nameForum: string;
  nameEvent: string;
  idEvent: string;
  idGroup: string;
  idForum: string;
  type: string;
  text: string;
  link: string;
  like: number;
  typeAccount: string;
  ufAccount: string;
  cityAccount: string;
  content: boolean;
}

interface IPostsRepository {
  create({
    idAccount,
    age,
    avatar,
    nickname,
    username,
    nameGroup,
    nameForum,
    nameEvent,
    idEvent,
    idGroup,
    idForum,
    type,
    text,
    link,
    like,
    typeAccount,
    ufAccount,
    cityAccount,
    content
    }: IPostsDTO): Promise<void>;
    update({text}): Promise<void>
  list();
  delete({id});
}

export { IPostsRepository, IPostsDTO };
