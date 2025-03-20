import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQSection() {
  return (
    <div>
      {" "}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about TastyMonial
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I collect testimonials?
              </AccordionTrigger>
              <AccordionContent>
                After signing up, you can create a testimonial collection form
                in your dashboard. You&apos;ll receive a unique link that you
                can share with your clients via email, social media, or embed
                directly on your website. When clients submit testimonials,
                they&apos;ll appear in your dashboard.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I customize the widget?</AccordionTrigger>
              <AccordionContent>
                Yes! TastyMonial offers extensive customization options. You can
                change colors, fonts, layouts, and display styles to match your
                brand. Pro and Team plans offer even more advanced customization
                options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is there an API available?</AccordionTrigger>
              <AccordionContent>
                Yes, Pro and Team plans include full API access. This allows you
                to fetch testimonials programmatically and integrate them into
                your applications or websites in custom ways. Our API is RESTful
                and well-documented.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How do I embed testimonials on my website?
              </AccordionTrigger>
              <AccordionContent>
                TastyMonial provides several ways to embed testimonials. You can
                use our React component, JavaScript widget, or iframe embed.
                Simply copy the code from your dashboard and paste it into your
                website. We also provide WordPress and Webflow plugins.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I migrate from another platform?
              </AccordionTrigger>
              <AccordionContent>
                We offer a simple import tool that allows you to migrate
                testimonials from other platforms or spreadsheets. Our support
                team is also available to help with custom migrations for larger
                datasets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Is TastyMonial GDPR compliant?
              </AccordionTrigger>
              <AccordionContent>
                Yes, TastyMonial is fully GDPR compliant. We provide all the
                necessary tools and documentation to help you collect and manage
                testimonials in compliance with data protection regulations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
