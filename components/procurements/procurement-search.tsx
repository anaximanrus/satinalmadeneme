'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ProcurementSearch() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search procurements..."
          className="pl-9"
        />
      </div>
      <div className="flex gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="in_process">In Process</SelectItem>
            <SelectItem value="waiting_for_proposal">Waiting for Proposal</SelectItem>
            <SelectItem value="refused">Refused</SelectItem>
            <SelectItem value="canceled">Canceled</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Site" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="site1">Site 1</SelectItem>
            <SelectItem value="site2">Site 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}