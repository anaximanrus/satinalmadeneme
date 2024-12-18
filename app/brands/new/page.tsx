import { BrandForm } from '@/components/brands/forms/brand-form';

export default function NewBrandPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Brand</h1>
        <p className="text-muted-foreground">
          Add a new brand to the platform
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <BrandForm />
      </div>
    </div>
  );
}