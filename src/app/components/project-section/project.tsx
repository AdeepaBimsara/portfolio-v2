"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getFeaturedProjects } from "@/app/utils/api/github-api";
import ProjectCard from "@/app/components/project-section/project-card";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getFeaturedProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {/* Gradient Divider */}
      <div className="flex justify-center -translate-y-px">
        <div className="w-3/4">
          <div className="h-px bg-linear-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-0.5 bg-[#1a1443]" />

          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>

          <span className="w-24 h-0.5 bg-[#1a1443]" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {projects.slice(0, 6).map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
          />
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/projects"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;