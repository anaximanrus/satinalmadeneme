import { Site, CreateSiteInput, UpdateSiteInput } from '@/types/site';

// Simulated data - replace with actual API calls
const MOCK_SITES: Site[] = [
  {
    id: '1',
    name: 'Downtown Project',
    status: 'active',
    address: '123 Main St',
    city: 'New York',
    country: 'USA',
    manager: 'John Smith',
    contactEmail: 'john.smith@example.com',
    contactPhone: '+1 234 567 8900',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Riverside Complex',
    status: 'active',
    address: '456 River Rd',
    city: 'Chicago',
    country: 'USA',
    manager: 'Jane Doe',
    contactEmail: 'jane.doe@example.com',
    contactPhone: '+1 234 567 8901',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
];

export async function getSites(): Promise<Site[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MOCK_SITES;
}

export async function getSiteIds(): Promise<string[]> {
  const sites = await getSites();
  return sites.map(site => site.id);
}

export async function getSiteById(id: string): Promise<Site | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_SITES.find((site) => site.id === id) ?? null;
}

export async function createSite(input: CreateSiteInput): Promise<Site> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newSite: Site = {
    ...input,
    id: Math.random().toString(36).substring(7),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return newSite;
}

export async function updateSite(id: string, input: UpdateSiteInput): Promise<Site> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const site = await getSiteById(id);
  if (!site) throw new Error('Site not found');
  
  return {
    ...site,
    ...input,
    updatedAt: new Date().toISOString(),
  };
}

export async function deleteSite(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Implement actual delete logic
}