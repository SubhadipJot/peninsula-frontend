import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function JobsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Jobs</h1>
      <Card>
        <CardHeader>
          <CardTitle>No jobs yet</CardTitle>
          <CardDescription>
            Crawled job postings from your watchlist will appear here.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
