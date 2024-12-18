import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SiteNotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Site Not Found</h1>
      <p className="text-muted-foreground">
        The site you are looking for does not exist.
      </p>
      <Button asChild>
        <Link href="/sites">Return to Sites</Link>
      </Button>
    </div>
  );
}