export type ProcurementStatus = 
  | 'approved'
  | 'in_process'
  | 'waiting_for_proposal'
  | 'refused'
  | 'canceled';

export interface ProcurementProduct {
  id: string;
  productId: string;
  quantity: number;
  unit: string;
  description?: string;
  status?: 'approved' | 'pending' | 'rejected';
}

export interface Procurement {
  id: string;
  procurementNo: string;
  siteId: string;
  title: string;
  products: ProcurementProduct[];
  startDate: string;
  endDate: string;
  ownerId: string;
  status: ProcurementStatus;
  createdAt: string;
  updatedAt: string;
}