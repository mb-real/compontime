export type Product = {
  id: string
  name: string
  slug: string
  description: string
  price: number
  stock: number
  category: string
  imageUrl: string | null
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export type CreateProductInput = {
  name: string
  slug: string
  description: string
  price: number
  stock: number
  category: string
  imageUrl: string
  isActive: boolean
}

export type UpdateProductInput = CreateProductInput
