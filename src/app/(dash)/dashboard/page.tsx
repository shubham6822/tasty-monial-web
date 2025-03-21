import { Home, MessageSquare, Share2, Users } from "lucide-react";
import { ThemeToggle } from "../../../components/theme-toggle";
import TestimonialStats from "../../../components/testimonial-stats";
import TestimonialList from "../../../components/testimonial-list";
import ShareForm from "../../../components/share-form";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl mb-6  text-left flex items-center gap-3 justify-between  ">
        <div className=" items-center gap-1 text-2xl font-bold text-gray-900 dark:text-white">
          <h1>Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Your workspace for managing testimonials
          </p>
        </div>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2 ">
            <MessageSquare className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
            Testimonials
          </h2>
          <div className="flex-1">
            <TestimonialStats type="total" />
          </div>
        </div>
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23] ">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <Share2 className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
            Form Submissions
          </h2>
          <div className="flex-1">
            <TestimonialStats type="submissions" />
          </div>
        </div>
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
            Team Members
          </h2>
          <div className="flex-1">
            <TestimonialStats type="team" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-[#0F0F12] rounded-xl pt-6 flex flex-col  dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2 border-b pb-3 border-gray-300">
            <MessageSquare className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50 " />
            Recent Testimonials
          </h2>
          <TestimonialList />
        </div>
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <Share2 className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
            Share Your Form
          </h2>
          <ShareForm />
        </div>
      </div>
    </div>
  );
}
