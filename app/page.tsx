import { DashboardStats } from '@/components/dashboard/dashboard-stats';

export default function Home() {
  return (
    <div className="container space-y-8 p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardStats />
    </div>
  );
}