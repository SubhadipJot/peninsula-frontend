import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function HomePage() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Peninsula</CardTitle>
          <CardDescription>
            The frontend is up and running. Start building your UI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            React + Vite + TypeScript + Tailwind CSS + shadcn/ui
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
