import { SupplierForm } from '@/components/suppliers/forms/supplier-form';

export default function NewSupplierPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Supplier</h1>
        <p className="text-muted-foreground">
          Add a new supplier to the platform
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <SupplierForm />
      </div>
    </div>
  );
}