import Checkout from "../../application/Checkout";
import HttpServer from "../http/HttpServer";

const cepGateway = {
  getDistance: (_cep: string) => 1000
}

export default class CheckoutController {
  constructor(
    readonly httpServer: HttpServer,
		readonly checkout: Checkout,
  ) {
    httpServer.on('post', '/checkout', async function (req) {
      const {
        orderProducts,
        cpf,
      } = req.body;
      const orderCode = await checkout.execute({ orderProducts, cpf })

      return orderCode;
    })
  }
}