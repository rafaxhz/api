import { Request, Response } from "express";
import FindProductUseCase from "./FindProductUseCase";

export default class FindProductController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const findProductUseCase = new FindProductUseCase();

    return response.json(
      await findProductUseCase.execute({
        name,
      })
    );
  }
}
