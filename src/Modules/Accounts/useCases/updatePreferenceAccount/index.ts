import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { UpdatePreferenceAccountController } from "./UpdatePreferenceAccountController";
import { UpdatePreferenceAccountUseCase } from "./UpdatePreferenceAccountUseCase";

const accountsRepository = AccountsRepository.getInstance();

const updatePreferenceAccountUseCase = new UpdatePreferenceAccountUseCase(accountsRepository);

const updatePreferenceAccountController = new UpdatePreferenceAccountController(updatePreferenceAccountUseCase);

export { updatePreferenceAccountController };
