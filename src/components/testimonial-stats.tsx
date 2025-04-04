import { useProjectContext } from "../context/ProjectContext";
import { useGetTestimonials } from "../hooks/useTestimonialApi";
import { cn } from "../lib/utils";
import { ArrowUpRight, MessageSquare, Share2, Users } from "lucide-react";

interface TestimonialStatsProps {
  type: "total" | "submissions" | "team";
  className?: string;
}

export default function TestimonialStats({
  type,
  className,
}: TestimonialStatsProps) {
  const { project } = useProjectContext();
  const { data } = useGetTestimonials(project.id);

  const stats = {
    total: {
      value: data?.length || "0",
      label: "Total Testimonials",
      change: "+12%",
      icon: MessageSquare,
      iconColor: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    submissions: {
      value: data?.length || "0",
      label: "Form Submissions",
      change: "+8%",
      icon: Share2,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    team: {
      value: "0",
      label: "Team Members",
      change: "0",
      icon: Users,
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
  };

  const currentStat = stats[type];
  const Icon = currentStat.icon;

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className={cn("p-2 rounded-lg", currentStat.bgColor)}>
          <Icon className={cn("w-5 h-5", currentStat.iconColor)} />
        </div>
      </div>

      <div className="mt-auto">
        <div className="text-3xl font-bold text-gray-900 dark:text-white">
          {currentStat.value}
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {currentStat.label}
          </div>
          <div className="flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
            {currentStat.change}
            <ArrowUpRight className="ml-1 w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
