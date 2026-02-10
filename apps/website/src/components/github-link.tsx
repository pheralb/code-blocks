"use client";

import useSWR from "swr";

import { cn } from "@/utils/cn";
import { globals } from "@/globals";
import { StarIcon } from "lucide-react";

import { GitHub } from "@/components/ui/svgs/github";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "@/components/ui/external-link";

interface GitHubRepo {
  stargazers_count: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const formatStars = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return count.toString();
};

const GithubLink = () => {
  const repoPath = "pheralb/code-blocks";
  const { data } = useSWR<GitHubRepo>(
    `https://api.github.com/repos/${repoPath}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const stars = data?.stargazers_count;

  return (
    <ExternalLink
      title="GitHub Repository"
      href={globals.githubUrl}
      className={cn(
        buttonVariants({
          variant: "ghost",
          className: "group w-auto",
        }),
        "px-2",
      )}
    >
      <div className="flex items-center gap-2">
        <GitHub width={18} height={18} />
        {data && stars !== undefined && (
          <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
            {formatStars(stars)}
          </span>
        )}
      </div>
    </ExternalLink>
  );
};

export default GithubLink;
