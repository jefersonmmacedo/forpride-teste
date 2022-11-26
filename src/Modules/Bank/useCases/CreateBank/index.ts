import { BankRepository } from "../../repositories/implementations/BankRepository";
import { CreateBankController } from "./CreateBankController";
import { CreateBankUseCase } from "./CreateBankUseCase";

const bankRepository = BankRepository.getInstance();

const createBankUseCase = new CreateBankUseCase(bankRepository);

const createBankController = new CreateBankController(createBankUseCase);

export { createBankController };
