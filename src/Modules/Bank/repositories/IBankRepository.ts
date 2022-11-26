import { Bank } from "../models/Bank";

interface IBankDTO {
  id: string;
  idCompany: string;
  numberBank: string;
  nameBank: string;
  typeAccount: string;
  agency: string;
  numberAccount: string;
  nameClient: string;
  keyPix: string;
}

 
interface IBankRepository {
  create({ idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix,}: IBankDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findById(id: string): Promise<void>;
  session(email: string, id: string, password: string);
  list();
  update({id, idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix,}: IBankDTO): void;
  delete({id});
}

export { IBankRepository, IBankDTO };
