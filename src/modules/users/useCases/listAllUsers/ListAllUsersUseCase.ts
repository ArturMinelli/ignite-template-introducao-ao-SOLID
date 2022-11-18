import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error(`User with id ${user_id} could not be found`);
    }

    if (!user.admin) {
      throw new Error(
        `User with id ${user_id} is not authorized to list users`
      );
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
