"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { allProjects, ProjectItem } from "@/lib/about_vish";
import { smoothScrollToId } from "@/lib/utils";
import { LuExternalLink, LuChevronLeft, LuChevronRight, LuSearch } from "react-icons/lu";

const CATEGORIES = ["All", "Web & SaaS", "AI & ML", "Backend & Cloud", "Embedded & IoT"];
const ITEMS_PER_PAGE = 9;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Map each project to keep track of its global index
  const indexedProjects = useMemo(() => {
    return allProjects.map((p, idx) => ({ ...p, globalIndex: idx + 1 }));
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return indexedProjects.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [indexedProjects, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;

  // Safe current page clamp
  const safePage = Math.min(currentPage, totalPages);

  const paginatedProjects = useMemo(() => {
    const start = (safePage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, safePage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    smoothScrollToId("projects");
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Generate pagination buttons with smart ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (safePage > 3) pages.push("...");

      const start = Math.max(2, safePage - 1);
      const end = Math.min(totalPages - 1, safePage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (safePage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const startIndex = (safePage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(safePage * ITEMS_PER_PAGE, filteredProjects.length);

  return (
    <section className="min-h-dvh bg-white text-slate-900 border-t border-slate-200" id="projects">
      <div className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Things I Have Built
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-slate-600">
              Ideas turned into digital experiences — crafted with creativity,
              code, and architectural rigor. From microservices to AI models and IoT.
            </p>
          </div>

          {/* Controls: Search + Categories */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Category pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? indexedProjects.length
                    : indexedProjects.filter((p) => p.category === cat).length;
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-violet-600 text-white shadow-md shadow-violet-500/25"
                        : "bg-white text-slate-800 border border-slate-300 hover:border-violet-500 hover:text-violet-600 shadow-xs"
                    }`}
                  >
                    {cat} <span className="opacity-70 text-[11px] sm:text-xs ml-0.5 sm:ml-1">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 rounded-full border border-slate-300 bg-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Project count indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 px-1 font-mono gap-1 text-center sm:text-left">
            <span>
              Showing <span className="font-bold text-slate-900">{filteredProjects.length === 0 ? 0 : startIndex}</span> to{" "}
              <span className="font-bold text-slate-900">{endIndex}</span> of{" "}
              <span className="font-bold text-slate-900">{filteredProjects.length}</span> projects
            </span>
            <span>
              Page <span className="font-bold text-slate-900">{safePage}</span> of{" "}
              <span className="font-bold text-slate-900">{totalPages}</span>
            </span>
          </div>

          {/* Projects Grid */}
          {paginatedProjects.length === 0 ? (
            <div className="text-center py-16 sm:py-20 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
              <p className="text-base sm:text-lg text-slate-500">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 sm:px-5 py-2 sm:py-2.5 bg-violet-600 text-white font-bold text-xs sm:text-sm rounded-full cursor-pointer hover:bg-violet-700 shadow-md shadow-violet-500/20 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginatedProjects.map((item) => {
                const numberString = item.globalIndex.toString().padStart(2, "0");
                return (
                  <div key={item.globalIndex} data-aos="zoom-in">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full"
                    >
                      <div className="h-full p-5 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/5 transform hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-violet-600/70 group-hover:text-violet-600 transition-colors">
                              {numberString}
                            </span>
                            <div className="p-2 rounded-full bg-slate-100 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-xs">
                              <LuExternalLink className="w-4 h-4" />
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors break-words">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>

                        {item.category && (
                          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-violet-50 text-violet-700 border border-violet-100">
                              {item.category}
                            </span>
                            <span className="text-xs font-bold text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                              View Project &rarr;
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-6 sm:pt-8">
              {/* Prev button */}
              <button
                onClick={() => handlePageChange(Math.max(1, safePage - 1))}
                disabled={safePage === 1}
                className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-slate-900 bg-white rounded-full border border-slate-300 shadow-xs hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                <LuChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Prev</span>
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {getPageNumbers().map((page, idx) => {
                  if (page === "...") {
                    return (
                      <span key={`dots-${idx}`} className="px-1.5 text-xs sm:text-sm font-bold text-slate-400">
                        ...
                      </span>
                    );
                  }
                  const isCurrent = page === safePage;
                  return (
                    <button
                      key={`page-${page}`}
                      onClick={() => handlePageChange(Number(page))}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-violet-600 text-white shadow-md shadow-violet-500/30 scale-105"
                          : "bg-white text-slate-900 border border-slate-300 shadow-xs hover:bg-violet-600 hover:text-white hover:border-violet-600"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next button */}
              <button
                onClick={() => handlePageChange(Math.min(totalPages, safePage + 1))}
                disabled={safePage === totalPages}
                className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-slate-900 bg-white rounded-full border border-slate-300 shadow-xs hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                <span>Next</span>
                <LuChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
