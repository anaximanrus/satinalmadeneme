import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ProcurementProduct } from '@/types/procurement';

interface ProcurementProductsProps {
  products: ProcurementProduct[];
}

export function ProcurementProducts({ products }: ProcurementProductsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          List of products included in this procurement
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.productId}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.unit}</TableCell>
                <TableCell>{product.description || '—'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}