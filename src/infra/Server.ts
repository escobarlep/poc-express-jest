import { Application } from 'express'

export default class Server {
  constructor(
    private app: Application,
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
