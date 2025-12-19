"use strict"

import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"

import { siteConfig } from "@/lib/config"
import { DocsPager } from "@/components/pager"

export default function DocsPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">Introduction</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Introduction
          </h1>
          <p className="text-lg text-muted-foreground">
            Welcome to the {siteConfig.name} documentation. {siteConfig.description}
          </p>
        </div>
        <div className="pb-12 pt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/docs/api/images"
              className="group relative rounded-lg border p-6 hover:bg-muted/50 transition-colors"
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold">API Reference</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to generate placeholder images and text via our REST API.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/docs/guides"
              className="group relative rounded-lg border p-6 hover:bg-muted/50 transition-colors"
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold">Guides</h3>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step guides for integrating {siteConfig.name} into your workflow.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <DocsPager slug="/docs" />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-10">
          <div className="space-y-2">
            <p className="font-medium">On this page</p>
            <ul className="m-0 list-none">
              <li className="mt-0 pt-2">
                <a
                  href="#"
                  className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
