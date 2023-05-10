import database from "../../database/prisma.js";

interface IProductRequest {
  name: string;
}

export default class FindProductUseCase {
  async execute({ name }: IProductRequest) {
    const productExists = await database.products.findFirst({
      where: {
        name,
      },
    });

    // Verifica se o produto existe
    if (!productExists) {
      throw new Error("Produto não encontrado", { cause: 400 });
    }

    // Mostra o produto
    return productExists;
  }
}
