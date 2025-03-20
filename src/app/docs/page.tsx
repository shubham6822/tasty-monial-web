import Link from "next/link";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { CodeTabs } from "../../components/docs/CodeTabs";
import { FAQAccordion } from "../../components/docs/FAQAccordion";
import { Button } from "../../components/ui/button";

export default function DocsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          TastyMonial Documentation
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn how to integrate and customize TastyMonial in your website
        </p>
      </div>

      {/* Introduction Section */}
      <section id="introduction" className="scroll-mt-20 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Introduction
        </h2>
        <p>
          TastyMonial is a modern, developer-friendly platform for collecting
          and showcasing testimonials on your website. With our simple API and
          customizable widgets, you can easily add social proof to your site and
          boost conversions.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Easy Integration</h3>
              <p className="text-sm text-muted-foreground">
                Add testimonials to your site with just a few lines of code.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Customizable Design</h3>
              <p className="text-sm text-muted-foreground">
                Match your brand with customizable themes and layouts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Powerful API</h3>
              <p className="text-sm text-muted-foreground">
                Full control with our comprehensive REST API.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Dashboard Management</h3>
              <p className="text-sm text-muted-foreground">
                Easily manage testimonials through our intuitive dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="scroll-mt-20 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Quick Start
        </h2>
        <p>
          Get up and running with TastyMonial in minutes. Follow these simple
          steps to add testimonials to your website.
        </p>
        <ol className="ml-6 list-decimal space-y-4">
          <li>
            <p className="font-medium">Sign up for a TastyMonial account</p>
            <p className="text-muted-foreground">
              Create an account at{" "}
              <Link href="/" className="text-primary underline">
                tastymonial.in
              </Link>
            </p>
          </li>
          <li>
            <p className="font-medium">Get your API key</p>
            <p className="text-muted-foreground">
              Find your API key in the dashboard under Settings &gt; API
            </p>
          </li>
          <li>
            <p className="font-medium">Install the TastyMonial package</p>
            <CodeBlock language="bash" code="npm install tastymonial-react" />
          </li>
          <li>
            <p className="font-medium">Add the widget to your website</p>
            <CodeBlock
              language="jsx"
              code={`import { TestimonialSlider } from 'tastymonial-react';

function App() {
  return (
    <div className="my-app">
      <TestimonialSlider 
        apiKey="your-api-key"
        limit={5}
        theme="light"
      />
    </div>
  );
}`}
            />
          </li>
        </ol>
      </section>

      {/* Installation Section */}
      <section id="npm-yarn" className="scroll-mt-20 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Installation
        </h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          NPM/Yarn
        </h3>
        <p>Install TastyMonial using your preferred package manager:</p>
        <CodeTabs
          tabs={[
            {
              language: "bash",
              label: "npm",
              code: "npm install tastymonial-react",
            },
            {
              language: "bash",
              label: "yarn",
              code: "yarn add tastymonial-react",
            },
            {
              language: "bash",
              label: "pnpm",
              code: "pnpm add tastymonial-react",
            },
          ]}
        />
      </section>

      <section id="cdn" className="scroll-mt-20 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          CDN
        </h3>
        <p>You can also include TastyMonial directly from our CDN:</p>
        <CodeBlock
          language="html"
          code={`<script src="https://cdn.tastymonial.com/widget.js"></script>
<link rel="stylesheet" href="https://cdn.tastymonial.com/widget.css">

<div id="tastymonial-container"></div>
<script>
  TastyMonial.init({
    container: '#tastymonial-container',
    apiKey: 'your-api-key',
    limit: 5
  });
</script>`}
        />
      </section>

      <section id="react" className="scroll-mt-20 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          React
        </h3>
        <p>For React applications, import and use our component:</p>
        <CodeBlock
          language="jsx"
          code={`import { TestimonialSlider } from 'tastymonial-react';

function App() {
  return (
    <div className="my-app">
      <TestimonialSlider 
        apiKey="your-api-key"
        limit={5}
        theme="light"
      />
    </div>
  );
}`}
        />
      </section>

      <section id="vue" className="scroll-mt-20 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Vue
        </h3>
        <p>For Vue applications, import and use our component:</p>
        <CodeBlock
          language="html"
          code={`<template>
  <div>
    <testimonial-slider 
      :api-key="apiKey"
      :limit="5"
      theme="light"
    />
  </div>
</template>

<script>
import { TestimonialSlider } from 'tastymonial-vue';

export default {
  components: {
    TestimonialSlider
  },
  data() {
    return {
      apiKey: 'your-api-key'
    }
  }
}
</script>`}
        />
      </section>

      {/* Usage Section */}
      <section id="basic-usage" className="scroll-mt-20 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Usage
        </h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h3>
        <p>
          Once installed, you can use TastyMonial to display testimonials on
          your website:
        </p>
        <CodeBlock
          language="jsx"
          code={`import { TestimonialSlider } from 'tastymonial-react';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <TestimonialSlider 
        apiKey="your-api-key"
        limit={5}
      />
    </section>
  );
}`}
        />
      </section>

      <section id="advanced-usage" className="scroll-mt-20 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Advanced Usage
        </h3>
        <p>For more control, you can use our advanced options:</p>
        <CodeBlock
          language="jsx"
          code={`import { TestimonialGrid } from 'tastymonial-react';

function AdvancedTestimonials() {
  return (
    <TestimonialGrid 
      apiKey="your-api-key"
      limit={6}
      theme="dark"
      layout="grid"
      cardStyle={{
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      filters={{
        minRating: 4,
        tags: ['featured']
      }}
      onTestimonialClick={(testimonial) => {
        console.log('Testimonial clicked:', testimonial);
      }}
    />
  );
}`}
        />
      </section>

      {/* Customization Section */}
      <section id="themes" className="scroll-mt-20 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Customization
        </h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Themes
        </h3>
        <p>
          TastyMonial comes with built-in themes that you can easily switch
          between:
        </p>
        <Tabs defaultValue="light" className="w-full">
          <TabsList>
            <TabsTrigger value="light">Light Theme</TabsTrigger>
            <TabsTrigger value="dark">Dark Theme</TabsTrigger>
            <TabsTrigger value="custom">Custom Theme</TabsTrigger>
          </TabsList>
          <TabsContent value="light" className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-medium">Light Theme Example</p>
              <div className="mt-2 h-40 rounded-lg bg-background p-4 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">
                      &quot;TastyMonial has completely transformed how we
                      collect testimonials!&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock
              language="jsx"
              code={`<TestimonialSlider 
  apiKey="your-api-key"
  theme="light"
/>`}
            />
          </TabsContent>
          <TabsContent value="dark" className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-medium">Dark Theme Example</p>
              <div className="mt-2 h-40 rounded-lg bg-slate-800 p-4 shadow-sm text-white">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/50"></div>
                  <div>
                    <p className="font-medium">Jane Smith</p>
                    <p className="text-sm text-slate-300">
                      &quot;The testimonial widget looks amazing on our
                      website!&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock
              language="jsx"
              code={`<TestimonialSlider 
  apiKey="your-api-key"
  theme="dark"
/>`}
            />
          </TabsContent>
          <TabsContent value="custom" className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-medium">Custom Theme Example</p>
              <div className="mt-2 h-40 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-sm text-white">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-white/20"></div>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-white/80">
                      &quot;Our customers love leaving testimonials now!&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock
              language="jsx"
              code={`<TestimonialSlider 
  apiKey="your-api-key"
  theme="custom"
  customTheme={{
    backgroundColor: 'linear-gradient(to right, #8B5CF6, #EC4899)',
    textColor: '#FFFFFF',
    cardBackgroundColor: 'rgba(255, 255, 255, 0.1)',
    cardBorderRadius: '8px',
    avatarBorderColor: '#FFFFFF'
  }}
/>`}
            />
          </TabsContent>
        </Tabs>
      </section>

      <section id="layouts" className="scroll-mt-20 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Layouts
        </h3>
        <p>
          Choose from different layout options to display your testimonials:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="font-medium">Slider Layout</p>
            <div className="mt-2 h-40 rounded-lg bg-background p-4 shadow-sm">
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-muted-foreground">
                  Slider Layout Preview
                </p>
              </div>
            </div>
            <CodeBlock
              language="jsx"
              code={`<TestimonialSlider 
  apiKey="your-api-key"
  layout="slider"
/>`}
            />
          </div>
          <div className="rounded-lg border p-4">
            <p className="font-medium">Grid Layout</p>
            <div className="mt-2 h-40 rounded-lg bg-background p-4 shadow-sm">
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-muted-foreground">
                  Grid Layout Preview
                </p>
              </div>
            </div>
            <CodeBlock
              language="jsx"
              code={`<TestimonialGrid 
  apiKey="your-api-key"
  layout="grid"
  columns={3}
/>`}
            />
          </div>
        </div>
      </section>

      <section id="styling" className="scroll-mt-20 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Styling
        </h3>
        <p>
          Customize the appearance of your testimonials with CSS or style props:
        </p>
        <CodeBlock
          language="jsx"
          code={`<TestimonialSlider 
  apiKey="your-api-key"
  containerClassName="my-custom-container"
  cardClassName="my-custom-card"
  style={{
    maxWidth: '800px',
    margin: '0 auto',
  }}
  cardStyle={{
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  }}
/>`}
        />
        <p>You can also use CSS variables to customize the appearance:</p>
        <CodeBlock
          language="css"
          code={`:root {
  --tastymonial-primary-color: #4f46e5;
  --tastymonial-text-color: #1f2937;
  --tastymonial-background-color: #ffffff;
  --tastymonial-card-background: #f9fafb;
  --tastymonial-card-border-radius: 8px;
  --tastymonial-card-padding: 20px;
}`}
        />
      </section>

      {/* API Reference Section */}
      <section id="authentication" className="scroll-mt-20 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          API Reference
        </h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Authentication
        </h3>
        <p>
          All API requests require authentication using your API key. You can
          find your API key in the dashboard under Settings &gt; API.
        </p>
        <CodeTabs
          tabs={[
            {
              language: "bash",
              label: "cURL",
              code: `curl -X GET "https://api.tastymonial.com/testimonials" \\
  -H "Authorization: Bearer your-api-key"`,
            },
            {
              language: "javascript",
              label: "JavaScript",
              code: `fetch('https://api.tastymonial.com/testimonials', {
  headers: {
    'Authorization': 'Bearer your-api-key'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
            },
            {
              language: "python",
              label: "Python",
              code: `import requests

response = requests.get(
    'https://api.tastymonial.com/testimonials',
    headers={'Authorization': 'Bearer your-api-key'}
)
data = response.json()
print(data)`,
            },
          ]}
        />
      </section>

      <section id="endpoints" className="scroll-mt-20 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Endpoints
        </h3>
        <p>The TastyMonial API provides the following endpoints:</p>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-medium">Get Testimonials</h4>
            <p className="text-sm text-muted-foreground">
              Retrieve a list of testimonials for your account.
            </p>
            <CodeTabs
              tabs={[
                {
                  language: "bash",
                  label: "Request",
                  code: `GET https://api.tastymonial.com/testimonials?limit=10&page=1`,
                },
                {
                  language: "json",
                  label: "Response",
                  code: `{
  "testimonials": [
    {
      "id": "123456",
      "name": "John Doe",
      "email": "john@example.com",
      "message": "TastyMonial has completely transformed how we collect testimonials!",
      "rating": 5,
      "date": "2023-05-15T10:30:00Z"
    },
    {
      "id": "123457",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "message": "The testimonial widget looks amazing on our website!",
      "rating": 4,
      "date": "2023-05-10T14:45:00Z"
    }
  ],
  "pagination": {
    "total": 24,
    "page": 1,
    "limit": 10,
    "pages": 3
  }
}`,
                },
              ]}
            />
          </div>
          <div>
            <h4 className="text-xl font-medium">Create Testimonial</h4>
            <p className="text-sm text-muted-foreground">
              Create a new testimonial.
            </p>
            <CodeTabs
              tabs={[
                {
                  language: "bash",
                  label: "Request",
                  code: `POST https://api.tastymonial.com/testimonials
Content-Type: application/json

{
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "message": "Our customers love leaving testimonials now!",
  "rating": 5
}`,
                },
                {
                  language: "json",
                  label: "Response",
                  code: `{
  "id": "123458",
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "message": "Our customers love leaving testimonials now!",
  "rating": 5,
  "date": "2023-05-20T09:15:00Z"
}`,
                },
              ]}
            />
          </div>
          <div>
            <h4 className="text-xl font-medium">Delete Testimonial</h4>
            <p className="text-sm text-muted-foreground">
              Delete a testimonial by ID.
            </p>
            <CodeTabs
              tabs={[
                {
                  language: "bash",
                  label: "Request",
                  code: `DELETE https://api.tastymonial.com/testimonials/123458`,
                },
                {
                  language: "json",
                  label: "Response",
                  code: `{
  "success": true,
  "message": "Testimonial deleted successfully"
}`,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="rate-limits" className="scroll-mt-20 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Rate Limits
        </h3>
        <p>The TastyMonial API has the following rate limits:</p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <span className="font-medium">Free plan:</span> 100 requests per
            hour
          </li>
          <li>
            <span className="font-medium">Pro plan:</span> 1,000 requests per
            hour
          </li>
          <li>
            <span className="font-medium">Enterprise plan:</span> 10,000
            requests per hour
          </li>
        </ul>
        <p>
          If you exceed the rate limit, you will receive a 429 Too Many Requests
          response.
        </p>
      </section>

      {/* Troubleshooting Section */}
      <section id="common-issues" className="scroll-mt-20 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Troubleshooting
        </h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Common Issues
        </h3>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h4 className="font-medium">Widget not displaying</h4>
            <p className="text-sm text-muted-foreground">
              If the widget is not displaying, check the following:
            </p>
            <ul className="ml-6 list-disc text-sm">
              <li>Verify that your API key is correct</li>
              <li>Check for JavaScript errors in the console</li>
              <li>Ensure the container element exists in the DOM</li>
              <li>Verify that you have testimonials in your account</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-medium">API authentication errors</h4>
            <p className="text-sm text-muted-foreground">
              If you&apos;re receiving authentication errors, check the
              following:
            </p>
            <ul className="ml-6 list-disc text-sm">
              <li>Verify that your API key is correct</li>
              <li>
                Ensure you&apos;re including the &quot;Bearer&quot; prefix in
                the Authorization header
              </li>
              <li>Check if your API key has been revoked or expired</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="error-codes" className="scroll-mt-20 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Error Codes
        </h3>
        <p>The TastyMonial API returns the following error codes:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left font-medium">Code</th>
                <th className="py-2 text-left font-medium">Description</th>
                <th className="py-2 text-left font-medium">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">401</td>
                <td className="py-2">Unauthorized</td>
                <td className="py-2">Check your API key</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">403</td>
                <td className="py-2">Forbidden</td>
                <td className="py-2">
                  You don&apos;t have permission to access this resource
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">404</td>
                <td className="py-2">Not Found</td>
                <td className="py-2">
                  The requested resource doesn&apos;t exist
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">429</td>
                <td className="py-2">Too Many Requests</td>
                <td className="py-2">You&apos;ve exceeded the rate limit</td>
              </tr>
              <tr>
                <td className="py-2">500</td>
                <td className="py-2">Internal Server Error</td>
                <td className="py-2">Something went wrong on our end</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          FAQ
        </h2>
        <FAQAccordion
          items={[
            {
              question: "How do I get my API key?",
              answer:
                "You can find your API key in the dashboard under Settings > API. If you don't have an account yet, you'll need to sign up first.",
            },
            {
              question: "Can I customize the appearance of the testimonials?",
              answer:
                "Yes, you can customize the appearance of the testimonials using themes, layouts, and custom CSS. See the Customization section for more details.",
            },
            {
              question: "How do I filter testimonials by rating?",
              answer:
                'You can filter testimonials by rating using the filters prop: <TestimonialSlider apiKey="your-api-key" filters={{ minRating: 4 }} />',
            },
            {
              question: "Can I use TastyMonial with other frameworks?",
              answer:
                "Yes, TastyMonial supports React, Vue, and vanilla JavaScript. We also provide a CDN version that you can use with any framework.",
            },
            {
              question: "How do I collect testimonials from my customers?",
              answer:
                "You can collect testimonials using our form component or by creating your own form and submitting testimonials via the API.",
            },
            {
              question: "Is there a limit to how many testimonials I can have?",
              answer:
                "The number of testimonials you can have depends on your plan. The free plan allows up to 50 testimonials, while paid plans offer unlimited testimonials.",
            },
            {
              question: "Can I export my testimonials?",
              answer:
                "Yes, you can export your testimonials in CSV or JSON format from the dashboard under Testimonials > Export.",
            },
          ]}
        />
      </section>

      <div className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/sign-up">Get Started with TastyMonial</Link>
        </Button>
      </div>
    </div>
  );
}
