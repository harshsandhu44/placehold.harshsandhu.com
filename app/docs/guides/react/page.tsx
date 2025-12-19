import { ChevronRight } from "lucide-react";
import { DocsPager } from "@/components/pager";

export default function ReactGuidePage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Guides
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">Usage with React</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Usage with React
          </h1>
          <p className="text-lg text-muted-foreground">
            integrating placeholders into your React components.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <p className="leading-7">
            In React, you can use the image API directly in your `img` tags or
            creating a reusable component.
          </p>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
            Reusable Image Component
          </h2>
          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900 mt-4">
            <code className="text-sm text-zinc-50">
              {`function Placeholder({ width = 600, height = 400, ...props }) {
  const src = 
https://placehold.harshsandhu.com/api/img?w=\${width}&h=\${height}
  return <img src={src} alt="Placeholder" {...props} />;
}

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <Placeholder width={800} height={200} className="rounded-lg" />
    </div>
  );
}`}
            </code>
          </pre>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
            Fetching Text (Hook)
          </h2>
          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900 mt-4">
            <code className="text-sm text-zinc-50">
              {`import { useState, useEffect } from 'react';

function useLorem(count = 1) {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(
https://placehold.harshsandhu.com/api/lorem?count=\${count}
      )
      .then(res => res.text())
      .then(data => setText(data));
  }, [count]);

  return text;
}`}
            </code>
          </pre>
        </div>

        <div className="pt-8">
          <DocsPager slug="/docs/guides/react" />
        </div>
      </div>
    </main>
  );
}
