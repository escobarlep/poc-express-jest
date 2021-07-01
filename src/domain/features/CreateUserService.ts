import 'reflect-metadata';
import { inject, injectable } from "tsyringe";

import IUserRepository from "../models/IUserRepository";

@injectable()
class CreateUserService {
    private userRepository: IUserRepository;
    
    constructor (@inject('UserRepository') userRepository: IUserRepository){
        this.userRepository = userRepository;
    }

    public async execute(user: any):Promise<any> {
        const userCreated = await this.userRepository.create(user);

        return userCreated;
    }
}

export default CreateUserService;