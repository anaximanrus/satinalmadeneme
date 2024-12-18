import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Package, ShoppingCart, Users } from 'lucide-react';

const stats = [
  {
    title: 'Active Sites',
    value: '12',
    icon: Building2,
  },
  {
    title: 'Products',
    value: '2,345',
    icon: Package,
  },
  {
    title: 'Suppliers',
    value: '156',
    icon: ShoppingCart,
  },
  {
    title: 'Users',
    value: '89',
    icon: Users,
  },
] as const;

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}