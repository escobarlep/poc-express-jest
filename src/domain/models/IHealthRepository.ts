import IHealth from './dtos/IHealth'

export default interface IHealthRepository {
  create(message: IHealth): IHealth
}
