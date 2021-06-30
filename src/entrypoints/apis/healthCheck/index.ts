import { IApplication, IRequest, IResponse } from '../../../infra'

export const HealthCheckRoute = (app: IApplication) => {
  app.get('/health', (req: IRequest, res: IResponse) => {
    res.send("I'm kinda Healthy I guess")
  })
}
