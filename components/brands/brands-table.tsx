import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getBrands } from '@/lib/brands';
import { BrandActions } from './brand-actions';
import { Badge } from '@/components/ui/badge';

export async function BrandsTable() {
  const brands = await getBrands();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {brands.map((brand) => (
            <TableRow key={brand.id}>
              <TableCell className="font-medium">{brand.name}</TableCell>
              <TableCell>{brand.description}</TableCell>
              <TableCell>
                <Badge
                  variant={brand.status === 'active' ? 'default' : 'secondary'}
                >
                  {brand.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <BrandActions brand={brand} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}