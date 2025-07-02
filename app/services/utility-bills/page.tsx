"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Clock, CheckCircle, ArrowRight, Home, Building } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export default function UtilityBillsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const discos = [
    { name: "AEDC", fullName: "Abuja Electricity Distribution Company" },
    { name: "BEDC", fullName: "Benin Electricity Distribution Company" },
    { name: "EEDC", fullName: "Enugu Electricity Distribution Company" },
    { name: "EKEDC", fullName: "Eko Electricity Distribution Company" },
    { name: "IBEDC", fullName: "Ibadan Electricity Distribution Company" },
    { name: "IKEDC", fullName: "Ikeja Electric Distribution Company" },
    { name: "JEDC", fullName: "Jos Electricity Distribution Company" },
    { name: "KAEDCO", fullName: "Kaduna Electric Distribution Company" },
    { name: "KEDCO", fullName: "Kano Electricity Distribution Company" },
    { name: "PHEDC", fullName: "Port Harcourt Electricity Distribution Company" },
  ]

  const features = [
    {
      icon: Zap,
      title: "Instant Payment",
      description: "Your electricity bill is paid instantly with immediate confirmation",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All payments are protected with bank-level security protocols",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Pay your bills anytime, anywhere, even during weekends",
    },
    {
      icon: CheckCircle,
      title: "All DISCOs Supported",
      description: "Support for all electricity distribution companies in Nigeria",
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
        className="py-20 bg-gradient-to-br from-yellow-500/5 via-background to-orange-500/5 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4 bg-yellow-500/10 text-yellow-600">
                <Zap className="w-4 h-4 mr-2" />
                Utility Bill Payment
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Pay Your Electricity Bills Instantly
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Never worry about power outages due to unpaid bills. Pay your electricity bills for all Nigerian DISCOs
                with instant confirmation and secure transactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/sign-up">
                      Pay Bills Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                    <Link href="/services">View DISCOs</Link>
                  </Button>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-card/50 backdrop-blur-sm border">
                  <Home className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-medium text-sm">Residential</p>
                    <p className="text-xs text-muted-foreground">Home bills</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-card/50 backdrop-blur-sm border">
                  <Building className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-medium text-sm">Commercial</p>
                    <p className="text-xs text-muted-foreground">Business bills</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Electricity meter and bill payment interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm font-medium">Recent Payment</p>
                  <p className="text-xs text-muted-foreground">₦5,000 - IKEDC Prepaid</p>
                  <div className="flex items-center mt-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-xs text-green-600">Payment successful</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Bill Payment Service?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the most reliable electricity bill payment service in Nigeria
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
                      className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="w-8 h-8 text-yellow-500" />
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

      {/* DISCOs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Supported Electricity Companies</h2>
            <p className="text-xl text-muted-foreground">Pay bills for all major DISCOs across Nigeria</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {discos.map((disco, index) => (
              <motion.div key={disco.name} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Zap className="w-6 h-6 text-yellow-500" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg">{disco.name}</h3>
                        <p className="text-sm text-muted-foreground">{disco.fullName}</p>
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
      <section className="py-20 bg-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Pay Your Bills?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of Nigerians who trust SubHQ for their utility bill payments
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
