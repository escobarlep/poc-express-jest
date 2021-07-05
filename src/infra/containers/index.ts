import { container } from 'tsyringe'
import IHealthRepository from '../../domain/models/IHealthRepository'
import FakeHealthRepository from '../../../tests/domain/fakes/FakeHealthRepository'

container.registerSingleton<IHealthRepository>(
  'HealthRepository',
  FakeHealthRepository,
)
