import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background p-6">
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
    </main>
  )
}

export default App
