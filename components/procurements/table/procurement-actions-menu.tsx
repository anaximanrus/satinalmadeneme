'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FileSpreadsheet, 
  FileText, 
  MoreHorizontal, 
  Trash, 
  Eye 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Procurement } from '@/types/procurement';
import { useToast } from '@/hooks/use-toast';

interface ProcurementActionsMenuProps {
  procurement: Procurement;
}

export function ProcurementActionsMenu({ procurement }: ProcurementActionsMenuProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = async () => {
    try {
      // Implement delete logic here
      toast({
        title: 'Success',
        description: 'Procurement deleted successfully',
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete procurement',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => router.push(`/procurements/${procurement.id}`)}>
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Export Excel
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText className="mr-2 h-4 w-4" />
            Export PDF
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-destructive" 
            onClick={() => setShowDeleteDialog(true)}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              procurement and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}