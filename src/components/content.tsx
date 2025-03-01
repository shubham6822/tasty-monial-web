import { MessageSquare, Share2, Users, Home } from "lucide-react";
import TestimonialList from "./testimonial-list";
import ShareForm from "../components/share-form";
import TestimonialStats from "../components/testimonial-stats";

export default function Content() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold  mb-6  text-left flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 gap-2">
        <Home size={30} color="#60a5fa" /> Dashboard
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
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
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
