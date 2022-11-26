import { FavoriteRepository } from "../../repositories/implementations/AlertRepository";
import { ListFavoriteUserController } from "./ListFavoriteUserController";
import { ListFavoriteUserUseCase } from "./ListFavoriteUserUseCase";

const favoriteRepository = FavoriteRepository.getInstance();

const listFavoriteUserUsecase = new ListFavoriteUserUseCase(favoriteRepository);

const listFavoriteUserController = new ListFavoriteUserController(listFavoriteUserUsecase);

export { listFavoriteUserController };
