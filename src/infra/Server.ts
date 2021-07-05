import 'reflect-metadata'
import './containers';
import { IApplication } from './HttpInteraces'
export default class Server {
  constructor(
    public app: IApplication,
    private port: number
  ) { }

  public bootstrap() {
    this.app.listen(this.port, () => {
      console.log(`Server running. Test in http://localhost:${this.port}/health`)
    })
  }

  public registerPlugin(plugin: any) {
    this.app.use(plugin)
    return this
  }

  public registerRoute(route: Function) {
    route(this.app)
    return this
  }
}
