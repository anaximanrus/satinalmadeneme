'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SupplierOffer {
  id: string;
  supplierName: string;
  proposedProducts: number;
  chosenProducts: number;
  totalValue: number;
  totalValueWithVat: number;
  status: 'pending' | 'approved' | 'rejected';
}

// Mock data - replace with actual data in production
const mockOffers: SupplierOffer[] = [
  {
    id: '1',
    supplierName: 'Supplier A',
    proposedProducts: 5,
    chosenProducts: 3,
    totalValue: 15000,
    totalValueWithVat: 17700,
    status: 'approved',
  },
  {
    id: '2',
    supplierName: 'Supplier B',
    proposedProducts: 4,
    chosenProducts: 2,
    totalValue: 12000,
    totalValueWithVat: 14160,
    status: 'pending',
  },
];

export function ProcurementSupplierOffers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Companies Providing Price Offers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Supplier Name</TableHead>
              <TableHead>Proposed Products</TableHead>
              <TableHead>Chosen Products</TableHead>
              <TableHead>Total Value (Exc. VAT)</TableHead>
              <TableHead>Total Value (Inc. VAT)</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOffers.map((offer) => (
              <TableRow key={offer.id}>
                <TableCell className="font-medium">
                  {offer.supplierName}
                </TableCell>
                <TableCell>{offer.proposedProducts}</TableCell>
                <TableCell>{offer.chosenProducts}</TableCell>
                <TableCell>${offer.totalValue.toLocaleString()}</TableCell>
                <TableCell>${offer.totalValueWithVat.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      offer.status === 'approved'
                        ? 'default'
                        : offer.status === 'rejected'
                        ? 'destructive'
                        : 'secondary'
                    }
                  >
                    {offer.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}