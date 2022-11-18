import { v4 as uuidV4 } from "uuid";

import { ICreateUserDTO } from "../repositories/IUsersRepository";

export class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at?: Date;

  constructor({ name, email }: ICreateUserDTO) {
    this.name = name;
    this.email = email;

    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }
  }
}
