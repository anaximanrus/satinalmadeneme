import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getCategories } from '@/lib/categories';
import { CategoryActions } from './category-actions';
import { Badge } from '@/components/ui/badge';

export async function CategoriesTable() {
  const categories = await getCategories();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Parent Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell className="font-medium">{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>{category.parentId || '—'}</TableCell>
              <TableCell>
                <Badge
                  variant={category.status === 'active' ? 'default' : 'secondary'}
                >
                  {category.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <CategoryActions category={category} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}