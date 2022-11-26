import { collections } from "../../../../../services/database.service";
import { Locations } from "../../models/Locations";
import { ILocationsRepository } from "../../repositories/ILocationsRepository";

class ListLocationsUseCase {
  constructor(private LocationsRepository: ILocationsRepository) {
    " ";
  }

  async execute() {
   const Locations = await collections.locations.find({});
   const LocationsAll = Locations.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(LocationsAll)
        }
  }

export { ListLocationsUseCase };
