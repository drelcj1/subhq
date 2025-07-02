"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Zap, Shield, Clock, ArrowRight, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function DataPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [plansRef, plansInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedNetwork, setSelectedNetwork] = useState("mtn")

  const networks = [
    { id: "mtn", name: "MTN", color: "bg-yellow-500" },
    { id: "glo", name: "Glo", color: "bg-green-500" },
    { id: "airtel", name: "Airtel", color: "bg-red-500" },
    { id: "9mobile", name: "9mobile", color: "bg-emerald-500" },
  ]

  const dataPlans = {
    mtn: [
      { size: "500MB", duration: "30 days", price: "₦250", popular: false },
      { size: "1GB", duration: "30 days", price: "₦350", popular: true },
      { size: "2GB", duration: "30 days", price: "₦700", popular: false },
      { size: "5GB", duration: "30 days", price: "₦1,500", popular: false },
      { size: "10GB", duration: "30 days", price: "₦2,800", popular: false },
      { size: "20GB", duration: "30 days", price: "₦5,000", popular: false },
    ],
    glo: [
      { size: "500MB", duration: "30 days", price: "₦200", popular: false },
      { size: "1GB", duration: "30 days", price: "₦300", popular: true },
      { size: "2GB", duration: "30 days", price: "₦600", popular: false },
      { size: "5GB", duration: "30 days", price: "₦1,400", popular: false },
      { size: "10GB", duration: "30 days", price: "₦2,500", popular: false },
      { size: "20GB", duration: "30 days", price: "₦4,500", popular: false },
    ],
    airtel: [
      { size: "500MB", duration: "30 days", price: "₦230", popular: false },
      { size: "1GB", duration: "30 days", price: "₦320", popular: true },
      { size: "2GB", duration: "30 days", price: "₦650", popular: false },
      { size: "5GB", duration: "30 days", price: "₦1,450", popular: false },
      { size: "10GB", duration: "30 days", price: "₦2,700", popular: false },
      { size: "20GB", duration: "30 days", price: "₦4,800", popular: false },
    ],
    "9mobile": [
      { size: "500MB", duration: "30 days", price: "₦240", popular: false },
      { size: "1GB", duration: "30 days", price: "₦330", popular: true },
      { size: "2GB", duration: "30 days", price: "₦680", popular: false },
      { size: "5GB", duration: "30 days", price: "₦1,480", popular: false },
      { size: "10GB", duration: "30 days", price: "₦2,750", popular: false },
      { size: "20GB", duration: "30 days", price: "₦4,900", popular: false },
    ],
  }

  const features = [
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Your data bundle is activated immediately after payment",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All payments are protected with bank-level security",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Buy data anytime, day or night, including weekends",
    },
    {
      icon: Smartphone,
      title: "All Networks",
      description: "Support for MTN, Glo, Airtel, and 9mobile networks",
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
        className="py-20 bg-gradient-to-br from-blue-500/5 via-background to-green-500/5 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-600">
                <Wifi className="w-4 h-4 mr-2" />
                Affordable Data Bundles
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Buy Data Bundles at the Best Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get affordable data bundles for all Nigerian networks. Flexible plans, instant activation, and the best
                prices guaranteed. Stay connected with SubHQ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/sign-up">
                      Buy Data Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                    Compare Plans
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Mobile phone showing data bundle purchase interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
                <motion.div
                  className="absolute top-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm font-medium">Active Data Plan</p>
                  <p className="text-xs text-muted-foreground">2GB - 28 days remaining</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <motion.div
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={heroInView ? { width: "65%" } : { width: 0 }}
                      transition={{ delay: 1, duration: 1 }}
                    />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Data Service?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the best data deals with instant activation and reliable service
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
                      className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="w-8 h-8 text-blue-500" />
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

      {/* Data Plans Section */}
      <section ref={plansRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Data Plans & Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the perfect data plan for your needs</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Network Selection */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {networks.map((network) => (
                <motion.button
                  key={network.id}
                  onClick={() => setSelectedNetwork(network.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all ${
                    selectedNetwork === network.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-4 h-4 rounded-full ${network.color}`} />
                  <span className="font-medium">{network.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Data Plans Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={plansInView ? "visible" : "hidden"}
            >
              {dataPlans[selectedNetwork as keyof typeof dataPlans].map((plan, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">Popular</Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.size}</CardTitle>
                      <CardDescription>{plan.duration}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-primary mb-4">{plan.price}</div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          Buy Now
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Get Connected?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of Nigerians who trust SubHQ for affordable data bundles
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
