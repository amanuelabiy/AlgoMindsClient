"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
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
import { ROWS_PER_PAGE } from "@/utils/problems/constants";

interface ProblemsTableProps {
  searchParams: SearchParams;
}

function ProblemsTable({ searchParams }: ProblemsTableProps) {
  const { data, isLoading, error } = useFetchProblems();
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  const problems: Problem[] = data?.data.problems || [];

  const totalPages = Math.ceil(problems.length / ROWS_PER_PAGE);

  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const paginatedProblems = problems.slice(startIndex, endIndex);

  return (
    <div className="overflow-x-auto w-full">
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
          {paginatedProblems.map((problem) => (
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
      <ProblemsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ProblemsTable;
