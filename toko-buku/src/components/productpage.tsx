import { useEffect, useState } from "react";
import type { Product, Review } from "../types";

interface Props { productId: number; }

export default function ProductPage({ productId }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!res.ok) throw new Error(`Gagal memuat: status ${res.status}`);
        const data = await res.json();
        setProduct({ id: data.id, title: data.title, price: data.price,
          kategori: "novel", stock: data.stock });
        setReviews(data.reviews.map((r: any, i: number) => ({
          id: i, user: r.reviewerName, rating: r.rating, comment: r.comment })));
      } catch (e) {
        setError((e as Error).message);
      }
    }
    load();
  }, [productId]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Memuat...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Rp {product.price}</p>
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>{r.user}: {r.comment}</li>
        ))}
      </ul>
    </div>
  );
}