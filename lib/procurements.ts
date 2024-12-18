import { Procurement, CreateProcurementInput, UpdateProcurementInput } from '@/types/procurement';

const MOCK_PROCUREMENTS: Procurement[] = [
  {
    id: '1',
    procurementNo: 'PRO-2024-001',
    siteId: '1',
    title: 'Q1 Construction Materials',
    products: [
      {
        id: '1',
        productId: '1',
        quantity: 1000,
        unit: 'kg',
        description: 'Standard quality concrete mix',
      },
    ],
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2024-03-31T00:00:00Z',
    ownerId: '1',
    status: 'in_process',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

export async function getProcurements(): Promise<Procurement[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MOCK_PROCUREMENTS;
}

export async function getProcurementIds(): Promise<string[]> {
  const procurements = await getProcurements();
  return procurements.map(procurement => procurement.id);
}

export async function getProcurementById(id: string): Promise<Procurement | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_PROCUREMENTS.find((procurement) => procurement.id === id) ?? null;
}

export async function createProcurement(input: CreateProcurementInput): Promise<Procurement> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newProcurement: Procurement = {
    ...input,
    id: Math.random().toString(36).substring(7),
    procurementNo: `PRO-2024-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return newProcurement;
}

export async function updateProcurement(id: string, input: UpdateProcurementInput): Promise<Procurement> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const procurement = await getProcurementById(id);
  if (!procurement) throw new Error('Procurement not found');
  
  return {
    ...procurement,
    ...input,
    updatedAt: new Date().toISOString(),
  };
}

export async function deleteProcurement(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}