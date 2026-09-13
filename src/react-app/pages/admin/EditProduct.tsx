import { useParams } from "react-router-dom"

function EditProduct() {
  const { productId } = useParams()

  return (
    <div>
      <h1>ویرایش محصول</h1>

      <p>شناسه محصول: {productId}</p>
    </div>
  )
}

export default EditProduct
