'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProcurementProduct } from '@/types/procurement';

interface ProcurementSummaryProps {
  products: ProcurementProduct[];
}

export function ProcurementSummary({ products }: ProcurementSummaryProps) {
  // Calculate total quantity
  const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);

  // Calculate approved products count
  const approvedProductsCount = products.filter(product => 
    // Add your approval logic here
    product.status === 'approved'
  ).length;

  // In a real application, these would be calculated based on actual prices
  const subtotal = 10000; // Example value
  const vat = subtotal * 0.18; // Assuming 18% VAT
  const total = subtotal + vat;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Product Quantity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalQuantity}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Amount (Excluding VAT)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${subtotal.toLocaleString()}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Amount (Including VAT)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${total.toLocaleString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}