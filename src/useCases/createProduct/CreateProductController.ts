import { Request, Response } from "express";
import CreateProductUseCase from "./CreateProductUseCase";

export default class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, price, description } = request.body;

    const createProductUseCase = new CreateProductUseCase();

    return response.json(
      await createProductUseCase.execute({
        name,
        price,
        description,
      })
    );
  }
}
