import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getSuppliers } from '@/lib/suppliers';
import { SupplierActions } from './supplier-actions';
import { Badge } from '@/components/ui/badge';

export async function SuppliersTable() {
  const suppliers = await getSuppliers();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Authorized Person</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell className="font-medium">{supplier.name}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm">{supplier.email}</span>
                  <span className="text-sm text-muted-foreground">
                    {supplier.phone}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm">{supplier.city}</span>
                  <span className="text-sm text-muted-foreground">
                    {supplier.country}
                  </span>
                </div>
              </TableCell>
              <TableCell>{supplier.authorizedPerson}</TableCell>
              <TableCell>
                <Badge
                  variant={supplier.status === 'active' ? 'default' : 'secondary'}
                >
                  {supplier.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <SupplierActions supplier={supplier} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}