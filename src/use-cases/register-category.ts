import { Category } from "../entities/category";
import { Slug } from "../entities/valeu-objects/slug";
import { CategoriesRepository } from "../repositories/categories-repository";

interface RegisterCategoryRequest {
  name: string;
  icon: string;
}

export class RegisterCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({ name, icon }: RegisterCategoryRequest) {
    const slug = Slug.createFromText(name);
    const category = new Category({ name, icon, slug });

    await this.categoriesRepository.create(category);
    return category;
  }
}
