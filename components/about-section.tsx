import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Shield } from "lucide-react"

export function AboutSection() {
  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Happy Customers",
      description: "Trusted by Nigerians nationwide",
    },
    {
      icon: Clock,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service you can count on",
    },
    {
      icon: Shield,
      value: "24/7",
      label: "Support",
      description: "Always here when you need us",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About SubHQ</h2>
            <p className="text-xl text-muted-foreground">Nigeria's most trusted digital payment platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              At SubHQ, we're committed to making digital payments simple, secure, and accessible for every Nigerian.
              Our platform bridges the gap between traditional payment methods and modern digital services, providing a
              seamless experience for all your digital needs.
            </p>
            <p className="text-lg text-muted-foreground">
              From buying airtime and data to paying bills and accessing educational services, we're here to empower
              Nigerians with the tools they need to thrive in the digital economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
