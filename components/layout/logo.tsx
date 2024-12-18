import { Building } from 'lucide-react';

interface LogoProps {
  collapsed?: boolean;
}

export function Logo({ collapsed }: LogoProps) {
  if (collapsed) {
    return <Building className="h-6 w-6" />;
  }

  return (
    <div className="flex items-center gap-2">
      <Building className="h-6 w-6" />
      <div>
        <p className="text-sm font-semibold">Construction Pro</p>
        <p className="text-xs text-muted-foreground">Procurement Platform</p>
      </div>
    </div>
  );
}