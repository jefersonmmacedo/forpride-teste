import { Negotiations } from "../../models/Negotiations";
import { INegotiationsRepository, INegotiationsDTO } from "../INegotiationsRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class NegotiationsRepository implements INegotiationsRepository {
  private negotiations: Negotiations[];

  private static INSTANCE: NegotiationsRepository;

  private constructor() {
    this.negotiations = [];
  }

  public static getInstance(): NegotiationsRepository {
    if (!NegotiationsRepository.INSTANCE) {
      NegotiationsRepository.INSTANCE = new NegotiationsRepository();
    }

    return NegotiationsRepository.INSTANCE;
  }


  async create({idCompany, idClient, idProperty, typNegotiation, documentations, contract, staus, deadline, parcel, notifications,}: INegotiationsDTO) {
    const negotiations: Negotiations = new Negotiations();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(negotiations, {
        id, _id: id, idCompany, idClient, idProperty, typNegotiation, documentations, contract, staus, deadline, parcel, notifications,created_at: new Date(),
      });
      this.negotiations.push(negotiations);
      
      await collections.negotiations.insertOne(Negotiations).then((result) => {
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

  update({id, idCompany, idClient, idProperty, typNegotiation, documentations, contract, staus, deadline, parcel, notifications,}):void {}

  async delete({id}) {
    await collections.negotiations.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { NegotiationsRepository };




