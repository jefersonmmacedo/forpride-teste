import { collections } from "../../../../../services/database.service";
import { Company } from "../../models/Company";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

class ListCompanyUnicUseCase {
  constructor(private CompanyRepository: ICompanyRepository) {
    " ";
  }

  async execute() {
   const Company = await collections.company.find({});
   const CompanyAll = Company.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(CompanyAll)
        }
  }

export { ListCompanyUnicUseCase };
