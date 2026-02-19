'use client'

import { useState, useEffect } from 'react'
import { Check, Zap, Shield, Clock, Star, Gift, ArrowRight, Sparkles, Download, TrendingUp, AlertTriangle } from 'lucide-react'

export default function Home() {
  const [orderBumpChecked, setOrderBumpChecked] = useState(true)
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 })
  const [isHovered, setIsHovered] = useState(false)

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

  const checkoutUrl = "https://infinityalgoacademy.net/checkout/?fct_cart_hash=1fcbdc7ffe6b87adbad87e142879d8a3"
  const freeProductUrl = "https://infinityalgoacademy.net/item/arbitrage-matrix-luxalgo/"

  const features = [
    "Advanced Arbitrage Detection Algorithm",
    "Real-time Market Analysis",
    "LuxAlgo Integration",
    "Multi-timeframe Support",
    "Instant Trade Signals",
    "Premium Support Access"
  ]

  const orderBumpFeatures = [
    "Detect Hidden Divergences",
    "Premium RSI Analysis",
    "Early Reversal Signals",
    "Multi-Asset Compatibility"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              InfinityAlgo Academy
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-green-600" />
              Secure Checkout
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Limited Time Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl p-4 mb-8 text-center shadow-lg shadow-orange-500/20">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <AlertTriangle className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-semibold">SPECIAL OFFER EXPIRES IN</span>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-1 flex items-center gap-2">
              <span className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-white">:</span>
              <span className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Product Info */}
          <div className="space-y-6">
            {/* Main Product Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
              {/* Product Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-white/20 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">
                    FREE DOWNLOAD
                  </span>
                  <span className="bg-green-400 text-green-900 text-xs font-semibold px-3 py-1 rounded-full">
                    $0.00
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Arbitrage Matrix LuxAlgo
                </h1>
                <p className="text-blue-100 text-sm md:text-base">
                  Professional Trading Indicator for Advanced Market Analysis
                </p>
              </div>

              {/* Product Features */}
              <div className="p-6">
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <a 
                    href={freeProductUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Download className="w-4 h-4" />
                    View Product Details
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg shadow-slate-200/30">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Trusted by 10,000+ Traders Worldwide
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">4.9</div>
                  <div className="flex justify-center gap-0.5 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-slate-500">Rating</div>
                </div>
                <div className="text-center border-x border-slate-200">
                  <div className="text-2xl font-bold text-slate-800">10K+</div>
                  <div className="text-xs text-slate-500 mt-2">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">24/7</div>
                  <div className="text-xs text-slate-500 mt-2">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Bump & Checkout */}
          <div className="space-y-6">
            {/* Order Bump */}
            <div 
              className={`relative bg-white rounded-3xl shadow-xl shadow-slate-200/50 border-2 overflow-hidden transition-all duration-300 ${
                orderBumpChecked ? 'border-indigo-500 ring-4 ring-indigo-500/10' : 'border-slate-200'
              }`}
            >
              {/* Special Offer Badge */}
              <div className="absolute -right-12 top-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-12 py-1 rotate-45 shadow-lg">
                75% OFF
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800">
                      InfinityRSI Divergence V6.2
                    </h3>
                    <p className="text-sm text-slate-500">
                      Upgrade your analysis with this powerful indicator
                    </p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-slate-800">$12.50</span>
                  <span className="text-lg text-slate-400 line-through">$50.00</span>
                  <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded-lg">
                    Save $37.50
                  </span>
                </div>

                {/* Checkbox */}
                <label className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                  orderBumpChecked ? 'bg-indigo-50' : 'bg-slate-50 hover:bg-slate-100'
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
                    <span className="font-semibold text-slate-800">
                      Yes! Upgrade my analysis with the InfinityRSI Divergence V6.2!
                    </span>
                    <p className="text-sm text-slate-500 mt-1">
                      For a limited time, add this powerful indicator to your toolkit for <strong className="text-indigo-600">$12.50 ONLY</strong> (Original Price: $50.00). Don&apos;t miss this 75% discount - it won&apos;t be available once you leave this page.
                    </p>
                  </div>
                </label>

                {/* Order Bump Features */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {orderBumpFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3 h-3 text-indigo-600" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Checkout Section */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
              {/* Price Summary */}
              <div className="p-6 border-b border-slate-200">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-600">Arbitrage Matrix LuxAlgo</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                {orderBumpChecked && (
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-600">InfinityRSI Divergence V6.2</span>
                    <span className="font-semibold text-slate-800">$12.50</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                  <span className="text-lg font-semibold text-slate-800">Total</span>
                  <span className="text-2xl font-bold text-slate-800">
                    {orderBumpChecked ? '$12.50' : '$0.00'}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="p-6">
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
                <p className="text-center text-sm text-slate-500 mt-3">
                  Instant download after checkout
                </p>
              </div>

              {/* Payment Methods */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-center gap-4 py-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-6" viewBox="0 0 40 24" fill="none">
                      <rect width="40" height="24" rx="4" fill="#635BFF"/>
                      <path d="M20.5 16.5c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" fill="#fff"/>
                      <path d="M26 7.5v9h2.5v-9H26zm-10 0v9h2.5v-9H16zm-5.5 0v9H13v-9h-2.5z" fill="#fff"/>
                    </svg>
                  </div>
                  <div className="w-px h-6 bg-slate-300" />
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-6" viewBox="0 0 40 24" fill="none">
                      <rect width="40" height="24" rx="4" fill="#003087"/>
                      <path d="M10.5 16h-2l1.3-8h2l-1.3 8zm6.2-7.8c-.4-.2-1-.3-1.8-.3-2 0-3.4 1-3.4 2.5 0 1.1 1 1.7 1.8 2 .8.4 1.1.6 1.1 1 0 .5-.6.8-1.2.8-.8 0-1.3-.1-2-.4l-.3-.1-.3 1.8c.5.2 1.4.4 2.4.4 2.1 0 3.5-1 3.5-2.5 0-.8-.5-1.5-1.7-2-.7-.4-1.2-.6-1.2-1 0-.3.4-.7 1.2-.7.7 0 1.2.1 1.6.3l.2.1.3-1.9zm5.3-.2h-1.5c-.5 0-.8.1-1 .6l-3 7.4h2.1l.4-1.2h2.6l.3 1.2h1.9l-1.8-8zm-2.5 5.2c.2-.5.8-2.2.8-2.2l.2.6.5 1.6h-1.5z" fill="#fff"/>
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
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">100% Satisfaction Guarantee</h4>
                  <p className="text-sm text-green-700 mt-1">
                    If you&apos;re not completely satisfied, we offer a full refund within 30 days of purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Links Section */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/30">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Explore Our Premium Trading Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a 
              href="https://infinityalgoacademy.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                  Visit Store
                </span>
                <p className="text-xs text-slate-500">Browse all products</p>
              </div>
            </a>
            <a 
              href="https://infinityalgoacademy.net/item/arbitrage-matrix-luxalgo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-slate-800 group-hover:text-green-600 transition-colors">
                  Free Product
                </span>
                <p className="text-xs text-slate-500">Arbitrage Matrix LuxAlgo</p>
              </div>
            </a>
            <a 
              href="https://infinityalgoacademy.net/checkout/?fct_cart_hash=1fcbdc7ffe6b87adbad87e142879d8a3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-slate-800 group-hover:text-purple-600 transition-colors">
                  Checkout Page
                </span>
                <p className="text-xs text-slate-500">Complete your order</p>
              </div>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">InfinityAlgo Academy</span>
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
