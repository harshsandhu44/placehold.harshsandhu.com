import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container relative py-6 lg:py-10">
          <section className="mx-auto flex max-w-245 flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              About Placehold
            </h1>
            <span className="max-w-187.5 text-center text-lg text-muted-foreground sm:text-xl">
              A simple, reliable utility for developers and designers.
            </span>
          </section>

          <section className="mx-auto max-w-200 space-y-6 py-8">
            <p className="leading-7">
              Placehold was born out of a simple need: a fast, no-nonsense way
              to generate placeholder images and text during the development
              phase of projects. While there are many great tools out there, we
              wanted something that felt lightweight, modern, and easily
              memorable.
            </p>
            <p className="leading-7">
              Built with <strong>Next.js</strong> and running on the edge,
              Placehold is designed for performance. It generates images on the
              fly using{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                @vercel/og
              </code>{" "}
              and serves text content with minimal latency.
            </p>
            <div className="flex justify-center py-8">
              <Link href="/docs" className={cn(buttonVariants({ size: "lg" }))}>
                Check the Docs
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
