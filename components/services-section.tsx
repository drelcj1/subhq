import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Wifi, Tv, Zap, GraduationCap, MoreHorizontal } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: "Buy Airtime",
      description: "Instant top-up for all Nigerian networks - MTN, Glo, Airtel, and 9mobile",
      features: ["Instant delivery", "All networks supported", "Best rates guaranteed"],
    },
    {
      icon: Wifi,
      title: "Buy Data",
      description: "Affordable data bundles with flexible plans for all your internet needs",
      features: ["Flexible plans", "Affordable rates", "Instant activation"],
    },
    {
      icon: Tv,
      title: "Pay TV Subscriptions",
      description: "Renew your DSTV, GOtv, Startimes subscriptions with ease",
      features: ["DSTV, GOtv, Startimes", "Instant activation", "No extra charges"],
    },
    {
      icon: Zap,
      title: "Utility Bills",
      description: "Pay electricity bills and other utility services conveniently",
      features: ["All DISCOs supported", "Instant payment", "Payment history"],
    },
    {
      icon: GraduationCap,
      title: "Education Pins",
      description: "Purchase WAEC, NECO, JAMB result checkers and other educational services",
      features: ["WAEC, NECO, JAMB", "Instant delivery", "Secure transactions"],
    },
    {
      icon: MoreHorizontal,
      title: "And More",
      description: "Growing collection of digital services to meet all your needs",
      features: ["Regular updates", "New services", "Customer requests"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Digital Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your digital lifestyle in one secure platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
