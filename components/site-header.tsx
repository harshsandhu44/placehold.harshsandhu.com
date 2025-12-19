import Link from "next/link";

import { siteConfig } from "@/lib/config";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { docsConfig } from "@/lib/config";
import { GithubIcon } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav items={docsConfig.mainNav} />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative w-full text-muted-foreground md:w-64 lg:w-80">
              <span className="text-sm px-2 hidden lg:inline-block">
                Search documentation...
              </span>
            </div>
          </div>
          <nav className="flex items-center">
            <Button asChild variant="ghost">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
