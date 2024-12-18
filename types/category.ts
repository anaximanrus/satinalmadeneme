export interface Category {
  id: string;
  name: string;
  description: string;
  parentId: string | null;
  status: 'active' | 'passive';
  createdAt: string;
  updatedAt: string;
}

export type CreateCategoryInput = Omit<Category, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateCategoryInput = Partial<CreateCategoryInput>;