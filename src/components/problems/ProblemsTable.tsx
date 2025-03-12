"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { getDifficultyColor } from "@/utils/problems/getDifficultyColor";
import ProblemsPagination from "./ProblemsPagination";
import { SearchParams } from "@/app/problems/page";
import useFetchProblems from "@/app/hooks/useFetchProblems";
import {
  difficultyMap,
  statusMap,
} from "@/utils/problems/mapDifficultyAndStatus";
import { Problem } from "@/types/problems";
import { PROBLEMS_PER_PAGE } from "@/utils/problems/constants";
import ProblemAmountDropdown from "./ProblemAmountDropdown";

interface ProblemsTableProps {
  searchParams: SearchParams;
}

function ProblemsTable({ searchParams }: ProblemsTableProps) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(PROBLEMS_PER_PAGE);

  // Fetch paginated problems
  const { data, isLoading, error } = useFetchProblems(page, perPage);

  // Derived state from the query
  const totalCount = data?.data.totalCount ?? 0;
  const totalPages = data?.data.totalPages ?? 1;

  // Loading State
  if (isLoading) return <div>Loading...</div>;

  // Error State
  if (error) return <div>Error: {error.message}</div>;

  const problems: Problem[] = data?.data.problems || [];

  return (
    <div className="overflow-x-auto w-full p-4">
      {" "}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead className="text-left">Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problems.map((problem) => (
            <TableRow className="hover:cursor-pointer" key={problem.id}>
              <TableCell className="text-[rgba(44,62,80,0.70)] text-sm font-medium leading-normal">
                {
                  statusMap[
                    problem.status as "ATTEMPTED" | "SOLVED" | "NOT_ATTEMPTED"
                  ]
                }
              </TableCell>
              <TableCell className="text-[rgba(44,62,80,0.70)] text-sm font-medium leading-normal">
                {problem.title}
              </TableCell>
              <TableCell className="max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap text-[rgba(44,62,80,0.70)] text-sm font-medium leading-normal">
                {problem.content}
              </TableCell>
              <TableCell
                className={`${getDifficultyColor(
                  difficultyMap[
                    problem.difficulty as "EASY" | "MEDIUM" | "HARD"
                  ]
                )} text-left text-sm font-medium leading-normal`}
              >
                {
                  difficultyMap[
                    problem.difficulty as "EASY" | "MEDIUM" | "HARD"
                  ]
                }
              </TableCell>
              <TableCell className="text-left text-[rgba(44,62,80,0.70)] text-sm font-medium leading-normal max-w-[10rem]">
                {problem.tags.join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-row justify-between items-center mt-10 border-t border-t-[rgba(0,0,0,0.10)] pt-4 w-full px-2">
        <ProblemAmountDropdown perPage={perPage} setPerPage={setPerPage} />
        <ProblemsPagination />
      </div>
    </div>
  );
}

export default ProblemsTable;
