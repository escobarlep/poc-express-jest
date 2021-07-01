import IUserRepository from '../../../src/domain/models/IUserRepository'

class FakeUserRepository implements IUserRepository {
 private users = [];

 public async create(user: any): Promise<any> {
    
    // this.users.push(user);

    return user;
 }
}

export default FakeUserRepository;