import { test, expect } from "vitest";
import { Slug } from "./slug";

test("it should be able to create a new slug from text", () => {
  const slug = Slug.createFromText("Ômega-3 Plus");

  expect(slug).toEqual("omega-3-plus");
});
