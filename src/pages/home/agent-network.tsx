import { useEffect, useState } from "react"

interface AgentNode {
  id: string
  label: string
  title: string
  description: string
  x: number
  y: number
  /** Relative diameter of the node, like a planet in a solar system. */
  size: number
}

interface LightStreak {
  id: string
  path: string
  duration: number
  delay: number
}

// Glowing agent nodes positioned as a loose ring (percentages of the canvas),
// sized like planets of different radii.
const NODES: AgentNode[] = [
  {
    id: "search",
    label: "search",
    title: "Search agent",
    description: "Scans 40+ career pages for fresh openings.",
    x: 6,
    y: 50,
    size: 3,
  },
  {
    id: "match",
    label: "match",
    title: "Match agent",
    description: "Scores each role against your profile.",
    x: 31,
    y: 17,
    size: 5,
  },
  {
    id: "tailor",
    label: "tailor",
    title: "Tailor agent",
    description: "Drafts a cover letter for every match.",
    x: 69,
    y: 17,
    size: 2.5,
  },
  {
    id: "apply",
    label: "apply",
    title: "Apply agent",
    description: "Prepares your application for submission.",
    x: 94,
    y: 50,
    size: 7,
  },
  {
    id: "track",
    label: "track",
    title: "Track agent",
    description: "Watches for replies and keeps score.",
    x: 69,
    y: 83,
    size: 4,
  },
  {
    id: "report",
    label: "report",
    title: "Report agent",
    description: "Summarizes where every application stands.",
    x: 31,
    y: 83,
    size: 2,
  },
]

function AgentNode({ node, index }: { node: AgentNode; index: number }) {
  const diameter = node.size * 0.5
  const core = Math.max(0.375, diameter * 0.3)

  return (
    <div
      className="group pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <div className="flex flex-col items-center">
        <div
          className="relative flex items-center justify-center rounded-full bg-violet-400"
          style={{
            width: `${diameter}rem`,
            height: `${diameter}rem`,
            animation: `node-pulse 3s ease-in-out ${index * 0.5}s infinite`,
          }}
        >
          <span
            className="rounded-full bg-white/90"
            style={{
              width: `${core}rem`,
              height: `${core}rem`,
            }}
          />
        </div>

        <span
          className="mt-3 font-mono uppercase tracking-wider text-muted-foreground"
          style={{ fontSize: `${Math.min(11, 8 + node.size)}px` }}
        >
          {node.label}
        </span>
      </div>

      {/* Hover popup */}
      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-48 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="rounded-lg border border-violet-400/25 bg-background/95 p-3 text-left shadow-[0_0_28px_rgba(139,92,246,0.35)] backdrop-blur">
          <p className="text-sm font-medium text-foreground">{node.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {node.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function AgentNetwork() {
  const [streaks, setStreaks] = useState<LightStreak[]>(() => generateStreaks())
  const [leaving, setLeaving] = useState<LightStreak[]>([])

  useEffect(() => {
    const id = setInterval(() => {
      setStreaks((current) => {
        setLeaving(current)
        return generateStreaks()
      })
    }, 4500)
    return () => clearInterval(id)
  }, [])

  // Prune faded-out streaks once their fade completes.
  useEffect(() => {
    if (leaving.length === 0) return
    const id = setTimeout(() => setLeaving([]), 850)
    return () => clearTimeout(id)
  }, [leaving])

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_60%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="streak-tail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139,92,246,0)" />
            <stop offset="60%" stopColor="rgba(167,139,250,0.7)" />
            <stop offset="100%" stopColor="rgba(196,181,253,0.9)" />
          </linearGradient>
        </defs>

        {leaving.map((streak) => (
          <g key={`leaving-${streak.id}`} className="streak-fade-out">
            <path
              d={streak.path}
              fill="none"
              stroke="url(#streak-tail)"
              strokeWidth="0.4"
              strokeLinecap="round"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0.9;0"
                dur={`${streak.duration}s`}
                begin={`${streak.delay}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}

        {streaks.map((streak) => (
          <g key={streak.id} className="streak-fade-in">
            <path
              d={streak.path}
              fill="none"
              stroke="url(#streak-tail)"
              strokeWidth="0.4"
              strokeLinecap="round"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0.9;0"
                dur={`${streak.duration}s`}
                begin={`${streak.delay}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {NODES.map((node, index) => (
          <AgentNode key={node.id} node={node} index={index} />
        ))}
      </div>
    </div>
  )
}

/** Pick a few random node pairs and build curved light paths between them. */
function generateStreaks(): LightStreak[] {
  const count = 4 + Math.floor(Math.random() * 3)

  return Array.from({ length: count }, (_, i) => {
    const from = NODES[Math.floor(Math.random() * NODES.length)]!
    let to = NODES[Math.floor(Math.random() * NODES.length)]!
    while (to.id === from.id) {
      to = NODES[Math.floor(Math.random() * NODES.length)]!
    }

    const midX = (from.x + to.x) / 2 + (Math.random() * 12 - 6)
    const midY = (from.y + to.y) / 2 + (Math.random() * 12 - 6)
    const path = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`

    return {
      id: `${i}-${Date.now()}`,
      path,
      duration: 1.6 + Math.random() * 1.4,
      delay: i * 0.35,
    }
  })
}
