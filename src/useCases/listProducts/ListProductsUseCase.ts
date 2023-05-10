import database from "../../database/prisma.js";
export default class ListProductsUseCase {
  async execute() {
    const productList = await database.products.findMany({});

    // Verifica se existe algum produto
    if (!productList.length) {
      throw new Error("Nenhum produto encontrado", { cause: 404 });
    }

    // Mostra a lista de produtos
    return productList;
  }
}
