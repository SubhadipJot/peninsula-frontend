import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ApplicationsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Applications</h1>
      <Card>
        <CardHeader>
          <CardTitle>No applications yet</CardTitle>
          <CardDescription>
            Matched and submitted applications will appear here.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
