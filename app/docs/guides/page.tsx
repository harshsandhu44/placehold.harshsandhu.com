import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DocsPager } from "@/components/pager";
import { siteConfig } from "@/lib/config";

export default function GuidesPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Guides
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">Introduction</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Guides
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn how to use {siteConfig.name} with your favorite tools.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-8">
          <Link
            href="/docs/guides/react"
            className="group relative rounded-lg border p-6 hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-bold">Usage with React</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Best practices for using Placehold in React applications.
            </p>
          </Link>
          <Link
            href="/docs/guides/html"
            className="group relative rounded-lg border p-6 hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-bold">Usage with HTML</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Simple integration for static HTML pages.
            </p>
          </Link>
        </div>

        <div className="pt-8">
          <DocsPager slug="/docs/guides" />
        </div>
      </div>
    </main>
  );
}
