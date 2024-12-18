import { Supplier, CreateSupplierInput, UpdateSupplierInput } from '@/types/supplier';

const MOCK_SUPPLIERS: Supplier[] = [
  {
    id: '1',
    name: 'ABC Construction Supplies',
    email: 'contact@abcsupplies.com',
    phone: '+1 234 567 8900',
    country: 'USA',
    city: 'New York',
    address: '123 Supply Street',
    authorizedPerson: 'John Smith',
    status: 'active',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

export async function getSuppliers(): Promise<Supplier[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MOCK_SUPPLIERS;
}

export async function getSupplierIds(): Promise<string[]> {
  const suppliers = await getSuppliers();
  return suppliers.map(supplier => supplier.id);
}

export async function getSupplierById(id: string): Promise<Supplier | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_SUPPLIERS.find((supplier) => supplier.id === id) ?? null;
}

export async function createSupplier(input: CreateSupplierInput): Promise<Supplier> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newSupplier: Supplier = {
    ...input,
    id: Math.random().toString(36).substring(7),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return newSupplier;
}

export async function updateSupplier(id: string, input: UpdateSupplierInput): Promise<Supplier> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const supplier = await getSupplierById(id);
  if (!supplier) throw new Error('Supplier not found');
  
  return {
    ...supplier,
    ...input,
    updatedAt: new Date().toISOString(),
  };
}

export async function deleteSupplier(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}