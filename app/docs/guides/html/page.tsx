import { ChevronRight } from "lucide-react";
import { DocsPager } from "@/components/pager";

export default function HtmlGuidePage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Guides
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">Usage with HTML</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Usage with HTML
          </h1>
          <p className="text-lg text-muted-foreground">
            Simple integration for static sites.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <p className="leading-7">
            The easiest way to use Placehold is by embedding the API URL
            directly into your HTML `src` attributes.
          </p>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
            Image Tag
          </h2>
          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900 mt-4">
            <code className="text-sm text-zinc-50">
              {`<!-- Standard image -->
<img src="https://placehold.harshsandhu.com/api/img" alt="Placeholder" />

<!-- Custom dimensions and colors -->
<img src="https://placehold.harshsandhu.com/api/img?w=300&h=300&bg=333&fg=ccc" alt="Dark Mode Placeholder" />`}
            </code>
          </pre>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
            Responsive Images (srcset)
          </h2>
          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900 mt-4">
            <code className="text-sm text-zinc-50">
              {`<img 
  src="https://placehold.harshsandhu.com/api/img?w=400"
  srcset="https://placehold.harshsandhu.com/api/img?w=400 400w,
          https://placehold.harshsandhu.com/api/img?w=800 800w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Responsive Placeholder" 
/>`}
            </code>
          </pre>
        </div>

        <div className="pt-8">
          <DocsPager slug="/docs/guides/html" />
        </div>
      </div>
    </main>
  );
}
