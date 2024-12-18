import { ProcurementForm } from '@/components/procurements/forms/procurement-form';

export default function NewProcurementPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Procurement</h1>
        <p className="text-muted-foreground">
          Create a new procurement request
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <ProcurementForm />
      </div>
    </div>
  );
}