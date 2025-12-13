import type { ReactNode } from "react";

import { cn } from "@/utils/cn";
import { PaletteIcon } from "lucide-react";

import { ShadcnUI } from "@/components/ui/svgs/shadcn";
import { Card, CardHeader } from "@/components/ui/card";

export default function Features() {
  return (
    <section>
      <div className="mx-auto grid gap-4 pt-6 lg:grid-cols-2">
        <FeatureCard>
          <CardHeader>
            <CardHeading
              icon={<PaletteIcon size={20} />}
              title="Customizable"
              description="Copy, extend and modify all components and utilities"
            />
          </CardHeader>
        </FeatureCard>
        <FeatureCard>
          <CardHeader>
            <CardHeading
              icon={<ShadcnUI width={20} height={20} />}
              title="shadcn/ui"
              description="Add components to your shadcn registry"
            />
          </CardHeader>
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
    <span className="absolute -top-px -left-px block size-2 border-t-2 border-l-2 border-neutral-900 dark:border-neutral-100"></span>
    <span className="absolute -top-px -right-px block size-2 border-t-2 border-r-2 border-neutral-900 dark:border-neutral-100"></span>
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-neutral-900 dark:border-neutral-100"></span>
    <span className="absolute -right-px -bottom-px block size-2 border-r-2 border-b-2 border-neutral-900 dark:border-neutral-100"></span>
  </>
);

interface CardHeadingProps {
  icon: ReactNode
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
      {Icon}
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);
