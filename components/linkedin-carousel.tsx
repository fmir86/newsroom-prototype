"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share } from "lucide-react"
import { cn } from "@/lib/utils"

interface LinkedInPost {
  id: number
  companyName: string
  companyLogo: string
  title: string
  excerpt: string
  previewImage: string
  likes: number
  comments: number
  shares: number
  publishDate: string
}

const mockLinkedInData: LinkedInPost[] = [
  {
    id: 1,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Creating LGBTQ+ Affirming Senior Living Spaces",
    excerpt:
      "Our latest community design prioritizes LGBTQ+ inclusivity with rainbow-themed common areas, affirming care protocols, and staff trained in cultural competency for queer and transgender seniors.",
    previewImage: "/lgbtq-senior-community.png",
    likes: 1847,
    comments: 156,
    shares: 289,
    publishDate: "2024-01-15",
  },
  {
    id: 2,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Luxury Senior Living Meets Cultural Diversity",
    excerpt:
      "Introducing our premium community that celebrates cultural diversity through international cuisine, multilingual staff, and programming that honors different traditions and backgrounds.",
    previewImage: "/luxury-diverse-living.png",
    likes: 2156,
    comments: 203,
    shares: 445,
    publishDate: "2024-01-14",
  },
  {
    id: 3,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Intergenerational Living Programs Launch Success",
    excerpt:
      "Our innovative intergenerational housing model brings together seniors and younger residents, creating vibrant communities where wisdom meets energy and everyone benefits from meaningful connections.",
    previewImage: "/intergenerational-housing.png",
    likes: 3421,
    comments: 287,
    shares: 567,
    publishDate: "2024-01-13",
  },
  {
    id: 4,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Wellness-Centered Senior Living Approach",
    excerpt:
      "Our holistic wellness programs integrate mental health support, meditation spaces, fitness classes, and spa services to promote healthy aging and overall wellbeing for all residents.",
    previewImage: "/wellness-senior-living.png",
    likes: 1678,
    comments: 134,
    shares: 298,
    publishDate: "2024-01-12",
  },
  {
    id: 5,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Smart Technology Enhances Senior Independence",
    excerpt:
      "Our communities feature cutting-edge smart home technology, health monitoring systems, and virtual reality programs that help seniors maintain independence while staying connected to loved ones.",
    previewImage: "/tech-senior-living.png",
    likes: 2934,
    comments: 198,
    shares: 423,
    publishDate: "2024-01-11",
  },
  {
    id: 6,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Inclusive Design for All Abilities and Backgrounds",
    excerpt:
      "Our architectural approach embraces universal design principles, creating spaces that accommodate diverse physical abilities, cultural needs, and lifestyle preferences for truly inclusive living.",
    previewImage: "/inclusive-design-senior.png",
    likes: 1523,
    comments: 89,
    shares: 234,
    publishDate: "2024-01-10",
  },
  {
    id: 7,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "LGBTQ+ Elder Care Training Program Success",
    excerpt:
      "Our comprehensive staff training program ensures culturally competent care for LGBTQ+ seniors, creating safe spaces where all residents can age with dignity and authenticity.",
    previewImage: "/lgbtq-care-facilities.png",
    likes: 2789,
    comments: 245,
    shares: 512,
    publishDate: "2024-01-09",
  },
  {
    id: 8,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Luxury Concierge Services Transform Senior Living",
    excerpt:
      "Our five-star concierge services include personal shopping, transportation, event planning, and lifestyle management, bringing luxury hospitality standards to senior living.",
    previewImage: "/luxury-concierge-senior.png",
    likes: 1945,
    comments: 167,
    shares: 378,
    publishDate: "2024-01-08",
  },
  {
    id: 9,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Multicultural Programming Celebrates Diversity",
    excerpt:
      "Our communities host cultural festivals, language exchange programs, and traditional cooking classes that celebrate the rich diversity of our residents' backgrounds and experiences.",
    previewImage: "/multicultural-senior-centers.png",
    likes: 1634,
    comments: 112,
    shares: 267,
    publishDate: "2024-01-07",
  },
  {
    id: 10,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Age-in-Place Solutions Support Independence",
    excerpt:
      "Our home modification services and support systems help seniors remain in their homes longer, providing safety upgrades and care coordination for successful aging in place.",
    previewImage: "/age-in-place-solutions.png",
    likes: 3156,
    comments: 298,
    shares: 634,
    publishDate: "2024-01-06",
  },
  {
    id: 11,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Pet-Friendly Communities Enhance Wellbeing",
    excerpt:
      "Our pet-friendly policies and therapy animal programs recognize the important role pets play in senior wellbeing, creating communities where beloved companions are welcome.",
    previewImage: "/pet-friendly-senior-living.png",
    likes: 2467,
    comments: 189,
    shares: 445,
    publishDate: "2024-01-05",
  },
  {
    id: 12,
    companyName: "Luxury Livings",
    companyLogo: "/luxury-livings-logo.png",
    title: "Sustainable Senior Living for Eco-Conscious Residents",
    excerpt:
      "Our environmentally sustainable communities feature green building practices, renewable energy, and eco-friendly programs for residents who care about their environmental impact.",
    previewImage: "/sustainable-senior-living.png",
    likes: 2834,
    comments: 234,
    shares: 567,
    publishDate: "2024-01-04",
  },
]

interface LinkedInCarouselProps {
  columns?: 1 | 2 | 3 | 4
}

export function LinkedInCarousel({ columns = 3 }: LinkedInCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const selectedColumns = columns

  const itemsPerView = selectedColumns
  const totalPages = Math.ceil(mockLinkedInData.length / itemsPerView)
  const maxIndex = totalPages - 1

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const getCurrentPagePosts = () => {
    const startIndex = currentIndex * itemsPerView
    const endIndex = startIndex + itemsPerView
    return mockLinkedInData.slice(startIndex, endIndex)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-headline text-4xl font-black text-foreground mb-4">LinkedIn Updates</h2>
            <p className="font-body text-lg text-muted-foreground">
              Latest insights and updates from our diverse senior living communities and programs.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="font-body bg-transparent"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    currentIndex === index ? "bg-primary" : "bg-border",
                  )}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="font-body bg-transparent"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Posts Grid */}
          <div
            className={
              `grid gap-6 ` +
              (selectedColumns === 1
                ? 'grid-cols-1'
                : selectedColumns === 2
                ? 'grid-cols-2'
                : selectedColumns === 3
                ? 'grid-cols-3'
                : selectedColumns === 4
                ? 'grid-cols-4'
                : 'grid-cols-1')
            }
          >
            {getCurrentPagePosts().map((post) => (
              <Card
                key={post.id}
                className="h-full bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={post.companyLogo || "/placeholder.svg"}
                      alt={`${post.companyName} logo`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-body font-semibold text-card-foreground text-sm">{post.companyName}</h4>
                      <p className="font-body text-xs text-muted-foreground">
                        {new Date(post.publishDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={post.previewImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <h3 className="font-headline text-lg font-bold text-card-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Engagement Metrics */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span className="font-body">{formatNumber(post.likes)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span className="font-body">{formatNumber(post.comments)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share className="w-3 h-3" />
                        <span className="font-body">{formatNumber(post.shares)}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="font-body text-xs">
                      LinkedIn
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
