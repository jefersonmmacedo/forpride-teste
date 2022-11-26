import { BankRepository } from "../../../Bank/repositories/implementations/BankRepository";
import { ListBankUseCase } from "./ListBankUseCase";
import { ListBankController } from "./ListBankController";

const bankRepository = BankRepository.getInstance();

const listBankUsecase = new ListBankUseCase(bankRepository);

const listBankController = new ListBankController(listBankUsecase);

export { listBankController };
