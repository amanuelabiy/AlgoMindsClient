import React from "react";
import { Pagination, PaginationContent } from "@/components/ui/pagination";
import { Button } from "../ui/button";

interface ProblemsPaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function ProblemsPagination({
  currentPage,
  totalPages,
  setPage,
}: ProblemsPaginationProps) {
  // Creates an array of page numbers from 1 to totalPages
  const numberOfPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination>
      <PaginationContent className="flex flex-row justify-center items-center ml-auto">
        <div className="flex flex-row gap-0 justify-center items-center">
          {/* Previous Button */}
          <Button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className={`flex w-[80px] h-[25.6px] px-[10px] justify-center items-center gap-[10px] flex-shrink-0 text-[rgba(1,33,53,0.70)] text-sm font-semibold bg-white hover:bg-[#f7f7f7] border-[1px] border-[rgba(0,0,0,0.20)] ${
              currentPage === 1 ? "opacity-50 hover:cursor-not-allowed" : ""
            } rounded-none`}
          >
            Previous
          </Button>

          {/* Page numbers */}
          {numberOfPages.map((page) => (
            <Button
              key={page}
              onClick={() => setPage(page)}
              className={`flex w-[16px] h-[25.6px] text-sm justify-center items-center flex-shrink-0 border-[1px] border-[rgba(0,0,0,0.20)] ${
                currentPage === page
                  ? "bg-secondaryColor hover:bg-[#3498DB] text-white"
                  : "bg-white text-[rgba(1,33,53,0.70)] hover:bg-[#f7f7f7]"
              } rounded-none`}
            >
              {page}
            </Button>
          ))}

          {/* Next button */}
          <Button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className={`flex w-[80px] h-[25.6px] px-[10px] justify-center items-center gap-[10px] flex-shrink-0 text-secondaryColor text-sm font-semibold bg-white hover:bg-[#f7f7f7] border-[1px] border-[rgba(0,0,0,0.20)] ${
              currentPage === totalPages
                ? "opacity-50 hover:cursor-not-allowed"
                : ""
            } rounded-none`}
          >
            Next
          </Button>
        </div>
      </PaginationContent>
    </Pagination>
  );
}

export default ProblemsPagination;
