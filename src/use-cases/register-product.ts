import { Product } from "../entities/product";
import { Slug } from "../entities/valeu-objects/slug";
import { ProductsRepository } from "../repositories/products-repository";

interface RegisterProductRequest {
  name: string;
  categoryId: string;
  image: string;
  price: number;
  isAvailable?: boolean;
}

export class RegisterProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    categoryId,
    image,
    price,
    isAvailable = true,
  }: RegisterProductRequest) {
    const slug = Slug.createFromText(name);
    const product = new Product({
      name,
      slug,
      price,
      image,
      isAvailable,
      categoryId,
    });

    await this.productsRepository.create(product);
    return product;
  }
}
