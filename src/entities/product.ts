import { Entity } from "../core/entities/entity";

interface ProductProps {
  name: string;
  slug: string;
  price: number;
  image: string;
  categoryId: string;
  isAvailable: boolean;
}

export class Product extends Entity<ProductProps> {
  get content() {
    return this.props;
  }
}
