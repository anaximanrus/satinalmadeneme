import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getSites } from '@/lib/sites';
import { SiteActions } from './site-actions';
import { Badge } from '@/components/ui/badge';

export async function SitesTable() {
  const sites = await getSites();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Manager</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sites.map((site) => (
            <TableRow key={site.id}>
              <TableCell className="font-medium">{site.name}</TableCell>
              <TableCell>
                <Badge
                  variant={site.status === 'active' ? 'default' : 'secondary'}
                >
                  {site.status}
                </Badge>
              </TableCell>
              <TableCell>{site.manager}</TableCell>
              <TableCell>{`${site.city}, ${site.country}`}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm">{site.contactEmail}</span>
                  <span className="text-sm text-muted-foreground">
                    {site.contactPhone}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <SiteActions site={site} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}