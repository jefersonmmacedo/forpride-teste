import { NegotiationsRepository } from "../../repositories/implementations/NegotiationsRepository";
import { ListNegotiationsUnicUseCase } from "./ListNegotiationsUnicUseCase";
import { ListNegotiationsUnicController } from "./ListNegotiationsUnicController";

const negotiationsRepository = NegotiationsRepository.getInstance();

const listNegotiationsUnicUsecase = new ListNegotiationsUnicUseCase(negotiationsRepository);

const listNegotiationsUnicController = new ListNegotiationsUnicController(listNegotiationsUnicUsecase);

export { listNegotiationsUnicController };
