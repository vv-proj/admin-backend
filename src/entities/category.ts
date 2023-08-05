import { Entity } from "../core/entities/entity";

interface CategoryProps {
  name: string;
  slug: string;
  icon: string;
}

export class Category extends Entity<CategoryProps> {
  get content() {
    return this.props;
  }
}
