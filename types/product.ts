export interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  brandId: string;
  categoryId: string;
  status: 'active' | 'passive';
  unit: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateProductInput = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductInput = Partial<CreateProductInput>;