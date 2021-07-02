import "reflect-metadata"
import './containers';
import { IApplication } from "./HttpInteraces";
export default class Server {
  constructor(
    public app: IApplication,
    private port: number
  ){}

  public bootstrap(){
    this.app.listen(this.port, () => {
      console.log(`Can you believe I am actually running on port ${this.port} ?`)
      console.log(`Check it out http://localhost:${this.port}/health`)
    })
  }

  public registerPlugin(plugin: any){
    this.app.use(plugin)
    return this
  }

  public registerRoute(route: Function) {
    route(this.app)
    return this
  }
}
