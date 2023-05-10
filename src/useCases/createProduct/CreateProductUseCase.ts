import database from "../../database/prisma.js";

interface IProductRequest {
  name: string;
  price: number;
  description?: string;
}

export default class CreateProductUseCase {
  async execute({ name, price, description }: IProductRequest) {
    // Verifica se o produto já existe
    const productAlreadyExists = await database.products.findFirst({
      where: {
        name,
      },
    });

    if (productAlreadyExists) {
      throw new Error("Esse produto já existe", { cause: 400 });
    }

    // Cria o produto
    return await database.products.create({
      data: {
        name,
        price,
        description,
      },
    });
  }
}
