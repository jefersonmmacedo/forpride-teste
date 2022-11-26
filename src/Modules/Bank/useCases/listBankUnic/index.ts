import { BankRepository } from "../../repositories/implementations/BankRepository";
import { ListBankUnicUseCase } from "./ListBankUnicUseCase";
import { ListBankUnicController } from "./ListBankUnicController";

const bankRepository = BankRepository.getInstance();

const listBankUnicUsecase = new ListBankUnicUseCase(bankRepository);

const listBankUnicController = new ListBankUnicController(listBankUnicUsecase);

export { listBankUnicController };
