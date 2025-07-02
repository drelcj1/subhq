"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Shield, Award, Globe, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function EnhancedAboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Happy Customers",
      description: "Trusted by Nigerians nationwide",
      color: "text-blue-500",
    },
    {
      icon: Clock,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service you can count on",
      color: "text-green-500",
    },
    {
      icon: Shield,
      value: "24/7",
      label: "Support",
      description: "Always here when you need us",
      color: "text-purple-500",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "Best Digital Platform 2023",
      description: "Recognized for excellence in digital payments",
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Serving all 36 states in Nigeria",
    },
    {
      icon: TrendingUp,
      title: "Growing Fast",
      description: "500% growth in the last year",
    },
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

  const countUpVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About SubHQ</h2>
            <p className="text-xl text-muted-foreground">Nigeria's most trusted digital payment platform</p>
          </motion.div>

          {/* Stats Section */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={containerVariants}>
            {stats.map((stat, index) => (
              <motion.div key={index} variants={countUpVariants}>
                <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-0">
                  <CardContent className="pt-6">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </motion.div>
                    <motion.div
                      className="text-3xl font-bold text-foreground mb-2"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                    <p className="text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Story Section */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                At SubHQ, we're committed to making digital payments simple, secure, and accessible for every Nigerian.
                Our platform bridges the gap between traditional payment methods and modern digital services, providing
                a seamless experience for all your digital needs.
              </p>
              <p className="text-lg text-muted-foreground">
                From buying airtime and data to paying bills and accessing educational services, we're here to empower
                Nigerians with the tools they need to thrive in the digital economy.
              </p>
            </div>
            <motion.div
              className="relative h-80 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="SubHQ team working in modern office environment in Lagos, Nigeria"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
