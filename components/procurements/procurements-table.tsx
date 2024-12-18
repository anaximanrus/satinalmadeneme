import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getProcurements } from '@/lib/procurements';
import { ProcurementActions } from './procurement-actions';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { ProcurementProductsButton } from './procurement-products-button';

export async function ProcurementsTable() {
  const procurements = await getProcurements();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Procurement No</TableHead>
            <TableHead>Site</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {procurements.map((procurement) => (
            <TableRow key={procurement.id}>
              <TableCell className="font-medium">
                {procurement.procurementNo}
              </TableCell>
              <TableCell>{procurement.siteId}</TableCell>
              <TableCell>{procurement.title}</TableCell>
              <TableCell>
                <ProcurementProductsButton products={procurement.products} />
              </TableCell>
              <TableCell>
                {format(new Date(procurement.startDate), 'MMM d, yyyy')}
              </TableCell>
              <TableCell>
                {format(new Date(procurement.endDate), 'MMM d, yyyy')}
              </TableCell>
              <TableCell>{procurement.ownerId}</TableCell>
              <TableCell>
                <Badge
                  variant={procurement.status === 'approved' ? 'default' : 'secondary'}
                >
                  {procurement.status.replace('_', ' ')}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <ProcurementActions procurement={procurement} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}