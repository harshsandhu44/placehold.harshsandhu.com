"use strict"

import { ChevronRight } from "lucide-react"
import { DocsPager } from "@/components/pager"

export default function InstallationPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Getting Started
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">Installation</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Installation
          </h1>
          <p className="text-lg text-muted-foreground">
            How to start using Placehold in your projects.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Placehold is primarily an API service, so there is nothing to "install" in the traditional sense of an npm package. 
            However, you can easily integrate it into your projects by using the API endpoints directly in your HTML `img` tags or fetching data via JavaScript.
          </p>
          
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Quick Start
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Simply use the URL in your image source:
          </p>
          
           <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900 mt-4">
              <code className="text-sm text-zinc-50">
                {`<img src="https://placehold.harshsandhu.com/api/img" alt="Placeholder" />`}
              </code>
            </pre>
            
          <p className="leading-7 [&:not(:first-child)]:mt-6">
             Or fetch text for your layout:
          </p>
           <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900 mt-4">
              <code className="text-sm text-zinc-50">
                {`const response = await fetch('https://placehold.harshsandhu.com/api/lorem');
const text = await response.text();`}
              </code>
            </pre>
        </div>
        
        <div className="pt-8">
            <DocsPager slug="/docs/installation" />
        </div>
      </div>
       <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-10">
          <div className="space-y-2">
            <p className="font-medium">On this page</p>
            <ul className="m-0 list-none">
              <li className="mt-0 pt-2">
                <a href="#" className="text-muted-foreground hover:text-foreground">Quick Start</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
