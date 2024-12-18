import { notFound } from 'next/navigation';
import { ProductForm } from '@/components/products/forms/product-form';
import { getProductById, getProductIds } from '@/lib/products';

interface EditProductPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const ids = await getProductIds();
  return ids.map((id) => ({
    id,
  }));
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Product</h1>
        <p className="text-muted-foreground">
          Update the details for {product.name}
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <ProductForm initialData={product} />
      </div>
    </div>
  );
}