import type { ReactNode } from "react";

import { cn } from "@/utils/cn";
import { Card, CardHeader } from "@/components/ui/card";
import { BoxIcon, type LucideIcon, PaletteIcon } from "lucide-react";

export default function Features() {
  return (
    <section>
      <div className="mx-auto grid gap-4 pt-6 lg:grid-cols-2">
        <FeatureCard>
          <CardHeader>
            <CardHeading
              icon={PaletteIcon}
              title="100% Customizable"
              description="Copy, extend and modify all components and utilities"
            />
          </CardHeader>
        </FeatureCard>

        <FeatureCard>
          <CardHeader className="pb-3">
            <CardHeading
              icon={BoxIcon}
              title="Advanced Scheduling"
              description="Scheduling system, Instantly locate all your assets."
            />
          </CardHeader>
        </FeatureCard>

        <FeatureCard className="p-6 lg:col-span-2">
          <p className="mx-auto my-6 max-w-md text-center text-2xl font-semibold text-balance">
            Smart scheduling with automated reminders for maintenance.
          </p>
        </FeatureCard>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card className={cn("group relative rounded-none", className)}>
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="absolute -top-px -left-px block size-2 border-t-2 border-l-2 border-neutral-900 dark:border-neutral-50"></span>
    <span className="absolute -top-px -right-px block size-2 border-t-2 border-r-2 border-neutral-900 dark:border-neutral-50"></span>
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-neutral-900 dark:border-neutral-50"></span>
    <span className="absolute -right-px -bottom-px block size-2 border-r-2 border-b-2 border-neutral-900 dark:border-neutral-50"></span>
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);
