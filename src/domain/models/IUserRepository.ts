
export default interface IUserRepository {
    create(user: any): Promise<any>;
}