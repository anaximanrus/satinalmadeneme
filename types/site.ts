export interface Site {
  id: string;
  name: string;
  status: 'active' | 'passive';
  address: string;
  city: string;
  country: string;
  manager: string;
  contactEmail: string;
  contactPhone: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateSiteInput = Omit<Site, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateSiteInput = Partial<CreateSiteInput>;