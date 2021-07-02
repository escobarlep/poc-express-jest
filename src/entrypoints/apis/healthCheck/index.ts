import { container } from 'tsyringe';
import CreateHealth from '../../../domain/features/CreateHealth'
import { IApplication, IRequest, IResponse } from '../../../infra'
const createHealth =  container.resolve(CreateHealth)

export const HealthCheckRoute = (app: IApplication) => {
  // console.log('batata')
  app.get('/health', (req: IRequest, res: IResponse) => {
    const messages = createHealth.execute({
      message: 'health check answer',
      date: new Date(),
    })

    res.status(200).json(messages)
  })
}
