"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Shield, Clock, CheckCircle, ArrowRight, BookOpen, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export default function EducationPinsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const educationServices = [
    {
      name: "WAEC",
      fullName: "West African Examinations Council",
      services: ["Result Checker", "Scratch Card", "Certificate Verification"],
      price: "₦1,000",
      icon: BookOpen,
    },
    {
      name: "NECO",
      fullName: "National Examinations Council",
      services: ["Result Checker", "Scratch Card", "Certificate Request"],
      price: "₦1,000",
      icon: Award,
    },
    {
      name: "JAMB",
      fullName: "Joint Admissions and Matriculation Board",
      services: ["Result Checker", "UTME Registration", "Direct Entry"],
      price: "₦1,000",
      icon: GraduationCap,
    },
    {
      name: "NABTEB",
      fullName: "National Business and Technical Examinations Board",
      services: ["Result Checker", "Certificate Verification"],
      price: "₦1,000",
      icon: BookOpen,
    },
  ]

  const features = [
    {
      icon: CheckCircle,
      title: "Instant Delivery",
      description: "Get your education pins delivered instantly via SMS and email",
    },
    {
      icon: Shield,
      title: "100% Authentic",
      description: "All pins are sourced directly from official examination bodies",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Purchase education pins anytime, even during exam periods",
    },
    {
      icon: GraduationCap,
      title: "All Exam Bodies",
      description: "Support for WAEC, NECO, JAMB, NABTEB and more",
    },
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
        className="py-20 bg-gradient-to-br from-green-500/5 via-background to-blue-500/5 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4 bg-green-500/10 text-green-600">
                <GraduationCap className="w-4 h-4 mr-2" />
                Education Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Buy Education Pins & Result Checkers
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access your exam results instantly with authentic WAEC, NECO, JAMB result checkers and education pins.
                Fast, secure, and reliable service for all Nigerian students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/sign-up">
                      Buy Pins Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                    View Services
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Student checking exam results on mobile device"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm font-medium">Recent Purchase</p>
                  <p className="text-xs text-muted-foreground">WAEC Result Checker - 2024</p>
                  <div className="flex items-center mt-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-xs text-green-600">Delivered successfully</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Education Service?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get authentic education pins with instant delivery and 100% reliability
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Available Education Services</h2>
            <p className="text-xl text-muted-foreground">Access all major Nigerian examination body services</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationServices.map((service, index) => (
              <motion.div key={service.name} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <service.icon className="w-8 h-8 text-green-500" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-2xl">{service.name}</CardTitle>
                        <CardDescription>{service.fullName}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Available Services:</h4>
                        <ul className="space-y-1">
                          {service.services.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button>Purchase Now</Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Access Your Results?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who trust SubHQ for their education pin needs
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
