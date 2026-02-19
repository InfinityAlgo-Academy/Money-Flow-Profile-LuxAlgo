'use client'

import { useState, useEffect } from 'react'
import { 
  Check, Zap, Shield, Clock, Star, Gift, ArrowRight, Sparkles, 
  Download, TrendingUp, AlertTriangle, ChevronRight, Play, 
  BarChart3, Activity, PieChart, Target, Award, Users, 
  CheckCircle2, Timer, Percent, BadgeDollarSign, Crown
} from 'lucide-react'

export default function Home() {
  const [orderBumpChecked, setOrderBumpChecked] = useState(true)
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 })
  const [isHovered, setIsHovered] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Auto rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const checkoutUrl = "https://infinityalgoacademy.net/checkout/?fct_cart_hash=8c264e95dcb3e46f1c91c3044f29b180"
  const freeProductUrl = "https://infinityalgoacademy.net/item/money-flow-profile-luxalgo/"

  const mainFeatures = [
    {
      icon: BarChart3,
      title: "Money Flow Analysis",
      description: "Advanced volume-weighted price analysis for institutional-grade trading signals"
    },
    {
      icon: Activity,
      title: "Real-time Profile",
      description: "Live market profile visualization showing key support and resistance zones"
    },
    {
      icon: PieChart,
      title: "Volume Distribution",
      description: "Comprehensive volume analysis across multiple timeframes"
    },
    {
      icon: Target,
      title: "Smart Entry Points",
      description: "AI-powered entry signals with optimal risk-reward ratios"
    }
  ]

  const productFeatures = [
    "Advanced Money Flow Detection",
    "LuxAlgo Premium Integration",
    "Real-time Market Profile",
    "Multi-timeframe Analysis",
    "Volume Weighted Signals",
    "Smart Zone Detection",
    "Institutional Flow Tracking",
    "Professional Support Access"
  ]

  const orderBumpFeatures = [
    "Detect Hidden RSI Divergences",
    "Premium Analysis Tools",
    "Early Reversal Signals",
    "Multi-Asset Compatibility"
  ]

  const testimonials = [
    {
      name: "Michael R.",
      role: "Professional Trader",
      text: "The Money Flow Profile completely transformed my trading. I can now see where the big players are accumulating.",
      rating: 5
    },
    {
      name: "Sarah K.",
      role: "Day Trader",
      text: "Combined with the RSI Divergence indicator, this is the most powerful setup I've ever used.",
      rating: 5
    },
    {
      name: "James T.",
      role: "Swing Trader",
      text: "Finally, a tool that shows real market structure. The signals are incredibly accurate.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                InfinityAlgo Academy
              </span>
              <p className="text-xs text-slate-500">Professional Trading Tools</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-2 rounded-full border border-amber-200">
              <Timer className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-mono font-bold text-amber-700">
                {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 py-12 relative">
            {/* Limited Time Banner */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 rounded-full px-6 py-2 shadow-lg shadow-orange-500/20">
                <AlertTriangle className="w-5 h-5 text-white animate-pulse" />
                <span className="text-white font-semibold text-sm">LIMITED TIME OFFER - EXPIRES SOON</span>
                <AlertTriangle className="w-5 h-5 text-white animate-pulse" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Product Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Gift className="w-4 h-4" />
                    FREE DOWNLOAD
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                    LuxAlgo Powered
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Money Flow Profile
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    LuxAlgo Edition
                  </span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Unlock professional-grade money flow analysis with our premium LuxAlgo integration. 
                  See where institutional money is flowing and make smarter trading decisions.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2">
                  {["Volume Analysis", "Smart Zones", "Real-time Data", "Multi-TF"].map((tag, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-slate-900">FREE</span>
                  <span className="text-lg text-slate-400 line-through">$97.00</span>
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
                    100% OFF
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">4.9</div>
                    <div className="flex justify-center gap-0.5 my-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">Rating</div>
                  </div>
                  <div className="w-px h-12 bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">15K+</div>
                    <div className="text-xs text-slate-500 mt-1">Downloads</div>
                  </div>
                  <div className="w-px h-12 bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">30 Days</div>
                    <div className="text-xs text-slate-500 mt-1">Guarantee</div>
                  </div>
                </div>
              </div>

              {/* Right - Visual */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-200 p-8 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Money Flow Profile</h3>
                      <p className="text-sm text-slate-500">LuxAlgo Integration</p>
                    </div>
                  </div>

                  {/* Animated Features */}
                  <div className="space-y-3">
                    {mainFeatures.map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <div 
                          key={index}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                            activeFeature === index 
                              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200' 
                              : 'bg-slate-50'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            activeFeature === index 
                              ? 'bg-gradient-to-br from-blue-500 to-indigo-600' 
                              : 'bg-slate-200'
                          }`}>
                            <Icon className={`w-5 h-5 ${activeFeature === index ? 'text-white' : 'text-slate-500'}`} />
                          </div>
                          <div className="flex-1">
                            <p className={`font-semibold transition-all ${activeFeature === index ? 'text-slate-900' : 'text-slate-600'}`}>
                              {feature.title}
                            </p>
                            <p className="text-xs text-slate-500">{feature.description}</p>
                          </div>
                          {activeFeature === index && (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                POWERFUL FEATURES
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-4">
                Everything You Need for Smart Trading
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {productFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-medium text-slate-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checkout Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white" id="checkout">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                CHECKOUT
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-4">
                Complete Your Order
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Order Summary */}
              <div className="lg:col-span-3 space-y-6">
                {/* Free Product Card */}
                <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Gift className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Money Flow Profile LuxAlgo</h3>
                          <p className="text-green-100 text-sm">Your Free Product</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">FREE</p>
                        <p className="text-green-200 text-sm line-through">$97.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Full commercial license included
                    </div>
                  </div>
                </div>

                {/* Order Bump */}
                <div 
                  className={`relative bg-white rounded-2xl shadow-lg shadow-slate-200/50 border-2 overflow-hidden transition-all duration-300 ${
                    orderBumpChecked ? 'border-indigo-500 ring-4 ring-indigo-500/10' : 'border-slate-200'
                  }`}
                >
                  {/* Discount Badge */}
                  <div className="absolute -right-10 top-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-10 py-1 rotate-45 shadow-lg">
                    75% OFF
                  </div>

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            InfinityRSI Divergence V6.2
                          </h3>
                          <Sparkles className="w-4 h-4 text-amber-500" />
                        </div>
                        <p className="text-sm text-slate-500">
                          Upgrade your analysis with this powerful indicator
                        </p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-3 mb-5 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-slate-900">$12.50</span>
                        <span className="text-lg text-slate-400 line-through">$50.00</span>
                      </div>
                      <div className="flex-1" />
                      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <BadgeDollarSign className="w-4 h-4" />
                        Save $37.50
                      </span>
                    </div>

                    {/* Checkbox */}
                    <label className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                      orderBumpChecked ? 'bg-indigo-50 border-2 border-indigo-200' : 'bg-slate-50 hover:bg-slate-100 border-2 border-transparent'
                    }`}>
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={orderBumpChecked}
                          onChange={(e) => setOrderBumpChecked(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          orderBumpChecked 
                            ? 'bg-indigo-600 border-indigo-600' 
                            : 'border-slate-300 bg-white'
                        }`}>
                          {orderBumpChecked && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-slate-800 block">
                          Yes! Upgrade my analysis with the InfinityRSI Divergence V6.2!
                        </span>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          For a limited time, add this powerful indicator to your toolkit for <strong className="text-indigo-600">$12.50 ONLY</strong> (Original Price: $50.00). Don&apos;t miss this 75% discount - it won&apos;t be available once you leave this page.
                        </p>
                      </div>
                    </label>

                    {/* Features */}
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {orderBumpFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 p-2 rounded-lg">
                          <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Zap className="w-3 h-3 text-indigo-600" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    What Traders Say
                  </h3>
                  <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="font-semibold text-sm text-slate-800">{testimonial.name}</span>
                          <span className="text-xs text-slate-500">{testimonial.role}</span>
                        </div>
                        <p className="text-sm text-slate-600">{testimonial.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Total & CTA */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden sticky top-24">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-5 text-white">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Order Summary
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="p-5 border-b border-slate-200">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600">Money Flow Profile</span>
                      <span className="font-semibold text-green-600">FREE</span>
                    </div>
                    {orderBumpChecked && (
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-600">RSI Divergence V6.2</span>
                        <span className="font-semibold text-slate-800">$12.50</span>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="p-5 border-b border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-slate-900">Total Today</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {orderBumpChecked ? '$12.50' : '$0.00'}
                      </span>
                    </div>
                    {orderBumpChecked && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                        <Percent className="w-4 h-4" />
                        You&apos;re saving $37.50!
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="p-5">
                    <a
                      href={checkoutUrl}
                      className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        isHovered
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl shadow-indigo-500/30 scale-[1.02]'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25'
                      } text-white`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Gift className="w-5 h-5" />
                      {orderBumpChecked ? 'Complete My Order' : 'Get It FREE Now'}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="text-center text-sm text-slate-500 mt-3 flex items-center justify-center gap-1">
                      <Download className="w-4 h-4" />
                      Instant download after checkout
                    </p>
                  </div>

                  {/* Payment Methods */}
                  <div className="px-5 pb-5">
                    <div className="flex items-center justify-center gap-4 py-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center gap-2">
                        <svg className="w-12 h-7" viewBox="0 0 48 28" fill="none">
                          <rect width="48" height="28" rx="4" fill="#635BFF"/>
                          <path d="M24.5 19.5c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5-5.5 2.5-5.5 5.5 2.5 5.5 5.5 5.5z" fill="#fff"/>
                          <path d="M32 9v11h3V9h-3zm-12 0v11h3V9h-3zm-7 0v11h3V9h-3z" fill="#fff"/>
                        </svg>
                      </div>
                      <div className="w-px h-6 bg-slate-300" />
                      <div className="flex items-center gap-2">
                        <svg className="w-12 h-7" viewBox="0 0 48 28" fill="none">
                          <rect width="48" height="28" rx="4" fill="#003087"/>
                          <path d="M12.5 19h-2.5l1.5-10h2.5l-1.5 10zm8.2-9.7c-.5-.2-1.2-.4-2.2-.4-2.5 0-4.2 1.3-4.2 3.2 0 1.4 1.2 2.2 2.2 2.6 1 .5 1.3.8 1.3 1.2 0 .6-.8 1-1.5 1-1 0-1.5-.2-2.4-.5l-.3-.1-.4 2.2c.6.3 1.7.5 2.9.5 2.6 0 4.3-1.3 4.3-3.2 0-1.1-.6-1.9-2-2.5-.8-.4-1.4-.7-1.4-1.2 0-.4.5-.8 1.5-.8.8 0 1.5.2 2 .4l.2.1.4-2.3zm6.3-.3h-1.8c-.6 0-1 .2-1.3.7l-3.5 8.3h2.5l.5-1.4h3l.3 1.4h2.2l-1.9-9zm-3 5.8c.2-.5 1-2.6 1-2.6l.3.7.6 1.9h-1.9z" fill="#fff"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 mt-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-green-600" />
                        Secure Payment
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Instant Access
                      </span>
                    </div>
                  </div>

                  {/* Guarantee */}
                  <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800">30-Day Money Back Guarantee</h4>
                        <p className="text-sm text-green-700 mt-1">
                          Not satisfied? Get a full refund, no questions asked.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Links Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                EXPLORE MORE
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-4">
                Visit Our Store
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="https://infinityalgoacademy.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  InfinityAlgo Store
                </h3>
                <p className="text-sm text-slate-500 mt-1">Browse all premium trading tools</p>
                <div className="flex items-center gap-1 text-blue-600 text-sm mt-3 font-medium">
                  Visit Store <ChevronRight className="w-4 h-4" />
                </div>
              </a>

              <a 
                href={freeProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-green-300 hover:shadow-xl hover:shadow-green-500/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-green-600 transition-colors">
                  Product Page
                </h3>
                <p className="text-sm text-slate-500 mt-1">View full product details</p>
                <div className="flex items-center gap-1 text-green-600 text-sm mt-3 font-medium">
                  View Details <ChevronRight className="w-4 h-4" />
                </div>
              </a>

              <a 
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                  Direct Checkout
                </h3>
                <p className="text-sm text-slate-500 mt-1">Skip directly to purchase</p>
                <div className="flex items-center gap-1 text-purple-600 text-sm mt-3 font-medium">
                  Checkout Now <ChevronRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white block">InfinityAlgo Academy</span>
                <span className="text-xs">Professional Trading Tools</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="https://infinityalgoacademy.net/" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="https://infinityalgoacademy.net/" className="hover:text-white transition-colors">
                Products
              </a>
              <a href="https://infinityalgoacademy.net/" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} InfinityAlgo Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
