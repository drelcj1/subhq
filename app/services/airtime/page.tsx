"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Zap, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export default function AirtimePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [howItWorksRef, howItWorksInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const networks = [
    { name: "MTN", color: "bg-yellow-500", discount: "2%" },
    { name: "Glo", color: "bg-green-500", discount: "3%" },
    { name: "Airtel", color: "bg-red-500", discount: "2.5%" },
    { name: "9mobile", color: "bg-emerald-500", discount: "3%" },
  ]

  const features = [
    {
      icon: Zap,
      title: "Instant Top-up",
      description: "Your airtime is delivered instantly to your phone number",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Bank-level security protects all your transactions",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Buy airtime anytime, anywhere, even on holidays",
    },
    {
      icon: CheckCircle,
      title: "Best Rates",
      description: "Get the best rates with up to 3% discount on all networks",
    },
  ]

  const steps = [
    {
      step: "1",
      title: "Select Network",
      description: "Choose your network provider (MTN, Glo, Airtel, 9mobile)",
    },
    {
      step: "2",
      title: "Enter Details",
      description: "Input phone number and amount you want to recharge",
    },
    {
      step: "3",
      title: "Make Payment",
      description: "Pay securely using your preferred payment method",
    },
    {
      step: "4",
      title: "Get Airtime",
      description: "Receive instant airtime credit on your phone",
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
        className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden"
      >
        {/* Background Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
          animate={{ x: [-10, 10, -10], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                <Smartphone className="w-4 h-4 mr-2" />
                Instant Airtime Top-up
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Buy Airtime for All Nigerian Networks
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Top up your phone instantly with the best rates in Nigeria. Support for MTN, Glo, Airtel, and 9mobile
                with up to 3% discount on every recharge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/sign-up">
                      Start Buying Airtime
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                    View Pricing
                  </Button>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {networks.map((network, index) => (
                  <motion.div
                    key={network.name}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-card/50 backdrop-blur-sm border"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-4 h-4 rounded-full ${network.color}`} />
                    <div>
                      <p className="font-medium text-sm">{network.name}</p>
                      <p className="text-xs text-muted-foreground">{network.discount} off</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Mobile phone showing airtime purchase interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm font-medium">Recent Purchase</p>
                  <p className="text-xs text-muted-foreground">₦1,000 airtime to 0803****567</p>
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
      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Airtime Service?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the fastest, most reliable airtime top-up service in Nigeria
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="w-8 h-8 text-primary" />
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

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to get airtime on your phone</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <Card className="text-center h-full">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={howItWorksInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Start Buying Airtime?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of Nigerians who trust SubHQ for their airtime needs
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
