export type Kategori = "novel" | "komik" | "pelajaran";

export interface Product {
  id: number;
  title: string;
  price: number;
  kategori: Kategori;
  discountPrice?: number;
  stock: number;
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}