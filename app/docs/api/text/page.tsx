"use strict"

import { ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DocsPager } from "@/components/pager"

export default function TextApiPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            API Reference
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">Text</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Text API (Lorem Ipsum)
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate random placeholder text for your designs.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <section>
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
              Endpoint
            </h2>
            <div className="mt-4 rounded-md bg-muted px-4 py-3 font-mono text-sm">
              GET /api/lorem
            </div>
          </section>

          <section>
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Parameters
            </h2>
            <div className="mt-4 border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parameter</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">units</TableCell>
                    <TableCell className="font-mono">sentences</TableCell>
                    <TableCell>Type of text units: <code className="text-xs">words</code>, <code className="text-xs">sentences</code>, or <code className="text-xs">paragraphs</code>.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">count</TableCell>
                    <TableCell className="font-mono">Random</TableCell>
                    <TableCell>Number of units to generate (1 to 2000).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">format</TableCell>
                    <TableCell className="font-mono">plain</TableCell>
                    <TableCell>Output format: <code className="text-xs">plain</code> or <code className="text-xs">html</code>.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section>
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Examples
            </h2>
            <Tabs defaultValue="curl" className="mt-4">
              <TabsList>
                <TabsTrigger value="curl">cURL</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              </TabsList>
              <TabsContent value="curl" className="mt-4">
                <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900">
                  <code className="text-sm text-zinc-50">
                    {`curl "https://placehold.harshsandhu.com/api/lorem?units=paragraphs&count=3"`}
                  </code>
                </pre>
              </TabsContent>
              <TabsContent value="javascript" className="mt-4">
                <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900">
                  <code className="text-sm text-zinc-50">
                    {`fetch('https://placehold.harshsandhu.com/api/lorem?units=words&count=50')
  .then(response => response.text())
  .then(data => console.log(data));`}
                  </code>
                </pre>
              </TabsContent>
            </Tabs>
          </section>
        </div>
        <div className="pt-8">
            <DocsPager slug="/docs/api/text" />
        </div>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-10">
          <div className="space-y-2">
            <p className="font-medium">On this page</p>
            <ul className="m-0 list-none">
              <li className="mt-0 pt-2">
                <a href="#endpoint" className="text-muted-foreground hover:text-foreground">Endpoint</a>
              </li>
              <li className="mt-0 pt-2">
                <a href="#parameters" className="text-muted-foreground hover:text-foreground">Parameters</a>
              </li>
              <li className="mt-0 pt-2">
                <a href="#examples" className="text-muted-foreground hover:text-foreground">Examples</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
