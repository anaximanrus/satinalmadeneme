import { SiteForm } from '@/components/sites/site-form';

export default function NewSitePage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Site</h1>
        <p className="text-muted-foreground">
          Add a new construction site to the platform
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <SiteForm />
      </div>
    </div>
  );
}