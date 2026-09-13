type ProductCardProps = {
  name: string
  category: string
  price: number
}

function ProductCard({
  name,
  category,
  price,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image">
        <span>تصویر محصول</span>
      </div>

      <div className="product-info">
        <p className="product-category">{category}</p>

        <h3>{name}</h3>

        <div className="product-footer">
          <strong>{price.toLocaleString("fa-IR")} تومان</strong>

          <button type="button">افزودن</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
