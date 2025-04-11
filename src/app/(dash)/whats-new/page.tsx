"use client";

import { Clock, Gift, Lightbulb, Rocket, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

export default function WhatsNewPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            What&apos;s New
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Stay updated with the latest features and improvements
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                Enhanced Analytics Dashboard
                <Badge className="ml-2">New</Badge>
              </CardTitle>
              <CardDescription className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                Released on April 5, 2025
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We&apos;ve completely redesigned our analytics dashboard to
              provide deeper insights into your testimonial performance. Now you
              can track views, clicks, and conversions from your testimonials
              with beautiful visualizations and exportable reports.
            </p>
            <div className="mt-4 rounded-md bg-gray-50 dark:bg-gray-800 p-4">
              <p className="text-sm font-medium">Key improvements:</p>
              <ul className="mt-2 text-sm space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Detailed conversion tracking for each testimonial</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Customizable date ranges for all reports</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Export options in CSV, PDF, and JSON formats</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <Rocket className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="space-y-1">
              <CardTitle>AI-Powered Testimonial Collection</CardTitle>
              <CardDescription className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                Released on March 20, 2025
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Collecting testimonials is now easier than ever with our new
              AI-powered collection tools. Our system can automatically reach
              out to your customers at the perfect moment to request feedback,
              and even suggest edits to make testimonials more impactful.
            </p>
            <div className="mt-4 rounded-md bg-gray-50 dark:bg-gray-800 p-4">
              <p className="text-sm font-medium">New capabilities:</p>
              <ul className="mt-2 text-sm space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Smart timing for testimonial requests based on customer
                    behavior
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI-suggested improvements for testimonial wording</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automatic follow-ups for incomplete testimonials</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <Gift className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-1">
              <CardTitle>New Incentive Tools</CardTitle>
              <CardDescription className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                Released on February 15, 2025
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Encourage more customers to leave testimonials with our new
              incentive system. Easily create discount codes, special offers, or
              loyalty points that are automatically delivered when customers
              submit quality testimonials.
            </p>
            <div className="mt-4 rounded-md bg-gray-50 dark:bg-gray-800 p-4">
              <p className="text-sm font-medium">Features included:</p>
              <ul className="mt-2 text-sm space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Customizable reward templates for different testimonial
                    types
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integration with popular e-commerce platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Analytics to measure the ROI of your incentive programs
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="space-y-1">
              <CardTitle>UI Redesign & Dark Mode</CardTitle>
              <CardDescription className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                Released on January 30, 2025
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We&apos;ve given TastyMonial a fresh new look with improved
              usability and accessibility. The new interface is more intuitive
              and includes a much-requested dark mode that&apos;s easy on the
              eyes during late-night work sessions.
            </p>
            <div className="mt-4 rounded-md bg-gray-50 dark:bg-gray-800 p-4">
              <p className="text-sm font-medium">Improvements:</p>
              <ul className="mt-2 text-sm space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Streamlined navigation and workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dark mode toggle with system preference detection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Improved accessibility for screen readers and keyboard
                    navigation
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center pt-6 pb-8">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Have a feature suggestion? We&apos;d love to hear it!
          </p>
          <a
            href="/feedback"
            className="mt-2 inline-flex text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Submit your idea →
          </a>
        </div>
      </div>
    </div>
  );
}
