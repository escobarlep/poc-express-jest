import { container } from 'tsyringe';
import IUserRepository from '../../domain/models/IUserRepository';
import UserRepository from '../../domain/models/UserRepository';

container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository,
);