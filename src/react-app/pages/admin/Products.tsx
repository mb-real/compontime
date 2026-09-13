import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import {
  deleteProduct,
  getProducts,
} from "../../services/products"

import type { Product } from "../../types/product"

function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  async function loadProducts() {
    try {
      setLoading(true)
      setError("")

      const data = await getProducts()
      setProducts(data)
    } catch (error) {
      console.error(error)
      setError("دریافت محصولات ناموفق بود.")
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "آیا از حذف این محصول مطمئن هستید؟",
    )

    if (!confirmed) {
      return
    }

    try {
      await deleteProduct(id)

      setProducts((currentProducts) =>
        currentProducts.filter(
          (product) => product.id !== id,
        ),
      )
    } catch (error) {
      console.error(error)
      setError("حذف محصول ناموفق بود.")
    }
  }

  useEffect(() => {
    void loadProducts()
  }, [])

  if (loading) {
    return (
      <section className="admin-page">
        <h1>محصولات</h1>
        <p>در حال دریافت محصولات...</p>
      </section>
    )
  }

  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>محصولات</h1>
          <p>
            مدیریت محصولات فروشگاه
          </p>
        </div>

        <Link
          to="/admin/products/new"
          className="button"
        >
          افزودن محصول
        </Link>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {products.length === 0 ? (
        <div className="empty-state">
          <h2>محصولی وجود ندارد</h2>
          <p>
            هنوز محصولی به فروشگاه اضافه نشده است.
          </p>

          <Link
            to="/admin/products/new"
            className="button"
          >
            افزودن اولین محصول
          </Link>
        </div>
      ) : (
        <div className="products-table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th>نام</th>
                <th>دسته‌بندی</th>
                <th>قیمت</th>
                <th>موجودی</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>

                  <td>{product.category}</td>

                  <td>
                    {product.price.toLocaleString("fa-IR")} تومان
                  </td>

                  <td>{product.stock}</td>

                  <td>
                    {product.isActive
                      ? "فعال"
                      : "غیرفعال"}
                  </td>

                  <td>
                    <div className="table-actions">
                      <Link
                        to={`/admin/products/${product.id}/edit`}
                      >
                        ویرایش
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          void handleDelete(product.id)
                        }
                      >
                        حذف
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Products
