"use client";

import { DollarSign, Link, PieChart, TrendingUp, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

export default function AffiliatePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Affiliate Program
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Earn commissions by referring new customers to TastyMonial
          </p>
        </div>
        <Button className="w-full md:w-auto">Generate Affiliate Link</Button>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Earnings
            </CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0.00</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +0.0% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Referrals</CardTitle>
            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +0 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <PieChart className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.0%</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +0.0% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Link Clicks</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +0 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="overview">Program Overview</TabsTrigger>
          <TabsTrigger value="materials">Promotional Materials</TabsTrigger>
          <TabsTrigger value="payouts">Commissions & Payouts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>
                Our affiliate program is designed to reward you for bringing new
                customers to TastyMonial
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Link className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-medium mb-2">1. Share Your Link</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Generate your unique affiliate link and share it with your
                    audience through your website, social media, or email.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-medium mb-2">2. Drive Signups</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    When someone clicks your link and signs up for a paid
                    TastyMonial plan, they&apos;re tracked as your referral.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-medium mb-2">3. Earn Commissions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Earn a 30% commission on all payments made by your referrals
                    for their first year as a customer.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 dark:border-gray-800 p-6">
                <h3 className="font-medium mb-4">Program Benefits</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Generous Commissions:</span>{" "}
                      30% on all customer payments for 12 months
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Easy Tracking:</span>{" "}
                      Real-time dashboard to monitor your referrals and earnings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Marketing Support:</span>{" "}
                      Access to ready-made promotional materials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Monthly Payouts:</span> Get
                      paid reliably via PayPal or direct bank transfer
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Long Cookie Duration:</span>{" "}
                      30-day attribution window for all referrals
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Affiliates Performance Level</CardTitle>
              <CardDescription>
                Unlock higher commission rates as you refer more customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Bronze Level</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      0/5 referrals
                    </span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>

                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Level</th>
                      <th className="py-3 text-left font-medium">Referrals</th>
                      <th className="py-3 text-left font-medium">
                        Commission Rate
                      </th>
                      <th className="py-3 text-left font-medium">Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Bronze</td>
                      <td className="py-3">0-5</td>
                      <td className="py-3">30%</td>
                      <td className="py-3">Standard promotional materials</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Silver</td>
                      <td className="py-3">6-15</td>
                      <td className="py-3">35%</td>
                      <td className="py-3">+ Custom affiliate dashboard</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Gold</td>
                      <td className="py-3">16-30</td>
                      <td className="py-3">40%</td>
                      <td className="py-3">+ Priority support</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Platinum</td>
                      <td className="py-3">31+</td>
                      <td className="py-3">45%</td>
                      <td className="py-3">+ Custom landing pages</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Promotional Materials</CardTitle>
              <CardDescription>
                Ready-to-use content to promote TastyMonial to your audience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Your Affiliate Link</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 rounded-md border px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800">
                      https://tastymonial.in/?ref=your-username
                    </div>
                    <Button variant="outline" size="sm">
                      Copy
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">Banner Ads</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="border rounded-md overflow-hidden">
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Banner preview (300x250)
                        </span>
                      </div>
                      <div className="p-3 flex justify-between items-center">
                        <span className="text-sm">300x250 Banner</span>
                        <Button size="sm" variant="outline">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-md overflow-hidden">
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Banner preview (728x90)
                        </span>
                      </div>
                      <div className="p-3 flex justify-between items-center">
                        <span className="text-sm">728x90 Banner</span>
                        <Button size="sm" variant="outline">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">Email Templates</h3>
                  <div className="space-y-4">
                    <div className="rounded-md border overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
                        <span className="font-medium">Introduction Email</span>
                        <Button size="sm" variant="outline">
                          Copy
                        </Button>
                      </div>
                      <div className="p-4 text-sm text-gray-600 dark:text-gray-300">
                        <p>
                          Subject: Transform Your Customer Testimonials with
                          This Amazing Tool
                        </p>
                        <p className="mt-2">Hi [Name],</p>
                        <p className="mt-2">
                          I wanted to share a tool that&apos;s been a
                          game-changer for my business: TastyMonial.
                        </p>
                        <p className="mt-2">
                          It&apos;s a testimonial collection and display
                          platform that makes it super easy to gather feedback
                          from customers and showcase it beautifully on your
                          website.
                        </p>
                        <p className="mt-2">
                          Check it out here: [Your Affiliate Link]
                        </p>
                        <p className="mt-2">Best,</p>
                        <p>[Your Name]</p>
                      </div>
                    </div>

                    <div className="rounded-md border overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
                        <span className="font-medium">Follow-up Email</span>
                        <Button size="sm" variant="outline">
                          Copy
                        </Button>
                      </div>
                      <div className="p-4 text-sm text-gray-600 dark:text-gray-300">
                        <p>
                          Subject: Quick Question About Your Testimonial
                          Strategy
                        </p>
                        <p className="mt-2">Hi [Name],</p>
                        <p className="mt-2">
                          I was thinking about your business and wondered how
                          you&apos;re currently collecting and displaying
                          customer testimonials?
                        </p>
                        <p className="mt-2">
                          If you&apos;re looking for a better solution,
                          TastyMonial has been fantastic for me. It&apos;s
                          boosted my conversion rates by making it easy to
                          gather and showcase authentic feedback.
                        </p>
                        <p className="mt-2">
                          They offer a 14-day free trial: [Your Affiliate Link]
                        </p>
                        <p className="mt-2">
                          Let me know if you have any questions!
                        </p>
                        <p className="mt-2">Best,</p>
                        <p>[Your Name]</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">Social Media Posts</h3>
                  <div className="space-y-4">
                    <div className="rounded-md border overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
                        <span className="font-medium">Twitter/X Post</span>
                        <Button size="sm" variant="outline">
                          Copy
                        </Button>
                      </div>
                      <div className="p-4 text-sm text-gray-600 dark:text-gray-300">
                        <p>
                          Just discovered @TastyMonial - an amazing tool for
                          collecting and displaying customer testimonials on
                          your website. It&apos;s been a game-changer for my
                          business! Try it free for 14 days: [Your Affiliate
                          Link] #MarketingTools #SocialProof
                        </p>
                      </div>
                    </div>

                    <div className="rounded-md border overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
                        <span className="font-medium">LinkedIn Post</span>
                        <Button size="sm" variant="outline">
                          Copy
                        </Button>
                      </div>
                      <div className="p-4 text-sm text-gray-600 dark:text-gray-300">
                        <p>
                          💡 Business Tip: Customer testimonials can increase
                          conversions by up to 34%!
                        </p>
                        <p className="mt-2">
                          If you&apos;re not effectively collecting and
                          showcasing testimonials, you&apos;re leaving money on
                          the table.
                        </p>
                        <p className="mt-2">
                          I recently started using TastyMonial to streamline my
                          testimonial process, and it&apos;s been fantastic. The
                          platform makes it easy to:
                        </p>
                        <p className="mt-2">
                          ✅ Collect testimonials with beautiful forms
                          <br />
                          ✅ Display them anywhere on your site
                          <br />✅ Manage everything from one dashboard
                        </p>
                        <p className="mt-2">
                          Check it out here (14-day free trial available): [Your
                          Affiliate Link]
                        </p>
                        <p className="mt-2">
                          #SocialProof #MarketingTips #BusinessGrowth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payouts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Commission Structure</CardTitle>
              <CardDescription>
                How you earn and get paid for your referrals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border border-gray-100 dark:border-gray-800 p-6">
                <h3 className="font-medium mb-4">Commission Rates</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Plan Type</th>
                      <th className="py-3 text-left font-medium">
                        Commission Rate
                      </th>
                      <th className="py-3 text-left font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Monthly Pro Plan ($29/mo)</td>
                      <td className="py-3">30% ($8.70 per month)</td>
                      <td className="py-3">First 12 months</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Yearly Pro Plan ($290/year)</td>
                      <td className="py-3">30% ($87.00 per year)</td>
                      <td className="py-3">First 12 months</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Monthly Business Plan ($79/mo)</td>
                      <td className="py-3">30% ($23.70 per month)</td>
                      <td className="py-3">First 12 months</td>
                    </tr>
                    <tr>
                      <td className="py-3">Yearly Business Plan ($790/year)</td>
                      <td className="py-3">30% ($237.00 per year)</td>
                      <td className="py-3">First 12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-lg border border-gray-100 dark:border-gray-800 p-6">
                <h3 className="font-medium mb-4">Payout Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Payout Methods</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                        </div>
                        <span>PayPal</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                        </div>
                        <span>
                          Direct Bank Transfer (US, EU, UK, and 20+ more
                          countries)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                        </div>
                        <span>Cryptocurrency (BTC, ETH)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Payout Schedule
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Commissions are paid on the 15th of each month for the
                      previous month&apos;s earnings. You must have a minimum of
                      $50 in your account to receive a payout. If your balance
                      is below $50, it will roll over to the next month.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Commission Tracking
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      All referrals are tracked through a 30-day cookie. If
                      someone clicks your link but doesn&apos;t sign up
                      immediately, you&apos;ll still receive credit if they
                      return and subscribe within 30 days.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Payout Settings</h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    You need to set up your payout information to receive
                    commissions
                  </p>
                  <Button>Set Up Payout Method</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payout History</CardTitle>
              <CardDescription>
                Record of all your commission payouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No payout history yet. Start referring customers to earn
                  commissions!
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
