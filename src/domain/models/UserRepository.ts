import IHealth from "./dtos/IHealth";
import IHealthRepository from "./IHealthRepository";

class HealthRepository implements IHealthRepository {
    public create(message: IHealth): IHealth {
        return message
    }
}

export default HealthRepository;