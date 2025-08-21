"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NewsPost {
  id: number
  title: string
  excerpt: string
  featuredImage: string
  author: string
  publishDate: string
  category: string
  slug: string
}

const mockNewsData: NewsPost[] = [
  {
    id: 1,
    title: "LGBTQ+ Affirming Senior Living Communities See 300% Growth",
    excerpt:
      "Specialized senior living communities that provide LGBTQ+-affirming care and programming are expanding rapidly across the country, offering safe spaces for aging queer adults.",
    featuredImage: "/lgbtq-senior-community.png",
    author: "Maria Rodriguez",
    publishDate: "2024-01-15",
    category: "LGBTQ+ Living",
    slug: "lgbtq-senior-communities-growth",
  },
  {
    id: 2,
    title: "Luxury Senior Living Embraces Cultural Diversity Programs",
    excerpt:
      "High-end retirement communities are implementing comprehensive cultural diversity initiatives, celebrating different backgrounds through cuisine, arts, and community programming.",
    featuredImage: "/luxury-diverse-living.png",
    author: "Dr. James Chen",
    publishDate: "2024-01-14",
    category: "Luxury Living",
    slug: "luxury-diversity-programs",
  },
  {
    id: 3,
    title: "Intergenerational Housing Models Transform Senior Living",
    excerpt:
      "Innovative housing models that bring together seniors and younger residents are creating vibrant, supportive communities that benefit all age groups.",
    featuredImage: "/intergenerational-housing.png",
    author: "Sarah Johnson",
    publishDate: "2024-01-13",
    category: "Community Living",
    slug: "intergenerational-housing-models",
  },
  {
    id: 4,
    title: "Wellness-Focused Senior Communities Prioritize Mental Health",
    excerpt:
      "Modern senior living facilities are integrating comprehensive mental health services, meditation spaces, and wellness programs to support holistic aging.",
    featuredImage: "/wellness-senior-living.png",
    author: "Dr. Emily Watson",
    publishDate: "2024-01-12",
    category: "Wellness",
    slug: "wellness-mental-health-seniors",
  },
  {
    id: 5,
    title: "Technology Integration Enhances Senior Living Experience",
    excerpt:
      "Smart home technology, virtual reality programs, and digital health monitoring are revolutionizing how seniors live independently and stay connected.",
    featuredImage: "/tech-senior-living.png",
    author: "Michael Park",
    publishDate: "2024-01-11",
    category: "Technology",
    slug: "technology-senior-living",
  },
  {
    id: 6,
    title: "Inclusive Design Principles Shape Modern Senior Housing",
    excerpt:
      "Architects and designers are creating senior living spaces that accommodate diverse physical abilities, cultural needs, and lifestyle preferences.",
    featuredImage: "/inclusive-design-senior.png",
    author: "Lisa Thompson",
    publishDate: "2024-01-10",
    category: "Design",
    slug: "inclusive-design-senior-housing",
  },
  {
    id: 7,
    title: "LGBTQ+ Seniors Find Community in Affirming Care Facilities",
    excerpt:
      "Specialized care facilities are providing LGBTQ+-affirming services, trained staff, and supportive environments for aging queer and transgender adults.",
    featuredImage: "/lgbtq-care-facilities.png",
    author: "Dr. Alex Rivera",
    publishDate: "2024-01-09",
    category: "LGBTQ+ Care",
    slug: "lgbtq-affirming-care-facilities",
  },
  {
    id: 8,
    title: "Luxury Senior Living Offers Concierge-Style Services",
    excerpt:
      "High-end senior communities are providing five-star amenities including personal concierges, gourmet dining, and luxury transportation services.",
    featuredImage: "/luxury-concierge-senior.png",
    author: "Jennifer Adams",
    publishDate: "2024-01-08",
    category: "Luxury Services",
    slug: "luxury-concierge-senior-living",
  },
  {
    id: 9,
    title: "Multicultural Senior Centers Celebrate Diverse Traditions",
    excerpt:
      "Community centers are creating programming that honors different cultural traditions, languages, and customs to serve diverse senior populations.",
    featuredImage: "/multicultural-senior-centers.png",
    author: "Dr. Robert Kim",
    publishDate: "2024-01-07",
    category: "Cultural Diversity",
    slug: "multicultural-senior-centers",
  },
  {
    id: 10,
    title: "Age-in-Place Solutions Support Independent Senior Living",
    excerpt:
      "Home modification services and support systems are helping seniors remain in their homes longer while maintaining safety and independence.",
    featuredImage: "/age-in-place-solutions.png",
    author: "Amanda Foster",
    publishDate: "2024-01-06",
    category: "Independent Living",
    slug: "age-in-place-solutions",
  },
  {
    id: 11,
    title: "LGBTQ+ Elder Care Training Programs Expand Nationwide",
    excerpt:
      "Healthcare providers and senior living staff are receiving specialized training to provide culturally competent care for LGBTQ+ older adults.",
    featuredImage: "/lgbtq-elder-care-training.png",
    author: "Dr. Patricia Brown",
    publishDate: "2024-01-05",
    category: "Training",
    slug: "lgbtq-elder-care-training",
  },
  {
    id: 12,
    title: "Luxury Senior Living Incorporates Spa and Wellness Centers",
    excerpt:
      "Premium senior communities are adding full-service spas, fitness centers, and wellness programs to promote healthy aging and quality of life.",
    featuredImage: "/luxury-spa-senior-living.png",
    author: "David Wilson",
    publishDate: "2024-01-04",
    category: "Wellness",
    slug: "luxury-spa-wellness-seniors",
  },
  {
    id: 13,
    title: "Diverse Senior Living Communities Foster Cultural Exchange",
    excerpt:
      "Multi-ethnic senior living facilities are creating opportunities for cultural exchange, language learning, and cross-cultural friendships.",
    featuredImage: "/diverse-cultural-exchange.png",
    author: "Dr. Maria Gonzalez",
    publishDate: "2024-01-03",
    category: "Cultural Exchange",
    slug: "diverse-cultural-exchange-seniors",
  },
  {
    id: 14,
    title: "Pet-Friendly Senior Living Policies Improve Resident Wellbeing",
    excerpt:
      "Senior communities are embracing pet-friendly policies and therapy animal programs to enhance emotional wellbeing and social connection.",
    featuredImage: "/pet-friendly-senior-living.png",
    author: "Thomas Anderson",
    publishDate: "2024-01-02",
    category: "Pet-Friendly",
    slug: "pet-friendly-senior-living",
  },
  {
    id: 15,
    title: "LGBTQ+ Senior Housing Projects Receive Federal Funding",
    excerpt:
      "Government initiatives are supporting the development of LGBTQ+-affirming senior housing projects to address the unique needs of aging queer adults.",
    featuredImage: "/lgbtq-housing-funding.png",
    author: "Rachel Martinez",
    publishDate: "2024-01-01",
    category: "Housing Policy",
    slug: "lgbtq-senior-housing-funding",
  },
  {
    id: 16,
    title: "Luxury Senior Living Offers World-Class Dining Experiences",
    excerpt:
      "High-end senior communities are partnering with renowned chefs to provide restaurant-quality dining with diverse international cuisines.",
    featuredImage: "/luxury-dining-senior.png",
    author: "Christopher Lee",
    publishDate: "2023-12-31",
    category: "Dining",
    slug: "luxury-dining-senior-living",
  },
  {
    id: 17,
    title: "Inclusive Senior Living Design Accommodates All Abilities",
    excerpt:
      "Universal design principles are being implemented in senior housing to create accessible, comfortable environments for residents with varying abilities.",
    featuredImage: "/inclusive-accessible-design.png",
    author: "Dr. Angela Rodriguez",
    publishDate: "2023-12-30",
    category: "Accessibility",
    slug: "inclusive-accessible-senior-design",
  },
  {
    id: 18,
    title: "Senior Living Communities Embrace Environmental Sustainability",
    excerpt:
      "Eco-friendly senior living facilities are implementing green building practices, renewable energy, and sustainable living programs for environmentally conscious residents.",
    featuredImage: "/sustainable-senior-living.png",
    author: "Kevin Wong",
    publishDate: "2023-12-29",
    category: "Sustainability",
    slug: "sustainable-senior-living-communities",
  },
]

export function NewsGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9
  const totalPages = Math.ceil(mockNewsData.length / postsPerPage)

  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = mockNewsData.slice(startIndex, startIndex + postsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-black text-foreground mb-4">Latest Senior Living News</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest developments in senior living, LGBTQ+ affirming care, and luxury diverse
            community living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.featuredImage || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-body font-medium">
                    {post.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-xs text-muted-foreground space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span className="font-body">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span className="font-body">{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button className="w-full font-body font-medium bg-yellow-500 text-black hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 transition-all">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4 mt-12">
            <Button
              variant="outline"
              onClick={prevPage}
              disabled={currentPage === 1}
              className="font-body bg-transparent"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={cn(
                    "w-8 h-8 rounded-full font-body text-sm font-medium transition-colors",
                    currentPage === index + 1
                      ? "bg-yellow-500 text-black" // Updated pagination active state to yellow
                      : "bg-transparent text-muted-foreground hover:bg-muted",
                  )}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="font-body bg-transparent"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
