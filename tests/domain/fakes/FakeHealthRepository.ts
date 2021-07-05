import IHealthRepository from '../../../src/domain/models/IHealthRepository'
import IHealth from '../../../src/domain/models/dtos/IHealth';

class FakeHealthRepository implements IHealthRepository {
 private health: IHealth[] = [];

 public create(message: IHealth): IHealth {
   this.health.push(message)

   return this.health[0]
 }
}

export default FakeHealthRepository;
