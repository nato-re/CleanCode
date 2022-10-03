import HttpServer, { methods, request } from "./HttpServer";
import express, {Application, Response, Request} from "express";

export default class ExpressAdapter implements HttpServer {
  readonly app: Application;
  constructor() {
    this.app = express()
    this.app.use(express.json())
  }
  on(method: methods, path: string, callback: Function): void {
    this.app[method](path, async  (req:Request, res: Response) => {
      const output = await callback(this.requestSerialization(req), res);
      res.json(output);
    })
  }
  requestSerialization(req:Request): request {
    return req;
  }
  listen(port: number): void {
    this.app.listen(port);
  }
}