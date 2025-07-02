"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Wifi, Tv, Zap, GraduationCap, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export function EnhancedServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Smartphone,
      title: "Buy Airtime",
      description: "Instant top-up for all Nigerian networks - MTN, Glo, Airtel, and 9mobile",
      features: ["Instant delivery", "All networks supported", "Best rates guaranteed"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-500/10 to-blue-600/10",
      href: "/services/airtime",
    },
    {
      icon: Wifi,
      title: "Buy Data",
      description: "Affordable data bundles with flexible plans for all your internet needs",
      features: ["Flexible plans", "Affordable rates", "Instant activation"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-green-500/10 to-green-600/10",
      href: "/services/data",
    },
    {
      icon: Tv,
      title: "Pay TV Subscriptions",
      description: "Renew your DSTV, GOtv, Startimes subscriptions with ease",
      features: ["DSTV, GOtv, Startimes", "Instant activation", "No extra charges"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-500/10 to-purple-600/10",
      href: "/services/tv-subscriptions",
    },
    {
      icon: Zap,
      title: "Utility Bills",
      description: "Pay electricity bills and other utility services conveniently",
      features: ["All DISCOs supported", "Instant payment", "Payment history"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-yellow-500/10 to-yellow-600/10",
      href: "/services/utility-bills",
    },
    {
      icon: GraduationCap,
      title: "Education Pins",
      description: "Purchase WAEC, NECO, JAMB result checkers and other educational services",
      features: ["WAEC, NECO, JAMB", "Instant delivery", "Secure transactions"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-red-500/10 to-red-600/10",
      href: "/services/education-pins",
    },
    {
      icon: MoreHorizontal,
      title: "And More",
      description: "Growing collection of digital services to meet all your needs",
      features: ["Regular updates", "New services", "Customer requests"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-indigo-500/10 to-indigo-600/10",
      href: "/services/more-services",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Digital Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your digital lifestyle in one secure platform
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                {/* Service Image */}
                <div className="relative h-32 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} service illustration`}
                    fill
                    className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-background/90 rounded-lg flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-primary rounded-full mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: featureIndex * 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className="w-full bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      variant="outline"
                      asChild
                    >
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
