import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getProducts } from '@/lib/products';
import { getBrandById } from '@/lib/brands';
import { getCategoryById } from '@/lib/categories';
import { ProductActions } from './product-actions';
import { Badge } from '@/components/ui/badge';

export async function ProductsTable() {
  const products = await getProducts();

  const productsWithDetails = await Promise.all(
    products.map(async (product) => {
      const [brand, category] = await Promise.all([
        getBrandById(product.brandId),
        getCategoryById(product.categoryId),
      ]);
      return {
        ...product,
        brandName: brand?.name || 'Unknown Brand',
        categoryName: category?.name || 'Unknown Category',
      };
    })
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productsWithDetails.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.brandName}</TableCell>
              <TableCell>{product.categoryName}</TableCell>
              <TableCell>
                <Badge
                  variant={product.status === 'active' ? 'default' : 'secondary'}
                >
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell>{product.unit}</TableCell>
              <TableCell className="text-right">
                <ProductActions product={product} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}