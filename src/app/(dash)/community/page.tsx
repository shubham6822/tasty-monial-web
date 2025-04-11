"use client";

import {
  MessageSquare,
  Users,
  HeartHandshake,
  ExternalLink,
  Twitter,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Community
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Connect with other TastyMonial users and grow your network
          </p>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <Card className="md:col-span-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-none">
          <CardContent className="pt-6 pb-6">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-xl font-bold">
                  Join our growing community
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md">
                  Connect with over 10,000 marketers, developers, and business
                  owners using TastyMonial to boost their conversions.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button className="space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Join Community</span>
                </Button>
                <Button variant="outline" className="space-x-2">
                  <Twitter className="h-4 w-4" />
                  <span>Follow on Twitter</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="discussions" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="showcase">Showcase</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Discussions</CardTitle>
                  <CardDescription>
                    Join conversations or start your own thread
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Discussion Thread 1 */}
                    <div className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder-user.jpg" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Jason Doe</div>
                            <div className="text-xs text-gray-500">
                              2 days ago
                            </div>
                          </div>
                          <h3 className="text-sm font-medium mt-1">
                            Best practices for encouraging customers to leave
                            testimonials?
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            I&apos;m struggling to get customers to leave
                            testimonials. What incentives or strategies have
                            worked well for others?
                          </p>
                          <div className="flex items-center gap-4 mt-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                            >
                              <MessageSquare className="h-4 w-4 mr-1" /> 12
                              replies
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                            >
                              View Discussion
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Discussion Thread 2 */}
                    <div className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder-user.jpg" alt="User" />
                          <AvatarFallback>SR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Sarah Rodriguez</div>
                            <div className="text-xs text-gray-500">
                              5 days ago
                            </div>
                          </div>
                          <h3 className="text-sm font-medium mt-1">
                            How to integrate TastyMonial with Shopify?
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            Has anyone successfully integrated TastyMonial with
                            their Shopify store? Looking for guidance on the
                            best approach.
                          </p>
                          <div className="flex items-center gap-4 mt-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                            >
                              <MessageSquare className="h-4 w-4 mr-1" /> 8
                              replies
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                            >
                              View Discussion
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Discussion Thread 3 */}
                    <div className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder-user.jpg" alt="User" />
                          <AvatarFallback>MK</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Michael Kim</div>
                            <div className="text-xs text-gray-500">
                              1 week ago
                            </div>
                          </div>
                          <h3 className="text-sm font-medium mt-1">
                            Share your conversion rate improvements!
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            I&apos;d love to hear how much TastyMonial has
                            improved your conversion rates. We saw a 24%
                            increase after adding testimonials to our checkout
                            page.
                          </p>
                          <div className="flex items-center gap-4 mt-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                            >
                              <MessageSquare className="h-4 w-4 mr-1" /> 15
                              replies
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                            >
                              View Discussion
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center pt-2">
                      <Button variant="outline">View All Discussions</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Start a Discussion</CardTitle>
                  <CardDescription>
                    Have a question or want to share something with the
                    community?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Start a new discussion thread to get help from the
                      community or share your insights
                    </p>
                    <Button>Create New Thread</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Members
                      </div>
                      <div className="font-medium">10,482</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Discussions
                      </div>
                      <div className="font-medium">3,254</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Replies
                      </div>
                      <div className="font-medium">18,392</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Active today
                      </div>
                      <div className="font-medium">142</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Contributors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Contributor 1 */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium truncate">
                            Jessica Davis
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            MVP
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500">
                          246 contributions
                        </p>
                      </div>
                    </div>

                    {/* Contributor 2 */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>TW</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium truncate">
                            Thomas Wilson
                          </p>
                        </div>
                        <p className="text-xs text-gray-500">
                          189 contributions
                        </p>
                      </div>
                    </div>

                    {/* Contributor 3 */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>AM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium truncate">
                            Alex Morgan
                          </p>
                        </div>
                        <p className="text-xs text-gray-500">
                          173 contributions
                        </p>
                      </div>
                    </div>

                    {/* Contributor 4 */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>RL</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium truncate">
                            Rachel Lee
                          </p>
                        </div>
                        <p className="text-xs text-gray-500">
                          151 contributions
                        </p>
                      </div>
                    </div>

                    {/* Contributor 5 */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>DM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium truncate">
                            David Martinez
                          </p>
                        </div>
                        <p className="text-xs text-gray-500">
                          132 contributions
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link
                      href="/docs"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                          <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-sm font-medium">Documentation</div>
                      </div>
                      <Check className="h-4 w-4 text-gray-400" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                          <ExternalLink className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="text-sm font-medium">API Reference</div>
                      </div>
                      <Check className="h-4 w-4 text-gray-400" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-3">
                          <ExternalLink className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="text-sm font-medium">Tutorials</div>
                      </div>
                      <Check className="h-4 w-4 text-gray-400" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                          <ExternalLink className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="text-sm font-medium">
                          Integration Guides
                        </div>
                      </div>
                      <Check className="h-4 w-4 text-gray-400" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Upcoming Events</CardTitle>
                  <Badge>New</Badge>
                </div>
                <CardDescription>
                  Join our online events to learn more about TastyMonial and
                  connect with other users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Event 1 */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-blue-400 to-violet-500 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        Webinar
                      </div>
                      <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white px-3 py-1 text-xs">
                        April 20, 2025 • 2:00 PM EST
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">
                        Mastering Testimonial Collection: Advanced Strategies
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Learn advanced techniques for collecting high-quality
                        testimonials that convert visitors into customers.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-medium">Hosted by:</span> Emily
                          Johnson
                        </div>
                        <Button size="sm">Register</Button>
                      </div>
                    </div>
                  </div>

                  {/* Event 2 */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-emerald-400 to-teal-500 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        Workshop
                      </div>
                      <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white px-3 py-1 text-xs">
                        May 5, 2025 • 1:00 PM EST
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">
                        TastyMonial API Masterclass
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        A hands-on workshop to help developers make the most of
                        the TastyMonial API for custom integrations.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-medium">Hosted by:</span> Ryan
                          Peters
                        </div>
                        <Button size="sm">Register</Button>
                      </div>
                    </div>
                  </div>

                  {/* Event 3 */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-amber-400 to-orange-500 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        Q&A Session
                      </div>
                      <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white px-3 py-1 text-xs">
                        May 15, 2025 • 11:00 AM EST
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">
                        Ask Me Anything: TastyMonial Product Team
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Join our product team for a live Q&A session about
                        upcoming features, roadmap, and more.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-medium">Hosted by:</span>{" "}
                          TastyMonial Team
                        </div>
                        <Button size="sm">Register</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Event Calendar</CardTitle>
                  <CardDescription>
                    View all upcoming community events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 text-center border-b">
                      <div className="font-medium">April 2025</div>
                    </div>
                    <div className="grid grid-cols-7 text-center text-xs">
                      <div className="py-2 border-b border-r">Sun</div>
                      <div className="py-2 border-b border-r">Mon</div>
                      <div className="py-2 border-b border-r">Tue</div>
                      <div className="py-2 border-b border-r">Wed</div>
                      <div className="py-2 border-b border-r">Thu</div>
                      <div className="py-2 border-b border-r">Fri</div>
                      <div className="py-2 border-b">Sat</div>

                      {/* First row */}
                      <div className="h-12 border-r border-b text-gray-400 p-1">
                        30
                      </div>
                      <div className="h-12 border-r border-b text-gray-400 p-1">
                        31
                      </div>
                      <div className="h-12 border-r border-b p-1">1</div>
                      <div className="h-12 border-r border-b p-1">2</div>
                      <div className="h-12 border-r border-b p-1">3</div>
                      <div className="h-12 border-r border-b p-1">4</div>
                      <div className="h-12 border-b p-1">5</div>

                      {/* Second row */}
                      <div className="h-12 border-r border-b p-1">6</div>
                      <div className="h-12 border-r border-b p-1">7</div>
                      <div className="h-12 border-r border-b p-1">8</div>
                      <div className="h-12 border-r border-b p-1">9</div>
                      <div className="h-12 border-r border-b p-1">10</div>
                      <div className="h-12 border-r border-b p-1">11</div>
                      <div className="h-12 border-b p-1">12</div>

                      {/* Third row - with current date */}
                      <div className="h-12 border-r border-b p-1">13</div>
                      <div className="h-12 border-r border-b p-1">14</div>
                      <div className="h-12 border-r border-b p-1">15</div>
                      <div className="h-12 border-r border-b p-1">16</div>
                      <div className="h-12 border-r border-b p-1">17</div>
                      <div className="h-12 border-r border-b p-1">18</div>
                      <div className="h-12 border-b p-1">19</div>

                      {/* Fourth row - with event */}
                      <div className="h-12 border-r border-b p-1">
                        <div className="h-full flex items-center justify-center">
                          20
                        </div>
                      </div>
                      <div className="h-12 border-r border-b p-1 relative">
                        <div className="h-full flex items-center justify-center">
                          21
                        </div>
                      </div>
                      <div className="h-12 border-r border-b p-1">
                        <div className="h-full flex items-center justify-center">
                          22
                        </div>
                      </div>
                      <div className="h-12 border-r border-b p-1">
                        <div className="h-full flex items-center justify-center">
                          23
                        </div>
                      </div>
                      <div className="h-12 border-r border-b p-1">
                        <div className="h-full flex items-center justify-center">
                          24
                        </div>
                      </div>
                      <div className="h-12 border-r border-b p-1">25</div>
                      <div className="h-12 border-b p-1">26</div>

                      {/* Fifth row */}
                      <div className="h-12 border-r border-b p-1">27</div>
                      <div className="h-12 border-r border-b p-1">28</div>
                      <div className="h-12 border-r border-b p-1">29</div>
                      <div className="h-12 border-r border-b p-1">30</div>
                      <div className="h-12 border-r border-b text-gray-400 p-1">
                        1
                      </div>
                      <div className="h-12 border-r border-b text-gray-400 p-1">
                        2
                      </div>
                      <div className="h-12 border-b text-gray-400 p-1">3</div>
                    </div>

                    <div className="p-3 text-xs space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <div>Apr 20 - Mastering Testimonial Collection</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                        <div>May 5 - TastyMonial API Masterclass</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                        <div>May 15 - Ask Me Anything</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Event Highlights</CardTitle>
                  <CardDescription>
                    Recordings from our past events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                          <div className="h-12 w-12 rounded-full bg-black/60 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">
                            Watch recording
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-medium">
                          Getting Started with TastyMonial
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          March 15, 2025
                        </p>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                          <div className="h-12 w-12 rounded-full bg-black/60 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">
                            Watch recording
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-medium">
                          Advanced Testimonial Analytics
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          February 22, 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <Button variant="link" size="sm">
                      View All Recordings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="showcase" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Community Showcase</CardTitle>
              <CardDescription>
                See how other TastyMonial users are implementing testimonials on
                their websites
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Showcase 1 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-500">Website Preview</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Acme Web Design</h3>
                      <Badge variant="outline">Agency</Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Implemented a floating testimonial sidebar that increased
                      conversion rates by 18%.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback>MK</AvatarFallback>
                        </Avatar>
                      </div>
                      <Button size="sm" variant="outline" className="h-8">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Showcase 2 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-500">Website Preview</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">TechStart SaaS</h3>
                      <Badge variant="outline">Software</Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Created a dynamic testimonial slider that rotates based on
                      the visitor&apos;s industry.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback>AL</AvatarFallback>
                        </Avatar>
                      </div>
                      <Button size="sm" variant="outline" className="h-8">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Showcase 3 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-500">Website Preview</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Wellness Boutique</h3>
                      <Badge variant="outline">E-commerce</Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Embedded product-specific testimonials on each product
                      page, boosting sales by 24%.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback>SR</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback>JW</AvatarFallback>
                        </Avatar>
                      </div>
                      <Button size="sm" variant="outline" className="h-8">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Showcase 4 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-500">Website Preview</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Legal Advisors Inc.</h3>
                      <Badge variant="outline">Professional</Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Uses video testimonials to build trust for their
                      high-ticket legal services.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback>RM</AvatarFallback>
                        </Avatar>
                      </div>
                      <Button size="sm" variant="outline" className="h-8">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Showcase 5 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-500">Website Preview</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">FoodDelivery App</h3>
                      <Badge variant="outline">Mobile App</Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Integrated TastyMonial API to display restaurant reviews
                      inside their mobile app.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback>KL</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback>TS</AvatarFallback>
                        </Avatar>
                      </div>
                      <Button size="sm" variant="outline" className="h-8">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Showcase 6 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-500">Website Preview</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Fitness Coaching</h3>
                      <Badge variant="outline">Personal Brand</Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Created a before/after testimonial gallery that improved
                      enrollment rates by 35%.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                      </div>
                      <Button size="sm" variant="outline" className="h-8">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button>
                  <HeartHandshake className="h-4 w-4 mr-2" />
                  Submit Your Showcase
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
