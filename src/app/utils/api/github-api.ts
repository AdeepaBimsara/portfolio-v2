// import {featuredRepositories} from "@/app/utils/data/github-projects";

// const GITHUB_USERNAME = "adeepabimsara";

// export const getFeaturedProjects = async () => {

//     const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);

//     if (!response.ok) {
//         throw new Error("Failed to fetch repositories");
//     }

//     const repositories = await response.json();

//     return repositories.filter((repo: any) =>
//         featuredRepositories.includes(repo.name)
//     );

// }

import {featuredRepositories} from "@/app/utils/data/github-projects";

const GITHUB_USERNAME = "adeepabimsara";

export async function getFeaturedProjects() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  const repositories = await response.json();

  return repositories
    .filter((repo: { name: string }) =>
      featuredRepositories.some(
        (project) => project.name === repo.name
      )
    )
    .map((repo: any) => {
      const project = featuredRepositories.find(
        (project) => project.name === repo.name
      );

      return {
        ...repo,
        image: project?.image,
        
      };
    });
}