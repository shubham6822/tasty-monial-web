import { Check, X } from "lucide-react";
import React from "react";

export default function WhyChoose() {
  return (
    <div>
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Choose TastyMonial?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how we compare to manual testimonial management
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">TastyMonial</th>
                  <th className="py-4 px-6 text-center">Manual Collection</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6">
                    Automated Testimonial Collection
                  </td>
                  <td className="py-4 px-6 text-center text-green-500">
                    <Check className="mx-auto h-5 w-5" />
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">
                    <X className="mx-auto h-5 w-5" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Embed with 1 Line of Code</td>
                  <td className="py-4 px-6 text-center text-green-500">
                    <Check className="mx-auto h-5 w-5" />
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">
                    <X className="mx-auto h-5 w-5" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">No Code Required</td>
                  <td className="py-4 px-6 text-center text-green-500">
                    <Check className="mx-auto h-5 w-5" />
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">
                    <X className="mx-auto h-5 w-5" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Responsive Design</td>
                  <td className="py-4 px-6 text-center text-green-500">
                    <Check className="mx-auto h-5 w-5" />
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">
                    <X className="mx-auto h-5 w-5" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Moderation Tools</td>
                  <td className="py-4 px-6 text-center text-green-500">
                    <Check className="mx-auto h-5 w-5" />
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">
                    <X className="mx-auto h-5 w-5" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">API Access</td>
                  <td className="py-4 px-6 text-center text-green-500">
                    <Check className="mx-auto h-5 w-5" />
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">
                    <X className="mx-auto h-5 w-5" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
