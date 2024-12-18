import { CategoryForm } from '@/components/categories/forms/category-form';

export default function NewCategoryPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Category</h1>
        <p className="text-muted-foreground">
          Add a new product category to the platform
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <CategoryForm />
      </div>
    </div>
  );
}