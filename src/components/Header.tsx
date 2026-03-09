"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border/50">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-text hover:text-accent transition-colors"
          >
            {SITE.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-heading font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-text-secondary hover:text-text hover:bg-bg-subtle"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="ml-2 pl-2 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="w-9 h-9 flex items-center justify-center rounded-full text-text-secondary hover:text-text hover:bg-bg-subtle transition-colors"
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <Container>
            <div className="py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-heading font-medium transition-colors ${
                      isActive
                        ? "text-accent bg-accent-light"
                        : "text-text-secondary hover:text-text hover:bg-bg-subtle"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
