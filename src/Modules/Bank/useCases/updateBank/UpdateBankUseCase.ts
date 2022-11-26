import { hash } from "bcrypt";
import { IBankRepository } from "../../repositories/IBankRepository";
import { Request, Response } from "express";

interface IRequest {
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

class UpdateBankUseCase {
  constructor(private BankRepository: IBankRepository) {
    " ";
  }
  
  async execute({id, idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix,}: IRequest): Promise<void> {
      await this.BankRepository.update({
        id, idCompany, numberBank, nameBank, typeAccount, agency, numberAccount, nameClient, keyPix,
      });

  }
}

export { UpdateBankUseCase };
