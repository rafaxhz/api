import database from "../../database/prisma.js";

interface IProductRequest {
  id: string;
}

export default class DeleteProductUseCase {
  async execute({ id }: IProductRequest) {
    // Verifica se o produto existe
    const productExists = await database.products.findFirst({
      where: {
        id,
      },
    });

    if (!productExists) {
      throw new Error("Esse produto não existe", { cause: 400 });
    }

    // Deleta o produto
    return await database.products.delete({
      where: {
        id,
      },
    });
  }
}
