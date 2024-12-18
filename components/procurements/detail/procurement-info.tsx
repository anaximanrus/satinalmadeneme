import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Procurement } from '@/types/procurement';
import { format } from 'date-fns';

interface ProcurementInfoProps {
  procurement: Procurement;
}

export function ProcurementInfo({ procurement }: ProcurementInfoProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <InfoCard
        title="Status"
        content={
          <Badge variant={procurement.status === 'approved' ? 'default' : 'secondary'}>
            {procurement.status.replace('_', ' ')}
          </Badge>
        }
      />
      <InfoCard
        title="Site"
        content={procurement.siteId}
      />
      <InfoCard
        title="Start Date"
        content={format(new Date(procurement.startDate), 'MMM d, yyyy')}
      />
      <InfoCard
        title="End Date"
        content={format(new Date(procurement.endDate), 'MMM d, yyyy')}
      />
    </div>
  );
}

interface InfoCardProps {
  title: string;
  content: React.ReactNode;
}

function InfoCard({ title, content }: InfoCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
      </CardContent>
    </Card>
  );
}