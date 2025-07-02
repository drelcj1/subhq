"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Clock, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function EnhancedHeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    { icon: Shield, text: "Secure Payments" },
    { icon: Zap, text: "Instant Processing" },
    { icon: Clock, text: "24/7 Support" },
    { icon: Star, text: "Best Rates" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="relative h-full">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Nigerian digital payment platform showing mobile phone with payment interface"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="(max-width: 1024px) 0px, 50vw"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-l from-transparent to-background/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto lg:text-left lg:max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              🇳🇬 Trusted by 100,000+ Nigerians
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={itemVariants}
          >
            Nigeria's #1 Digital{" "}
            <motion.span className="text-primary inline-block" animate={pulseAnimation}>
              Payment Platform
            </motion.span>
          </motion.h1>

          <motion.p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0" variants={itemVariants}>
            Buy airtime, data bundles, pay TV subscriptions, utility bills, and access educational services instantly.
            Experience the fastest, most secure digital payment platform in Nigeria.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-lg px-8 py-6 group" asChild>
                <Link href="/sign-up">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm">
                View Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto lg:mx-0"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2 group"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
