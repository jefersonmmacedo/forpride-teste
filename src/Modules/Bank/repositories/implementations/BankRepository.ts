import { Bank } from "../../models/Bank";
import { IBankRepository, IBankDTO } from "../IBankRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class BankRepository implements IBankRepository {
  private bank: Bank[];

  private static INSTANCE: BankRepository;

  private constructor() {
    this.bank = [];
  }

  public static getInstance(): BankRepository {
    if (!BankRepository.INSTANCE) {
      BankRepository.INSTANCE = new BankRepository();
    }

    return BankRepository.INSTANCE;
  }

  async findByEmail(email: string): Promise<void> {
    const findEmail = await collections.bank.findOne({email})
      if(findEmail) {
        throw new Error("Email already exists!")
      } 
  }
  
  
  async findById(id: string): Promise<void>  {
    const findNickname = await collections.bank.findOne({id})
    if(findNickname) {
      throw new Error("Nickname already exists!")
    } 
  }

  async create({idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix,}: IBankDTO) {
    const bank: Bank = new Bank();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(bank, {
        id, _id: id, idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix,created_at: new Date(),
      });
      this.bank.push(bank);
      
      await collections.bank.insertOne(Bank).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  async session(email: string, username: string, password: string){
    return {
      email,
      username,
      password
    }
  }
  async sessionFast(id: string){
    return {
     id
    }
  }

  list(){ }

  update({id, idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix,}):void {}

  async delete({id}) {
    await collections.bank.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { BankRepository };




