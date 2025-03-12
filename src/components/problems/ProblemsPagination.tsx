import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProblemsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function ProblemsPagination() {
  return (
    <Pagination className="ml-auto">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink isActive></PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default ProblemsPagination;
