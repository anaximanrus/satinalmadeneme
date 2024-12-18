import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ProcurementProduct } from '@/types/procurement';
import { ProcurementProductActions } from './procurement-product-actions';

interface ProcurementProductTableProps {
  products: ProcurementProduct[];
}

export function ProcurementProductTable({ products }: ProcurementProductTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Lowest Offer</TableHead>
            <TableHead>Highest Offer</TableHead>
            <TableHead>Last Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.productId}</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Brand Name</TableCell>
              <TableCell>{product.quantity} {product.unit}</TableCell>
              <TableCell>$1,000</TableCell>
              <TableCell>$1,500</TableCell>
              <TableCell>$1,200</TableCell>
              <TableCell className="text-right">
                <ProcurementProductActions product={product} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}