"use client";

import { useState } from "react";
import { Send, ThumbsUp, Lightbulb, BugIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import { Label } from "../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { toast } from "../../../components/ui/use-toast";

export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] = useState("suggestion");
  const [feedbackText, setFeedbackText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedFeedback, setSubmittedFeedback] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) {
      toast({
        title: "Error",
        description: "Please enter your feedback before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmittedFeedback([...submittedFeedback, feedbackText]);
      setFeedbackText("");
      setIsSubmitting(false);

      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback! We'll review it shortly.",
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Feedback
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Help us improve TastyMonial with your suggestions and feedback
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submit Feedback</CardTitle>
              <CardDescription>
                We value your input and use it to make TastyMonial better for
                everyone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label>Feedback Type</Label>
                  <RadioGroup
                    defaultValue="suggestion"
                    value={feedbackType}
                    onValueChange={setFeedbackType}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2"
                  >
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                      <RadioGroupItem value="suggestion" id="suggestion" />
                      <Label
                        htmlFor="suggestion"
                        className="flex items-center cursor-pointer font-normal text-sm"
                      >
                        <Lightbulb className="mr-1.5 h-4 w-4 text-amber-500" />
                        Feature Suggestion
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                      <RadioGroupItem value="bug" id="bug" />
                      <Label
                        htmlFor="bug"
                        className="flex items-center cursor-pointer font-normal text-sm"
                      >
                        <BugIcon className="mr-1.5 h-4 w-4 text-red-500" />
                        Bug Report
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                      <RadioGroupItem value="general" id="general" />
                      <Label
                        htmlFor="general"
                        className="flex items-center cursor-pointer font-normal text-sm"
                      >
                        <ThumbsUp className="mr-1.5 h-4 w-4 text-blue-500" />
                        General Feedback
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder={
                      feedbackType === "suggestion"
                        ? "Describe your feature suggestion in detail..."
                        : feedbackType === "bug"
                        ? "Please describe the bug and steps to reproduce it..."
                        : "Share your thoughts, ideas, or experience with TastyMonial..."
                    }
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="min-h-[150px]"
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Feedback
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {submittedFeedback.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Your Submitted Feedback</CardTitle>
                <CardDescription>
                  Feedback you&apos;ve previously submitted
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {submittedFeedback.map((feedback, index) => (
                    <div
                      key={`feedback-${index}`}
                      className="rounded-lg border p-4 bg-gray-50 dark:bg-gray-800"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {feedback}
                      </p>
                      <p className="mt-2 text-xs text-gray-500">
                        Submitted just now
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Why Your Feedback Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  At TastyMonial, we&apos;re committed to building a product
                  that truly serves your needs. Your feedback directly
                  influences our development priorities.
                </p>
                <div className="flex items-start space-x-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      1
                    </span>
                  </div>
                  <p>
                    All feedback is reviewed by our product team within 48 hours
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      2
                    </span>
                  </div>
                  <p>Popular suggestions are added to our product roadmap</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      3
                    </span>
                  </div>
                  <p>Bug reports are prioritized for immediate resolution</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-sm">
                    How soon will I get a response?
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    For urgent issues, we aim to respond within 24 hours. For
                    feature suggestions, we&apos;ll keep you updated when we add
                    them to our roadmap.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-sm">
                    Will I be notified if my suggestion is implemented?
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Yes! If we implement your suggestion, we&apos;ll send you an
                    email notification and may even offer early access to the
                    feature.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-sm">
                    How can I check the status of my feedback?
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    You can view all your submitted feedback on this page, along
                    with status updates from our team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Need Immediate Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Contact our support team
                </div>
                <Button variant="outline" size="sm">
                  Get Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
