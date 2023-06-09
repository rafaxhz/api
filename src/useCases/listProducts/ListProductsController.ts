import { Request, Response } from "express";
import ListProductsUseCase from "./ListProductsUseCase.js";

export default class ListProductsController {
  async handle(request: Request, response: Response) {
    const listProductsUseCase = new ListProductsUseCase();

    return response.json(await listProductsUseCase.execute());
  }
}
