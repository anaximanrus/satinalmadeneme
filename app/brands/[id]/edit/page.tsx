import { notFound } from 'next/navigation';
import { BrandForm } from '@/components/brands/forms/brand-form';
import { getBrandById, getBrandIds } from '@/lib/brands';

interface EditBrandPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const ids = await getBrandIds();
  return ids.map((id) => ({
    id,
  }));
}

export default async function EditBrandPage({ params }: EditBrandPageProps) {
  const brand = await getBrandById(params.id);

  if (!brand) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Brand</h1>
        <p className="text-muted-foreground">
          Update the details for {brand.name}
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <BrandForm initialData={brand} />
      </div>
    </div>
  );
}