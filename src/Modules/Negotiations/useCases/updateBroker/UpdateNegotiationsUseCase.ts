import { hash } from "bcrypt";
import { INegotiationsRepository } from "../../repositories/INegotiationsRepository";
import { Request, Response } from "express";

interface IRequest {
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

class UpdateNegotiationsUseCase {
  constructor(private NegotiationsRepository: INegotiationsRepository) {
    " ";
  }
  
  async execute({id, idCompany, idClient, idProperty, typNegotiation, documentations, contract, staus, deadline, parcel, notifications,}: IRequest): Promise<void> {
   
      await this.NegotiationsRepository.update({
        id, idCompany, idClient, idProperty, typNegotiation, documentations, contract, staus, deadline, parcel, notifications,
      });

  }
}

export { UpdateNegotiationsUseCase };
