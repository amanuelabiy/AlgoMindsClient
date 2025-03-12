"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { PROBLEM_AMOUNTS } from "@/utils/problems/constants";

interface ProblemAmountDropdownProps {
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
}

function ProblemAmountDropdown({
  perPage,
  currentPage,
  totalPages,
  setPerPage,
  setPage,
  totalCount,
}: ProblemAmountDropdownProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handlePerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
  };

  return (
    <DropdownMenu onOpenChange={(open) => setOpenDropdown(open)}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {`${perPage} / page`}{" "}
          <ChevronDown
            className={`text-xs transition-transform duration-200 ${
              openDropdown ? "rotate-180" : "rotate-0"
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24 mx-auto">
        {PROBLEM_AMOUNTS.map((amount) => (
          <DropdownMenuCheckboxItem
            key={amount}
            checked={perPage === amount}
            onClick={() => handlePerPageChange(amount)}
            className="font-semibold hover:cursor-pointer"
          >
            {`${amount} / page`}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProblemAmountDropdown;
