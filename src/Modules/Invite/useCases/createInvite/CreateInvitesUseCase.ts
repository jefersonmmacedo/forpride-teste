import { IInvitesRepository } from "../../repositories/IInviteRepository";


interface IRequest {
  idAccount: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  code: string;
  type: string;
  active: boolean;
  resend: boolean;
}

class CreateInvitesUseCase {
  constructor(private invitesRepository: IInvitesRepository) {
    " ";
  }
  
  async execute({code, idAccount, username, name, email, type, phone, active, resend }: IRequest): Promise<void> {
    const findEmail = await this.invitesRepository.findByInvites(email);

      await this.invitesRepository.create({
        code, idAccount, username, name, email, type, phone, active, resend
      });

  }
}

export { CreateInvitesUseCase };
