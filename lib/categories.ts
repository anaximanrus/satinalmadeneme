import { Category, CreateCategoryInput, UpdateCategoryInput } from '@/types/category';

const MOCK_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Construction Materials',
    description: 'Basic materials used in construction',
    parentId: null,
    status: 'active',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

export async function getCategories(): Promise<Category[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MOCK_CATEGORIES;
}

export async function getCategoryIds(): Promise<string[]> {
  const categories = await getCategories();
  return categories.map(category => category.id);
}

export async function getCategoryById(id: string): Promise<Category | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_CATEGORIES.find((category) => category.id === id) ?? null;
}

export async function createCategory(input: CreateCategoryInput): Promise<Category> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newCategory: Category = {
    ...input,
    id: Math.random().toString(36).substring(7),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return newCategory;
}

export async function updateCategory(id: string, input: UpdateCategoryInput): Promise<Category> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const category = await getCategoryById(id);
  if (!category) throw new Error('Category not found');
  
  return {
    ...category,
    ...input,
    updatedAt: new Date().toISOString(),
  };
}

export async function deleteCategory(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}