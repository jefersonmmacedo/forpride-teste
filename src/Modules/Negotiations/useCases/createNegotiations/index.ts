import { NegotiationsRepository } from "../../repositories/implementations/NegotiationsRepository";
import { CreateNegotiationsController } from "./CreateNegotiationsController";
import { CreateNegotiationsUseCase } from "./CreateNegotiationsUseCase";

const negotiationsRepository = NegotiationsRepository.getInstance();

const createNegotiationsUseCase = new CreateNegotiationsUseCase(negotiationsRepository);

const createNegotiationsController = new CreateNegotiationsController(createNegotiationsUseCase);

export { createNegotiationsController };
