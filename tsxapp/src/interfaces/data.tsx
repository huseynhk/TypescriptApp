export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  rating: number;
  stock: number;
  category: string;
  image: string;
  create_at: number;
  color: string;
}

export interface InitialStateType extends Omit<Product, "id"> {}
