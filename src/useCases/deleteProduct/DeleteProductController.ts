import { Request, Response } from "express";
import DeleteProductUseCase from "./DeleteProductUseCase";

export default class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteProductUseCase = new DeleteProductUseCase();

    return response.json(
      await deleteProductUseCase.execute({
        id,
      })
    );
  }
}
