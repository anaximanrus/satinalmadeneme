import { notFound } from 'next/navigation';
import { SiteForm } from '@/components/sites/forms/site-form';
import { getSiteById, getSiteIds } from '@/lib/sites';

interface EditSitePageProps {
  params: {
    id: string;
  };
}

// This is required for static site generation with dynamic routes
export async function generateStaticParams() {
  const ids = await getSiteIds();
  return ids.map((id) => ({
    id,
  }));
}

export default async function EditSitePage({ params }: EditSitePageProps) {
  const site = await getSiteById(params.id);

  if (!site) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Site</h1>
        <p className="text-muted-foreground">
          Update the details for {site.name}
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <SiteForm initialData={site} />
      </div>
    </div>
  );
}