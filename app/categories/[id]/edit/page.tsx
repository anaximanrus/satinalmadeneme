import { notFound } from 'next/navigation';
import { CategoryForm } from '@/components/categories/forms/category-form';
import { getCategoryById, getCategoryIds } from '@/lib/categories';

interface EditCategoryPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const ids = await getCategoryIds();
  return ids.map((id) => ({
    id,
  }));
}

export default async function EditCategoryPage({ params }: EditCategoryPageProps) {
  const category = await getCategoryById(params.id);

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Category</h1>
        <p className="text-muted-foreground">
          Update the details for {category.name}
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <CategoryForm initialData={category} />
      </div>
    </div>
  );
}