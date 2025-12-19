import { DocsPager } from "@/components/pager";

export default function ChangelogPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Changelog
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Changelog
          </h1>
          <p className="text-lg text-muted-foreground">
            Latest updates and announcements.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          <div className="flex flex-col gap-2 border-l-2 pl-6">
            <h3 className="font-bold">v1.0.0</h3>
            <time className="text-sm text-muted-foreground">December 2025</time>
            <ul className="list-disc pl-4 space-y-1">
              <li>Initial release</li>
              <li>Image generation API</li>
              <li>Lorem ipsum text generation API</li>
              <li>Documentation website launch</li>
            </ul>
          </div>
        </div>

        <div className="pt-8">
          <DocsPager slug="/docs/changelog" />
        </div>
      </div>
    </main>
  );
}
