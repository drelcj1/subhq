"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function EnhancedContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Contact background showing Lagos cityscape"
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/50 to-secondary/5" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary" />
                    Send us a message
                  </CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                            />
                          </motion.div>
                          <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                            />
                          </motion.div>
                        </div>
                        <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </motion.div>
                        <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button type="submit" className="w-full relative overflow-hidden" disabled={isSubmitting}>
                            <AnimatePresence mode="wait">
                              {isSubmitting ? (
                                <motion.div
                                  key="loading"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="flex items-center gap-2"
                                >
                                  <motion.div
                                    className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                  />
                                  Sending...
                                </motion.div>
                              ) : (
                                <motion.span
                                  key="send"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  Send Message
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </Button>
                        </motion.div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: "Email",
                        value: "support@subhq.ng",
                        color: "text-blue-500",
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        value: "+234 800 123 4567",
                        color: "text-green-500",
                      },
                      {
                        icon: MapPin,
                        title: "Address",
                        value: "Lagos, Nigeria",
                        color: "text-red-500",
                      },
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <contact.icon className={`w-5 h-5 ${contact.color}`} />
                        </motion.div>
                        <div>
                          <p className="font-medium">{contact.title}</p>
                          <p className="text-muted-foreground">{contact.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                    <CardDescription>Stay connected on social media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      {[
                        { icon: Facebook, color: "hover:text-blue-600", label: "Facebook" },
                        { icon: Twitter, color: "hover:text-blue-400", label: "Twitter" },
                        { icon: Instagram, color: "hover:text-pink-600", label: "Instagram" },
                      ].map((social, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            size="icon"
                            className={`transition-colors ${social.color} bg-background/50 backdrop-blur-sm`}
                            aria-label={social.label}
                          >
                            <social.icon className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle>Newsletter</CardTitle>
                    <CardDescription>Subscribe to get updates on new features and offers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-2">
                      <Input placeholder="Enter your email" className="flex-1 bg-background/50 backdrop-blur-sm" />
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button>Subscribe</Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
