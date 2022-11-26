import { Negotiations } from "../models/Negotiations";

interface INegotiationsDTO {
  id: string;
  idCompany: string;
  idClient: string;
  idProperty: string;
  typNegotiation: string;
  documentations: object;
  contract: string;
  staus: string;
  deadline: string;
  parcel: string;
  notifications: object;
}

 

interface INegotiationsRepository {
  create({ idCompany, idClient, idProperty, typNegotiation, documentations, contract, staus, deadline, parcel, notifications,}: INegotiationsDTO): Promise<void>;
  list();
  update({id, idCompany, idClient, idProperty, typNegotiation, documentations, contract, staus, deadline, parcel, notifications,}: INegotiationsDTO): void;
  delete({id});
}

export { INegotiationsRepository, INegotiationsDTO };
