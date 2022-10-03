import DeliveryFee from "../../application/DeliveryFee";
import Preview from "../../application/Preview";
import HttpServer from "../http/HttpServer";

const cepGateway = {
  getDistance: (_cep: string) => 1000
}

export default class PreviewController {
  constructor(
    readonly httpServer: HttpServer,
		readonly deliveryFeeUseCase: DeliveryFee,
    readonly previewFeeUseCase: Preview,
  ) {
    httpServer.on('get', '/preview', async function (req) {
      const {
        orderProducts,
        cpf,
        cep,
        couponCode,
      } = req.body;
      const distance = cepGateway.getDistance(cep)
      const deliveryPayload = {
        distance,
        orderProducts
      }
      const deliveryFee = await deliveryFeeUseCase.execute(deliveryPayload);
      const previewPricePayload = {
        cpf,
        orderProducts,
        coupon: couponCode
      }
      const preview = await previewFeeUseCase.execute(previewPricePayload)

      const previewPayload = {
        deliveryFee,
        total: preview.total,
        subtotal: preview.subtotal
      }
      return previewPayload
    })
  }
}