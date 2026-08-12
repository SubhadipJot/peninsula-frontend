import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

import { Button } from "@/components/ui/button"

function LoadingFallback() {
  return (
    <div className="flex min-h-svh items-center justify-center text-sm text-muted-foreground">
      Loading…
    </div>
  )
}

export function LandingLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="relative z-20">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link to="/" className="font-semibold tracking-tight">
            Peninsula
          </Link>
          <Button variant="outline" size="sm">
            Try for free
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
