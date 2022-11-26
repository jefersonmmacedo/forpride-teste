import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { UpdateAvatarController } from "./UpdateAvatarController";
import { UpdateAvatarUseCase } from "./UpdateAvatarUseCase";

const accountsRepository = AccountsRepository.getInstance();

const updateAvatarUseCase = new UpdateAvatarUseCase(accountsRepository);

const updateAvatarController = new UpdateAvatarController(updateAvatarUseCase);

export { updateAvatarController };
