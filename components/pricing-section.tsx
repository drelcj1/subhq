"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PricingSection() {
  const [selectedNetwork, setSelectedNetwork] = useState("mtn")
  const [selectedDuration, setSelectedDuration] = useState("monthly")

  const networks = [
    { id: "mtn", name: "MTN", color: "bg-yellow-500" },
    { id: "glo", name: "Glo", color: "bg-green-500" },
    { id: "airtel", name: "Airtel", color: "bg-red-500" },
    { id: "9mobile", name: "9mobile", color: "bg-emerald-500" },
  ]

  const plans = {
    mtn: {
      monthly: [
        { size: "1GB", duration: "30 days", price: "₦350", popular: false },
        { size: "2GB", duration: "30 days", price: "₦700", popular: true },
        { size: "5GB", duration: "30 days", price: "₦1,500", popular: false },
        { size: "10GB", duration: "30 days", price: "₦2,800", popular: false },
      ],
      weekly: [
        { size: "500MB", duration: "7 days", price: "₦200", popular: false },
        { size: "1GB", duration: "7 days", price: "₦350", popular: true },
        { size: "2GB", duration: "7 days", price: "₦650", popular: false },
      ],
      daily: [
        { size: "100MB", duration: "1 day", price: "₦50", popular: false },
        { size: "200MB", duration: "1 day", price: "₦100", popular: true },
        { size: "500MB", duration: "1 day", price: "₦200", popular: false },
      ],
    },
    glo: {
      monthly: [
        { size: "1GB", duration: "30 days", price: "₦300", popular: false },
        { size: "2GB", duration: "30 days", price: "₦600", popular: true },
        { size: "5GB", duration: "30 days", price: "₦1,400", popular: false },
        { size: "10GB", duration: "30 days", price: "₦2,500", popular: false },
      ],
      weekly: [
        { size: "500MB", duration: "7 days", price: "₦180", popular: false },
        { size: "1GB", duration: "7 days", price: "₦300", popular: true },
        { size: "2GB", duration: "7 days", price: "₦580", popular: false },
      ],
      daily: [
        { size: "100MB", duration: "1 day", price: "₦45", popular: false },
        { size: "200MB", duration: "1 day", price: "₦90", popular: true },
        { size: "500MB", duration: "1 day", price: "₦180", popular: false },
      ],
    },
    airtel: {
      monthly: [
        { size: "1GB", duration: "30 days", price: "₦320", popular: false },
        { size: "2GB", duration: "30 days", price: "₦650", popular: true },
        { size: "5GB", duration: "30 days", price: "₦1,450", popular: false },
        { size: "10GB", duration: "30 days", price: "₦2,700", popular: false },
      ],
      weekly: [
        { size: "500MB", duration: "7 days", price: "₦190", popular: false },
        { size: "1GB", duration: "7 days", price: "₦320", popular: true },
        { size: "2GB", duration: "7 days", price: "₦600", popular: false },
      ],
      daily: [
        { size: "100MB", duration: "1 day", price: "₦48", popular: false },
        { size: "200MB", duration: "1 day", price: "₦95", popular: true },
        { size: "500MB", duration: "1 day", price: "₦190", popular: false },
      ],
    },
    "9mobile": {
      monthly: [
        { size: "1GB", duration: "30 days", price: "₦330", popular: false },
        { size: "2GB", duration: "30 days", price: "₦680", popular: true },
        { size: "5GB", duration: "30 days", price: "₦1,480", popular: false },
        { size: "10GB", duration: "30 days", price: "₦2,750", popular: false },
      ],
      weekly: [
        { size: "500MB", duration: "7 days", price: "₦195", popular: false },
        { size: "1GB", duration: "7 days", price: "₦330", popular: true },
        { size: "2GB", duration: "7 days", price: "₦620", popular: false },
      ],
      daily: [
        { size: "100MB", duration: "1 day", price: "₦50", popular: false },
        { size: "200MB", duration: "1 day", price: "₦98", popular: true },
        { size: "500MB", duration: "1 day", price: "₦195", popular: false },
      ],
    },
  }

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Data Plans & Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our affordable data plans for all Nigerian networks
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Network Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {networks.map((network) => (
              <button
                key={network.id}
                onClick={() => setSelectedNetwork(network.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all ${
                  selectedNetwork === network.id
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className={`w-4 h-4 rounded-full ${network.color}`} />
                <span className="font-medium">{network.name}</span>
              </button>
            ))}
          </div>

          {/* Duration Tabs */}
          <Tabs value={selectedDuration} onValueChange={setSelectedDuration} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="daily">Daily</TabsTrigger>
            </TabsList>

            {["monthly", "weekly", "daily"].map((duration) => (
              <TabsContent key={duration} value={duration}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {plans[selectedNetwork as keyof typeof plans][duration as keyof typeof plans.mtn].map(
                    (plan, index) => (
                      <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                        {plan.popular && (
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">Popular</Badge>
                        )}
                        <CardHeader className="text-center">
                          <CardTitle className="text-2xl">{plan.size}</CardTitle>
                          <CardDescription>{plan.duration}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="text-3xl font-bold text-primary mb-4">{plan.price}</div>
                          <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                            Buy Now
                          </Button>
                        </CardContent>
                      </Card>
                    ),
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
