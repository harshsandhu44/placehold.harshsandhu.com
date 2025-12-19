import { ChevronRight } from "lucide-react";
import { DocsPager } from "@/components/pager";

export default function BlogPrototypeTutorialPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Tutorials
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">
            Build a Blog Prototype
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Build a Blog Prototype
          </h1>
          <p className="text-lg text-muted-foreground">
            Create a blog layout with generated content in minutes.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <p className="leading-7">
            In this tutorial, we will create a simple blog post layout using
            Placehold for the featured image and content.
          </p>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
            1. The Featured Image
          </h2>
          <p className="leading-7">
            We start by adding a wide featured image at the top.
          </p>
          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900 mt-4">
            <code className="text-sm text-zinc-50">
              {`<img 
  src="https://placehold.harshsandhu.com/api/img?w=1200&h=400&bg=2d2d2d&fg=666" 
  class="w-full h-auto rounded-lg mb-8" 
  alt="Featured Image" 
/>`}
            </code>
          </pre>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
            2. The Content
          </h2>
          <p className="leading-7">
            For the content, we&apos;ll fetch HTML formatted paragraphs.
          </p>
          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900 mt-4">
            <code className="text-sm text-zinc-50">
              {`// Example using React/Next.js
async function BlogContent() {
  const res = await fetch('https://placehold.harshsandhu.com/api/lorem?units=paragraphs&count=5&format=html');
  const html = await res.text();
  
  return (
    <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
  );
}`}
            </code>
          </pre>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
            3. Putting it together
          </h2>
          <p className="leading-7">
            Combine these elements to flesh out your UI without writing a single
            dummy word yourself!
          </p>
        </div>

        <div className="pt-8">
          <DocsPager slug="/docs/tutorials/blog-prototype" />
        </div>
      </div>
    </main>
  );
}
