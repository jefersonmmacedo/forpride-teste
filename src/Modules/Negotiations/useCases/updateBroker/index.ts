import { NegotiationsRepository } from "../../repositories/implementations/NegotiationsRepository";
import { UpdateNegotiationsController } from "./UpdateNegotiationsController";
import { UpdateNegotiationsUseCase } from "./UpdateNegotiationsUseCase";

const negotiationsRepository = NegotiationsRepository.getInstance();

const updateNegotiationsUseCase = new UpdateNegotiationsUseCase(negotiationsRepository);

const updateNegotiationsController = new UpdateNegotiationsController(updateNegotiationsUseCase);

export { updateNegotiationsController };
