export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  authorizedPerson: string;
  status: 'active' | 'passive';
  createdAt: string;
  updatedAt: string;
}

export type CreateSupplierInput = Omit<Supplier, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateSupplierInput = Partial<CreateSupplierInput>;