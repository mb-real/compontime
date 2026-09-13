import { useParams } from "react-router-dom"

function ProductDetail() {
  const { productId } = useParams()

  return (
    <section className="container products-section">
      <h1>جزئیات محصول</h1>

      <p>شناسه محصول: {productId}</p>
    </section>
  )
}

export default ProductDetail
