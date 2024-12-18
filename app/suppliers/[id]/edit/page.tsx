import { notFound } from 'next/navigation';
import { SupplierForm } from '@/components/suppliers/forms/supplier-form';
import { getSupplierById, getSupplierIds } from '@/lib/suppliers';

interface EditSupplierPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const ids = await getSupplierIds();
  return ids.map((id) => ({
    id,
  }));
}

export default async function EditSupplierPage({ params }: EditSupplierPageProps) {
  const supplier = await getSupplierById(params.id);

  if (!supplier) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Supplier</h1>
        <p className="text-muted-foreground">
          Update the details for {supplier.name}
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <SupplierForm initialData={supplier} />
      </div>
    </div>
  );
}