import { Scheduling } from "../models/Scheduling";

interface ISchedulingDTO {
  id: string;
  idClient: string;
  idProperty: string;
  idCompany: string;
  email: string;
  phone: string;
  whatsapp: string;
  status: string;
  day: string;
  month: string;
  year: string;
  shift: string;
  hour: string;
  ownACar: string;
  address: string;
  addressProperty: string;
  similarProperties: string;
  amountOfPeople: string;
  dateCompleted: Date;
}

 
interface ISchedulingRepository {
  create({ idClient, idProperty, idCompany, email, phone, whatsapp, status,
    day, month, year, shift, hour, ownACar, address, addressProperty, similarProperties, amountOfPeople, dateCompleted}: ISchedulingDTO): Promise<void>;
  list();
  update({id, idClient, idProperty, idCompany, email, phone, whatsapp, status,
    day, month, year, shift, hour, ownACar, address, addressProperty, similarProperties, amountOfPeople, dateCompleted}: ISchedulingDTO): void;
  delete({id});
}

export { ISchedulingRepository, ISchedulingDTO };
