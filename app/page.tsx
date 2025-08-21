import { NewsroomHeader } from "@/components/newsroom-header"
import { NewsGrid } from "@/components/news-grid"
import { LinkedInCarousel } from "@/components/linkedin-carousel"
import { WebinarsCarousel } from "@/components/webinars-carousel"
import { Footer } from "@/components/footer"

export default function NewsroomPage() {
  return (
    <div className="min-h-screen bg-background">
      <NewsroomHeader />
      <main>
        <NewsGrid />
        <LinkedInCarousel columns={3} />
        <WebinarsCarousel columns={3} />
      </main>
      <Footer />
    </div>
  )
}
