"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Globe, ArrowRight, Plus, Shield, Car, Ticket, Gift } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export default function MoreServicesPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const additionalServices = [
    {
      name: "Insurance Payments",
      description: "Pay for health, auto, and life insurance premiums",
      icon: Shield,
      status: "Coming Soon",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      name: "Government Services",
      description: "Pay for government fees, taxes, and official documents",
      icon: Globe,
      status: "Coming Soon",
      color: "bg-green-500/10 text-green-600",
    },
    {
      name: "Internet Subscriptions",
      description: "Renew your internet subscriptions for all ISPs",
      icon: Globe,
      status: "Available",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      name: "Transport Services",
      description: "Book and pay for bus tickets and ride-sharing services",
      icon: Car,
      status: "Coming Soon",
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      name: "Event Tickets",
      description: "Purchase tickets for concerts, movies, and events",
      icon: Ticket,
      status: "Coming Soon",
      color: "bg-pink-500/10 text-pink-600",
    },
    {
      name: "Gift Cards",
      description: "Buy gift cards for popular stores and services",
      icon: Gift,
      status: "Available",
      color: "bg-red-500/10 text-red-600",
    },
  ]

  const comingSoonFeatures = [
    "Cryptocurrency payments",
    "International money transfers",
    "Investment services",
    "Loan applications",
    "Digital banking",
    "E-commerce integrations",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 bg-gradient-to-br from-indigo-500/5 via-background to-purple-500/5 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4 bg-indigo-500/10 text-indigo-600">
                <MoreHorizontal className="w-4 h-4 mr-2" />
                Expanding Services
              </Badge>
            </motion.div>
            <motion.h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" variants={itemVariants}>
              More Digital Services Coming Soon
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground mb-8" variants={itemVariants}>
              We're constantly expanding our platform to meet all your digital service needs. Discover what's available
              now and what's coming next to make your life easier.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/sign-up">
                    Get Early Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                  Request a Service
                </Button>
              </motion.div>
            </motion.div>
            <motion.div className="relative h-64 rounded-2xl overflow-hidden" variants={itemVariants}>
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Digital services ecosystem illustration"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our growing collection of digital services
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalServices.map((service, index) => (
              <motion.div key={service.name} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.color}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <service.icon className="w-6 h-6" />
                      </motion.div>
                      <Badge
                        variant={service.status === "Available" ? "default" : "secondary"}
                        className={service.status === "Available" ? "bg-green-500" : ""}
                      >
                        {service.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className="w-full"
                        variant={service.status === "Available" ? "default" : "outline"}
                        disabled={service.status !== "Available"}
                      >
                        {service.status === "Available" ? "Use Now" : "Notify Me"}
                      </Button>
                    </motion.div>
                  </CardContent>
                  {service.status === "Coming Soon" && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-400/20 to-transparent" />
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What's Coming Next</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're working on exciting new features to enhance your digital experience
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {comingSoonFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Have a Service Request?</CardTitle>
                <CardDescription className="text-lg">
                  We value your feedback and suggestions for new services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Can't find the service you need? Let us know what digital services you'd like to see on our platform.
                  We're always looking to expand based on customer needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="text-lg px-8 py-6">
                      Submit Request
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Explore Our Services?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our platform today and be the first to access new services as they launch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/sign-up">Get Started Now</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
