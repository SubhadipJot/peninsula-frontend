import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { AgentNetwork } from "./agent-network"

const TASKS = [
  { agent: "search", text: "scanning 40+ career pages" },
  { agent: "match", text: "scored 5 roles against your profile" },
  { agent: "tailor", text: "drafting a cover letter for Full-stack Engineer" },
  { agent: "apply", text: "preparing application for Remote · Senior" },
  { agent: "track", text: "watching for a reply from 3 companies" },
] as const

function StatusFeed() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TASKS.length), 2600)
    return () => clearInterval(id)
  }, [])

  const current = TASKS[index]

  return (
    <div className="mx-auto mt-10 flex w-full max-w-sm items-center gap-3 rounded-lg border border-border bg-background/70 px-4 py-3 font-mono text-[13px] backdrop-blur">
      <span className="flex h-2 w-2 shrink-0 rounded-full bg-violet-500">
        <span className="h-2 w-2 animate-ping rounded-full bg-violet-500/60" />
      </span>
      <span className="truncate text-muted-foreground">
        <span className="text-violet-400">{current.agent}</span>
        <span className="mx-1.5 text-border">/</span>
        {current.text}
      </span>
    </div>
  )
}

export function HomePage() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden">
      <AgentNetwork />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 text-center">
        <p className="mx-auto mb-6 w-fit rounded-full border border-border bg-background/70 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-violet-400 backdrop-blur">
          AI job-hunting assistant
        </p>

        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Agents that search, match,
          <br />
          and apply for you.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Peninsula runs a team of agents that quietly find relevant roles, score them against
          your profile, and prepare your application — while you do anything else.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">Try for free</Button>
          <Button size="lg" variant="outline">
            See how it works
          </Button>
        </div>

        <StatusFeed />
      </div>
    </section>
  )
}
