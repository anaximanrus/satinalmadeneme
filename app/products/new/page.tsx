import { ProductForm } from '@/components/products/forms/product-form';

export default function NewProductPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Product</h1>
        <p className="text-muted-foreground">
          Add a new product to the platform
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <ProductForm />
      </div>
    </div>
  );
}