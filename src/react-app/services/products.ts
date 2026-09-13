import type {
  CreateProductInput,
  Product,
  UpdateProductInput,
} from "../types/product"

const API_BASE_URL = "/api"

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products`)

  if (!response.ok) {
    throw new Error("دریافت محصولات با خطا مواجه شد.")
  }

  return response.json()
}

export async function getProduct(
  id: string,
): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`)

  if (!response.ok) {
    throw new Error("دریافت محصول با خطا مواجه شد.")
  }

  return response.json()
}

export async function createProduct(
  data: CreateProductInput,
): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("ایجاد محصول با خطا مواجه شد.")
  }

  return response.json()
}

export async function updateProduct(
  id: string,
  data: UpdateProductInput,
): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("ویرایش محصول با خطا مواجه شد.")
  }

  return response.json()
}

export async function deleteProduct(
  id: string,
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("حذف محصول با خطا مواجه شد.")
  }
}
