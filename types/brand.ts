export interface Brand {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'passive';
  createdAt: string;
  updatedAt: string;
}

export type CreateBrandInput = Omit<Brand, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateBrandInput = Partial<CreateBrandInput>;