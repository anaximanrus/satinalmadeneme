import { Product, CreateProductInput, UpdateProductInput } from '@/types/product';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Concrete Mix Type A',
    description: 'High-strength concrete mix for structural applications',
    sku: 'CON-MIX-A',
    brandId: '1',
    categoryId: '1',
    status: 'active',
    unit: 'kg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

export async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MOCK_PRODUCTS;
}

export async function getProductIds(): Promise<string[]> {
  const products = await getProducts();
  return products.map(product => product.id);
}

export async function getProductById(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_PRODUCTS.find((product) => product.id === id) ?? null;
}

export async function createProduct(input: CreateProductInput): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newProduct: Product = {
    ...input,
    id: Math.random().toString(36).substring(7),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return newProduct;
}

export async function updateProduct(id: string, input: UpdateProductInput): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const product = await getProductById(id);
  if (!product) throw new Error('Product not found');
  
  return {
    ...product,
    ...input,
    updatedAt: new Date().toISOString(),
  };
}

export async function deleteProduct(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}