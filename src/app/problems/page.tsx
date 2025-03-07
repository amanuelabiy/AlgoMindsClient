import ProblemEntries from "@/components/problems/ProblemEntries";
import ProblemStats from "@/components/problems/ProblemStats";
import StreakCalendar from "@/components/problems/StreakCalendar";
import React from "react";

const sampleProblems = [
  {
    id: 1,
    status: "Attempted",
    title: "Two Sum",
    descripition:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
  },
  {
    id: 2,
    status: "Solved",
    title: "Add Two Numbers",
    descripition:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.",
    difficulty: "Medium",
    tags: ["Linked List", "Math"],
  },
  {
    id: 3,
    status: "Unsolved",
    title: "Longest Substring Without Repeating Characters",
    descripition:
      "Given a string s, find the length of the longest substring without repeating characters.",
    difficulty: "Medium",
    tags: ["Hash Table", "Two Pointers", "String"],
  },
  {
    id: 4,
    status: "Attempted",
    title: "Median of Two Sorted Arrays",
    descripition:
      "There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays.",
    difficulty: "Hard",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
  },
];

function ProblemsPage() {
  //TODO: Add queryFn to fetch problems

  return (
    <div className="pt-6 bg-neutralLightColor h-screen">
      <header className="flex flex-col items-center gap-4 justify-center text-center">
        <h1 className="text-[rgba(44,62,80,0.70)] text-xl font-semibold leading-normal">
          Problems
        </h1>
        <h1 className="text-primaryColor text-center text-2xl font-bold leading-normal">
          Challenge Yourself with{" "}
          <span className="text-secondaryColor">Coding</span> Problems
        </h1>
      </header>
      <div className="flex flex-col mt-4 gap-4 items-center justify-center">
        <ProblemEntries problems={sampleProblems} />
        <StreakCalendar />
        <ProblemStats />
      </div>
    </div>
  );
}

export default ProblemsPage;
