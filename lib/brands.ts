import { Brand, CreateBrandInput, UpdateBrandInput } from '@/types/brand';

const MOCK_BRANDS: Brand[] = [
  {
    id: '1',
    name: 'BuildCo',
    description: 'Leading manufacturer of construction materials',
    status: 'active',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

export async function getBrands(): Promise<Brand[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MOCK_BRANDS;
}

export async function getBrandIds(): Promise<string[]> {
  const brands = await getBrands();
  return brands.map(brand => brand.id);
}

export async function getBrandById(id: string): Promise<Brand | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_BRANDS.find((brand) => brand.id === id) ?? null;
}

export async function createBrand(input: CreateBrandInput): Promise<Brand> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newBrand: Brand = {
    ...input,
    id: Math.random().toString(36).substring(7),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return newBrand;
}

export async function updateBrand(id: string, input: UpdateBrandInput): Promise<Brand> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const brand = await getBrandById(id);
  if (!brand) throw new Error('Brand not found');
  
  return {
    ...brand,
    ...input,
    updatedAt: new Date().toISOString(),
  };
}

export async function deleteBrand(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}