import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Problem } from "./ProblemEntries";

interface ProblemsTableProps {
  problems: Problem[];
}

function ProblemsTable({ problems }: ProblemsTableProps) {
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
          {problems.map((problem) => (
            <TableRow key={problem.id}>
              <TableCell className="text-[rgba(44,62,80,0.70)] font-roboto text-sm font-medium leading-normal">
                {problem.status}
              </TableCell>
              <TableCell className="text-[rgba(44,62,80,0.70)] font-roboto text-sm font-medium leading-normal">
                {problem.title}
              </TableCell>
              <TableCell className="max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap text-[rgba(44,62,80,0.70)] font-roboto text-sm font-medium leading-normal">
                {problem.descripition}
              </TableCell>
              <TableCell className="text-left text-[rgba(44,62,80,0.70)] font-roboto text-sm font-medium leading-normal">
                {problem.difficulty}
              </TableCell>
              <TableCell className="text-left text-[rgba(44,62,80,0.70)] font-roboto text-sm font-medium leading-normal">
                {problem.tags}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProblemsTable;
