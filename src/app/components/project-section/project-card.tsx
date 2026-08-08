import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    image?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      
      {/* Project Image */}
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/images/project-placeholder.png"}
          height={1080}
          width={1920}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
          alt={project.name}
        />
      </div>

      {/* Project Content */}
      <div className="p-2 sm:p-3 flex flex-col">

        {/* Language + GitHub Info */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          
          <p>
            {project.language || "Project"}
          </p>

          <div className="flex items-center gap-3">

            {/* Stars */}
            <p className="flex items-center gap-1">
              <FaStar />
              <span>{project.stargazers_count}</span>
            </p>

            {/* Forks */}
            <p className="flex items-center gap-1">
              <FaCodeBranch />
              <span>{project.forks_count}</span>
            </p>

          </div>
        </div>

        {/* Project Name */}
        <Link
          target="_blank"
          href={project.html_url}
        >
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500 transition-colors">
            {project.name}
          </p>
        </Link>

        {/* Description */}
        <p className="mb-2 text-sm text-[#16f2b3]">
          Description
        </p>

        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {project.description || "No description available."}
        </p>

      </div>
    </div>
  );
};

export default ProjectCard;