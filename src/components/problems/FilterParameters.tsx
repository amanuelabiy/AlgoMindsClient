"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import { Label } from "../ui/label";
import { TiArrowRight } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import { ChevronDown } from "lucide-react";
import { getDifficultyColor } from "@/utils/problems/getDifficultyColor";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const topicItems = [
  "Algorithms",
  "Data Structure",
  "Math",
  "Dynamic Programming",
];

const difficultyItems = ["Easy", "Medium", "Hard"];

const tagItems = [
  "Array",
  "Hash Table",
  "Linked List",
  "Math",
  "Two Pointers",
  "String",
  "Binary Search",
  "Divide and Conquer",
];

const statusItems = ["Solved", "Unsolved"];

const filterItems = [
  {
    name: "Topic",
    items: topicItems,
  },
  {
    name: "Difficulty",
    items: difficultyItems,
  },
  {
    name: "Tags",
    items: tagItems,
  },
  {
    name: "Status",
    items: statusItems,
  },
];

const getDifficultyColorForDropdown = (item: string) => {
  switch (item) {
    case "Easy":
      return "text-green-500 font-semibold hover:bg-green-100 hover:text-green-500 data-[highlighted]:bg-green-100 data-[highlighted]:text-green-500 data-[state=checked]:text-green-500";
    case "Medium":
      return "text-yellow-500 font-semibold hover:bg-yellow-100 hover:text-yellow-500 data-[highlighted]:bg-yellow-100 data-[highlighted]:text-yellow-500 data-[state=checked]:text-yellow-500";
    case "Hard":
      return "text-red-500 font-semibold hover:bg-red-100 hover:text-red-500 data-[highlighted]:bg-red-100 data-[highlighted]:text-red-500 data-[state=checked]:text-red-500";
    default:
      return "";
  }
};

const getCategory = (item: string) => {
  if (topicItems.includes(item)) {
    return "Topic";
  } else if (difficultyItems.includes(item)) {
    return "Difficulty";
  } else if (statusItems.includes(item)) {
    return "Status";
  } else {
    return "Tags";
  }
};

function FilterParameters() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({
    Topic: [],
    Difficulty: [],
    Tags: [],
    Status: [],
  });

  const handleFilterChange = (
    category: string,
    item: string,
    checked: boolean
  ) => {
    setSelectedFilters((prev) => {
      const updatedCategory = checked
        ? [...prev[category], item]
        : prev[category].filter((i) => i !== item);
      return { ...prev, [category]: updatedCategory };
    });
  };

  const combinedFilters = Object.values(selectedFilters).flat();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="sm:flex sm:flex-row sm:justify-center sm:items-center gap-2 md:gap-4 grid grid-cols-2">
          {" "}
          {filterItems.map((filter) => (
            <DropdownMenu
              key={filter.name}
              onOpenChange={(open) =>
                setOpenDropdown(open ? filter.name : null)
              }
            >
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {filter.name}{" "}
                  <ChevronDown
                    className={`text-xs transition-transform duration-200 ${
                      openDropdown === filter.name ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {filter.items.map((item) => (
                  <DropdownMenuCheckboxItem
                    key={item}
                    checked={selectedFilters[filter.name].includes(item)}
                    onCheckedChange={(checked) =>
                      handleFilterChange(filter.name, item, checked)
                    }
                    className={`${getDifficultyColorForDropdown(
                      item
                    )} data-[highlighted]:cursor-pointer`}
                  >
                    {item}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
        <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
          <div className="relative w-1/2">
            <Label
              htmlFor="search-filter"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <CiSearch />
            </Label>
            <input
              id="search-filter"
              placeholder="Search here..."
              className="bg-white rounded-[100px] w-full pl-10 border-2 outline-none focus:outline-none p-2 focus:ring-2 focus:ring-secondaryColor"
              autoComplete="off"
              type="text"
            />
          </div>
          <Button className="flex w-[160px] h-[40px] p-[10px] justify-center items-center gap-[10px] flex-shrink-0 text-white text-center text-base font-semibold leading-normal bg-secondaryColor hover:bg-primaryColor">
            Search <TiArrowRight className="text-xs" />
          </Button>
        </div>
      </div>
      {combinedFilters.length > 0 ? (
        <div className="flex flex-wrap justify-start items-center gap-4">
          {combinedFilters.map((filter) => (
            <p
              key={filter}
              className={`${getDifficultyColor(
                filter
              )} flex flex-row justify-center items-center gap-1 p-2 shadow-2xl rounded-xl border-2 text-xs`}
            >
              {filter}{" "}
              <span
                className="rounded-full hover:cursor-pointer text-primaryColor hover:text-gray-500 text-lg"
                onClick={() =>
                  handleFilterChange(getCategory(filter), filter, false)
                }
              >
                <IoIosClose />
              </span>
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default FilterParameters;
