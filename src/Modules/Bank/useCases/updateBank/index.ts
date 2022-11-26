import { BankRepository } from "../../repositories/implementations/BankRepository";
import { UpdateBankController } from "./UpdateBankController";
import { UpdateBankUseCase } from "./UpdateBankUseCase";

const bankRepository = BankRepository.getInstance();

const updateBankUseCase = new UpdateBankUseCase(bankRepository);

const updateBankController = new UpdateBankController(updateBankUseCase);

export { updateBankController };
