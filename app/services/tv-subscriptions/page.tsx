"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tv, Zap, Shield, Clock, CheckCircle, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export default function TvSubscriptionsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [providersRef, providersInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const tvProviders = [
    {
      name: "DSTV",
      logo: "/placeholder.svg?height=60&width=120",
      plans: [
        { name: "Padi", price: "₦2,150", channels: "40+ channels" },
        { name: "Yanga", price: "₦2,950", channels: "60+ channels" },
        { name: "Confam", price: "₦5,300", channels: "85+ channels" },
        { name: "Compact", price: "₦9,000", channels: "120+ channels" },
        { name: "Compact Plus", price: "₦14,250", channels: "145+ channels" },
        { name: "Premium", price: "₦21,000", channels: "170+ channels" },
      ],
      popular: true,
    },
    {
      name: "GOtv",
      logo: "/placeholder.svg?height=60&width=120",
      plans: [
        { name: "Lite", price: "₦410", channels: "15+ channels" },
        { name: "Jinja", price: "₦1,900", channels: "45+ channels" },
        { name: "Jolli", price: "₦2,800", channels: "65+ channels" },
        { name: "Max", price: "₦4,150", channels: "85+ channels" },
      ],
      popular: false,
    },
    {
      name: "Startimes",
      logo: "/placeholder.svg?height=60&width=120",
      plans: [
        { name: "Nova", price: "₦900", channels: "35+ channels" },
        { name: "Basic", price: "₦1,700", channels: "50+ channels" },
        { name: "Smart", price: "₦2,500", channels: "65+ channels" },
        { name: "Classic", price: "₦2,900", channels: "75+ channels" },
        { name: "Super", price: "₦4,200", channels: "95+ channels" },
      ],
      popular: false,
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Your subscription is activated immediately after payment",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "All transactions are protected with advanced security",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Renew your subscription anytime, even on holidays",
    },
    {
      icon: CheckCircle,
      title: "All Providers",
      description: "Support for DSTV, GOtv, Startimes, and more",
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
        className="py-20 bg-gradient-to-br from-purple-500/5 via-background to-pink-500/5 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], x: [-10, 10, -10] }}
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
              <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-600">
                <Tv className="w-4 h-4 mr-2" />
                TV Subscription Renewal
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Renew Your TV Subscriptions Instantly
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Never miss your favorite shows again. Renew DSTV, GOtv, Startimes subscriptions with instant activation
                and the best rates in Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/sign-up">
                      Renew Subscription
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                    View Plans
                  </Button>
                </motion.div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 50,000+ subscribers</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="TV screen showing entertainment content with subscription interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm font-medium">Recent Renewal</p>
                  <p className="text-xs text-muted-foreground">DSTV Compact - 30 days</p>
                  <div className="flex items-center mt-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-xs text-green-600">Activated successfully</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our TV Service?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience hassle-free TV subscription renewals with instant activation
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
                      className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="w-8 h-8 text-purple-500" />
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

      {/* TV Providers Section */}
      <section ref={providersRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={providersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Supported TV Providers</h2>
            <p className="text-xl text-muted-foreground">Choose from popular TV subscription services</p>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={providersInView ? "visible" : "hidden"}
          >
            {tvProviders.map((provider, providerIndex) => (
              <motion.div key={provider.name} variants={itemVariants}>
                <Card className={`${provider.popular ? "border-primary shadow-lg" : ""}`}>
                  <CardHeader className="text-center">
                    {provider.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                    )}
                    <div className="flex items-center justify-center mb-4">
                      <Image
                        src={provider.logo || "/placeholder.svg"}
                        alt={`${provider.name} logo`}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-2xl">{provider.name}</CardTitle>
                    <CardDescription>Premium entertainment packages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {provider.plans.map((plan, planIndex) => (
                        <motion.div
                          key={plan.name}
                          className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h4 className="font-semibold text-lg mb-2">{plan.name}</h4>
                          <p className="text-2xl font-bold text-primary mb-2">{plan.price}</p>
                          <p className="text-sm text-muted-foreground mb-4">{plan.channels}</p>
                          <Button size="sm" className="w-full">
                            Subscribe
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Renew Your Subscription?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands who trust SubHQ for their TV subscription renewals
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
