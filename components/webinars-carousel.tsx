"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, Clock, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface Webinar {
  id: number
  title: string
  description: string
  previewImage: string
  date: string
  time: string
  duration: string
  attendees: number
  speaker: string
  speakerTitle: string
  status: "upcoming" | "live" | "recorded"
  registrationUrl: string
}

const mockWebinarData: Webinar[] = [
  {
    id: 1,
    title: "Creating LGBTQ+ Affirming Senior Living Communities",
    description:
      "Learn how to design and implement LGBTQ+-affirming policies, staff training programs, and inclusive environments that support aging queer and transgender adults in senior living settings.",
    previewImage: "/lgbtq-senior-community.png",
    date: "2024-02-15",
    time: "2:00 PM EST",
    duration: "60 min",
    attendees: 1247,
    speaker: "Dr. Sarah Chen",
    speakerTitle: "LGBTQ+ Elder Care Specialist",
    status: "upcoming",
    registrationUrl: "#",
  },
  {
    id: 2,
    title: "Luxury Senior Living: Balancing Amenities with Accessibility",
    description:
      "Discover how high-end senior communities can provide luxury amenities while maintaining accessibility and inclusivity for residents with diverse needs and backgrounds.",
    previewImage: "/luxury-diverse-living.png",
    date: "2024-02-20",
    time: "3:00 PM EST",
    duration: "45 min",
    attendees: 892,
    speaker: "Michael Rodriguez",
    speakerTitle: "Luxury Senior Living Director",
    status: "upcoming",
    registrationUrl: "#",
  },
  {
    id: 3,
    title: "Intergenerational Housing: Building Vibrant Communities",
    description:
      "Explore innovative housing models that bring together seniors and younger residents, creating mutually beneficial relationships and vibrant, supportive communities.",
    previewImage: "/intergenerational-housing.png",
    date: "2024-02-25",
    time: "1:00 PM EST",
    duration: "75 min",
    attendees: 1534,
    speaker: "Dr. Emily Watson",
    speakerTitle: "Community Development Expert",
    status: "upcoming",
    registrationUrl: "#",
  },
  {
    id: 4,
    title: "Wellness-Centered Approaches to Senior Living",
    description:
      "Learn about holistic wellness programs that integrate mental health support, physical fitness, and social engagement to promote healthy aging and quality of life.",
    previewImage: "/wellness-senior-living.png",
    date: "2024-01-30",
    time: "2:30 PM EST",
    duration: "50 min",
    attendees: 967,
    speaker: "Dr. James Liu",
    speakerTitle: "Senior Wellness Specialist",
    status: "recorded",
    registrationUrl: "#",
  },
  {
    id: 5,
    title: "Technology Integration in Senior Living Communities",
    description:
      "Discover how smart home technology, health monitoring systems, and digital connectivity can enhance independence and safety for seniors while maintaining their dignity.",
    previewImage: "/tech-senior-living.png",
    date: "2024-01-25",
    time: "4:00 PM EST",
    duration: "65 min",
    attendees: 1123,
    speaker: "Anna Kowalski",
    speakerTitle: "Senior Living Technology Director",
    status: "recorded",
    registrationUrl: "#",
  },
  {
    id: 6,
    title: "Inclusive Design Principles for Senior Housing",
    description:
      "Understand how universal design principles can create senior living spaces that accommodate diverse physical abilities, cultural needs, and lifestyle preferences.",
    previewImage: "/inclusive-design-senior.png",
    date: "2024-01-20",
    time: "11:00 AM EST",
    duration: "55 min",
    attendees: 789,
    speaker: "Robert Kim",
    speakerTitle: "Inclusive Design Architect",
    status: "recorded",
    registrationUrl: "#",
  },
  {
    id: 7,
    title: "Cultural Competency in Senior Care Services",
    description:
      "Explore strategies for providing culturally competent care that honors diverse backgrounds, traditions, and values in senior living and healthcare settings.",
    previewImage: "/multicultural-senior-centers.png",
    date: "2024-03-05",
    time: "2:00 PM EST",
    duration: "70 min",
    attendees: 1456,
    speaker: "Dr. Lisa Thompson",
    speakerTitle: "Cultural Competency Training Director",
    status: "upcoming",
    registrationUrl: "#",
  },
  {
    id: 8,
    title: "Age-in-Place Solutions and Support Systems",
    description:
      "Learn about home modification services, care coordination, and support systems that help seniors remain safely and independently in their own homes longer.",
    previewImage: "/age-in-place-solutions.png",
    date: "2024-03-10",
    time: "3:30 PM EST",
    duration: "60 min",
    attendees: 1089,
    speaker: "David Park",
    speakerTitle: "Age-in-Place Specialist",
    status: "upcoming",
    registrationUrl: "#",
  },
  {
    id: 9,
    title: "Pet-Friendly Senior Living: Policies and Benefits",
    description:
      "Discover how pet-friendly policies and therapy animal programs can enhance senior wellbeing, social connection, and overall quality of life in residential communities.",
    previewImage: "/pet-friendly-senior-living.png",
    date: "2024-03-15",
    time: "1:30 PM EST",
    duration: "45 min",
    attendees: 723,
    speaker: "Maria Gonzalez",
    speakerTitle: "Pet Therapy Program Director",
    status: "upcoming",
    registrationUrl: "#",
  },
  {
    id: 10,
    title: "LGBTQ+ Elder Care: Training and Best Practices",
    description:
      "Comprehensive training on providing affirming care for LGBTQ+ seniors, including understanding unique health needs, creating inclusive environments, and respectful communication.",
    previewImage: "/lgbtq-care-facilities.png",
    date: "2024-01-15",
    time: "2:00 PM EST",
    duration: "80 min",
    attendees: 1678,
    speaker: "Dr. Jennifer Adams",
    speakerTitle: "LGBTQ+ Elder Care Trainer",
    status: "recorded",
    registrationUrl: "#",
  },
  {
    id: 11,
    title: "Luxury Senior Living: Concierge Services and Amenities",
    description:
      "Explore how luxury senior communities can provide five-star amenities, concierge services, and personalized care while maintaining accessibility and inclusivity.",
    previewImage: "/luxury-concierge-senior.png",
    date: "2024-03-20",
    time: "4:00 PM EST",
    duration: "55 min",
    attendees: 934,
    speaker: "Thomas Wilson",
    speakerTitle: "Luxury Senior Living Consultant",
    status: "upcoming",
    registrationUrl: "#",
  },
  {
    id: 12,
    title: "Sustainable Senior Living: Green Communities",
    description:
      "Learn about environmentally sustainable practices in senior living, including green building design, renewable energy, and eco-friendly programming for environmentally conscious residents.",
    previewImage: "/sustainable-senior-living.png",
    date: "2024-03-25",
    time: "1:00 PM EST",
    duration: "50 min",
    attendees: 1267,
    speaker: "Dr. Rachel Brown",
    speakerTitle: "Sustainable Living Consultant",
    status: "upcoming",
    registrationUrl: "#",
  },
]

