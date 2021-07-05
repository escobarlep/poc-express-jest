import { inject, injectable } from 'tsyringe'
import IHealth from '../models/dtos/IHealth'
import IHealthRepository from '../models/IHealthRepository'

@injectable()
class CreateHealth {
  private healthRepository: IHealthRepository

  constructor(@inject('HealthRepository') healthRepository: IHealthRepository) {
    this.healthRepository = healthRepository
  }

  public execute(message: IHealth): IHealth {
    return this.healthRepository.create(message)
  }
}

export default CreateHealth
