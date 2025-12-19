import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DocsPager } from "@/components/pager";
import { siteConfig } from "@/lib/config";

export default function ApiIntroductionPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            API Reference
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">Introduction</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            API Introduction
          </h1>
          <p className="text-lg text-muted-foreground">
            Get started with the {siteConfig.name} API.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <p className="leading-7 not-first:mt-6">
            The {siteConfig.name} API provides a simple and fast way to generate
            placeholder content for your applications. Whether you need images
            with specific dimensions and colors, or random text for mocking
            content, our API has you covered.
          </p>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Base URL
          </h2>
          <div className="mt-4 rounded-md bg-muted px-4 py-3 font-mono text-sm">
            {siteConfig.url}/api
          </div>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
            Available Endpoints
          </h2>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Link
              href="/docs/api/images"
              className="group relative rounded-lg border p-6 hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-bold">/img</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Generate placeholder images.
              </p>
            </Link>
            <Link
              href="/docs/api/text"
              className="group relative rounded-lg border p-6 hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-bold">/lorem</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Generate random text (Lorem Ipsum).
              </p>
            </Link>
          </div>
        </div>

        <div className="pt-8">
          <DocsPager slug="/docs/api" />
        </div>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-10">
          <div className="space-y-2">
            <p className="font-medium">On this page</p>
            <ul className="m-0 list-none">
              <li className="mt-0 pt-2">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Base URL
                </a>
              </li>
              <li className="mt-0 pt-2">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Available Endpoints
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