interface WebinarsCarouselProps {
  columns?: 1 | 2 | 3 | 4
}

export function WebinarsCarousel({ columns = 3 }: WebinarsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const selectedColumns = columns

  const itemsPerView = selectedColumns
  const totalPages = Math.ceil(mockWebinarData.length / itemsPerView)
  const maxIndex = totalPages - 1

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const getCurrentPageWebinars = () => {
    const startIndex = currentIndex * itemsPerView
    const endIndex = startIndex + itemsPerView
    return mockWebinarData.slice(startIndex, endIndex)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "live":
        return "bg-red-100 text-red-800 border-red-200"
      case "recorded":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-headline text-4xl font-black text-foreground mb-4">Upcoming Webinars</h2>
            <p className="font-body text-lg text-muted-foreground">
              Join our expert-led webinars on senior living, LGBTQ+ affirming care, and diverse community development.
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

          {/* Webinars Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${selectedColumns} gap-6`}>
            {getCurrentPageWebinars().map((webinar) => (
              <Card
                key={webinar.id}
                className="h-full bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img
                      src={webinar.previewImage || "/placeholder.svg"}
                      alt={webinar.title}
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={cn("font-body text-xs capitalize", getStatusColor(webinar.status))}>
                        {webinar.status}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="font-headline text-lg font-bold text-card-foreground mb-2 line-clamp-2">
                    {webinar.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {webinar.description}
                  </p>

                  {/* Speaker Info */}
                  <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                    <p className="font-body text-sm font-semibold text-card-foreground">{webinar.speaker}</p>
                    <p className="font-body text-xs text-muted-foreground">{webinar.speakerTitle}</p>
                  </div>

                  {/* Webinar Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span className="font-body">
                        {new Date(webinar.date).toLocaleDateString()} at {webinar.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span className="font-body">{webinar.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span className="font-body">{formatNumber(webinar.attendees)} registered</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full font-body bg-yellow-500 hover:bg-yellow-600 text-black" size="sm">
                    {webinar.status === "recorded" ? "Watch Recording" : "Register Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
