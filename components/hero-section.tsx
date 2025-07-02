import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Clock, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const features = [
    { icon: Shield, text: "Secure Payments" },
    { icon: Zap, text: "Instant Processing" },
    { icon: Clock, text: "24/7 Support" },
    { icon: Star, text: "Best Rates" },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            🇳🇬 Trusted by 100,000+ Nigerians
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nigeria's #1 Digital <span className="text-primary">Payment Platform</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Buy airtime, data bundles, pay TV subscriptions, utility bills, and access educational services instantly.
            Experience the fastest, most secure digital payment platform in Nigeria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/sign-up">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              View Services
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
