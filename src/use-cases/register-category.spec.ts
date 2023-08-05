import { test, expect } from "vitest";
import { CategoriesRepository } from "../repositories/categories-repository";
import { Category } from "../entities/category";
import { RegisterCategoryUseCase } from "./register-category";

const fakeCategoriesRepository: CategoriesRepository = {
  create: async (category: Category): Promise<void> => {
    return;
  },
};

test("register a category", async () => {
  const registerCategory = new RegisterCategoryUseCase(
    fakeCategoriesRepository
  );

  const category = await registerCategory.execute({
    name: "Category test",
    icon: "example",
  });

  expect(category.content).toEqual(
    expect.objectContaining({
      name: "Category test",
      icon: "example",
      slug: "category-test",
    })
  );
});
