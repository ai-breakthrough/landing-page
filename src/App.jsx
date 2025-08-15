import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  ChevronRight, 
  Bot, 
  Zap, 
  Brain, 
  Target, 
  Shield, 
  Database,
  BarChart3,
  Users,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import Chatbot from './components/Chatbot.jsx'
import BookingPage from './components/BookingPage.jsx'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('strategy')
  const [expandedService, setExpandedService] = useState(null)
  const [showBookingPage, setShowBookingPage] = useState(false)

  // Show booking page
  const showBooking = () => {
    setShowBookingPage(true)
  }

  // Go back to main website
  const goBackToWebsite = () => {
    setShowBookingPage(false)
  }

  // If booking page is active, render it
  if (showBookingPage) {
    return <BookingPage onBack={goBackToWebsite} />
  }

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Navigation items
  const navItems = [
    { label: 'Approach', id: 'approach' },
    { label: 'Services', id: 'services' },
    { label: 'Use Cases', id: 'use-cases' },
    { label: 'Tools', id: 'tools' },
    { label: 'About', id: 'about' },
  ]

  // Pain points data
  const painPoints = [
    "Manual workflows slow us down.",
    "Knowledge is buried across tools and teams.",
    "We store huge amounts of data but can't extract insights.",
    "Internal tools don't talk to each other — copy-paste nightmare."
  ]

  // Capabilities data
  const capabilities = [
    { icon: Brain, text: "Learns/adapts; makes real-time decisions to achieve goals" },
    { icon: Database, text: "Evaluates available information, consults knowledge bases" },
    { icon: Target, text: "Breaks down complex requests into logical steps" },
    { icon: Zap, text: "Orchestrates actions across multi-step workflows" },
    { icon: Shield, text: "Maintains security and compliance" }
  ]

  // How we help data
  const helpItems = [
    { icon: Database, text: "Automate data ingestion/entry across systems" },
    { icon: Brain, text: "Centralized AI-powered knowledge retrieval" },
    { icon: Zap, text: "AI-driven approval workflows with instant routing" },
    { icon: Target, text: "Agents that bridge/sync multiple systems" },
    { icon: Shield, text: "Real-time security monitoring & predictive alerts" },
    { icon: BarChart3, text: "System analysis & AI-generated forecasting" },
    { icon: MessageSquare, text: "Automated report generation & scheduling" },
    { icon: Users, text: "Scalable AI processes that grow without extra staff" }
  ]

  // Services data
  const services = [
    {
      id: 'strategy',
      title: 'Agentic AI Optimization Strategy & Implementation',
      steps: [
        'Business Process Assessment',
        'Prototype (Design & Architecture)',
        'Agent Development, Testing & Deployment (MVC)',
        'Scale Planning & Rollout'
      ]
    },
    {
      id: 'workflow',
      title: 'Workflow Automation Solutions',
      steps: [
        'Workflow Analysis & Mapping',
        'Blueprint Design',
        'Agent Development, Testing & Deployment (MVC)',
        'Scale Planning & Rollout'
      ]
    },
    {
      id: 'analytics',
      title: 'Predictive Analytics & AI-Driven Forecasting',
      steps: [
        'Data Assessment & Model Design',
        'Predictive Hypothesis Development',
        'Forecasting Engine Development, Testing & Integration (MVC)',
        'Scale Planning & Rollout'
      ]
    },
    {
      id: 'training',
      title: 'AI Enablement & Training',
      steps: [
        'Skills Assessment & Gap Analysis',
        'Skills report & training plan',
        'Training',
        'Change Management & Adoption',
        'Support'
      ]
    }
  ]

  // Use cases data
  const useCases = {
    strategy: [
      {
        title: 'Sales & Marketing Strategy',
        description: 'Agents generate personalized talking points from public data/LinkedIn/internal notes to reduce SDR prep time.'
      },
      {
        title: 'Digital Transformation Strategy',
        description: 'Agents analyze current processes and recommend AI-native workflow architectures.'
      },
      {
        title: 'Strategic Decision Support',
        description: 'Scenario planning & strategic modeling using market data, internal metrics, and external factors.'
      },
      {
        title: 'HR Strategic Planning',
        description: 'Always-available onboarding guides reduce HR effort and increase new-hire productivity.'
      }
    ],
    operations: [
      {
        title: 'Cross-system Data Reconciliation',
        description: 'Across ERP/CRM/HRIS to improve accuracy and reporting.'
      },
      {
        title: 'Customer Feedback Analysis',
        description: 'Summarize reviews/surveys/tickets into actionable CX insights.'
      },
      {
        title: 'Meeting & Scheduling Operations',
        description: 'Across calendars/teams/time zones.'
      },
      {
        title: 'Data Entry & System Updates',
        description: 'Extract structured data from emails/PDFs and update systems automatically.'
      }
    ],
    finance: [
      {
        title: 'Reporting Automation',
        description: 'For Finance/HR/ESG from multiple systems into compliant reports.'
      },
      {
        title: 'Contract Drafting',
        description: 'Legal document assembly (NDAs, SLAs, MSAs) with human review in loop.'
      },
      {
        title: 'Real-time Financial Insights',
        description: 'From disconnected systems; reconcile values and surface discrepancies.'
      },
      {
        title: 'Invoice Review',
        description: 'Extract line items from PDFs, match to POs, flag anomalies.'
      }
    ],
    sales: [
      {
        title: 'Lead Qualification & Prioritization',
        description: 'Enrich CRM; flag high-fit accounts via ICP signals/intent.'
      },
      {
        title: 'Demo Follow-up Automation',
        description: 'Auto-generate follow-ups/recaps/documents.'
      },
      {
        title: 'Feedback Loop to Product Teams',
        description: 'Summarize objection patterns for roadmap input.'
      },
      {
        title: 'Account Research & Personalization',
        description: 'Tailored talking points; reduce SDR prep.'
      }
    ]
  }

  // Differentiators data
  const differentiators = [
    { icon: Database, text: "Full-stack GenAI delivery — from vector DB to frontend" },
    { icon: Users, text: "Human–AI collaboration by design" },
    { icon: Shield, text: "AWS Well-Architected Framework alignment" },
    { icon: CheckCircle, text: "Certified specialists" },
    { icon: Target, text: "Credits & co-funding via AWS Partner Network" },
    { icon: Zap, text: "Continuous Innovation & R&D" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">CoreAI</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={showBooking}
                  className="bg-primary hover:bg-primary/90"
                >
                  Book Session
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={showBooking}
                className="w-full mt-4 bg-primary hover:bg-primary/90"
              >
                Book Session
              </Button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 hero-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Transforming Business Operations with Agentic AI Systems
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              We deploy AI agents that automate workflows, augment teams, and orchestrate outcomes across your business.
            </p>

            {/* Pain Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
              {painPoints.map((point, index) => (
                <Badge key={index} variant="secondary" className="p-3 text-sm">
                  {point}
                </Badge>
              ))}
              <Badge variant="outline" className="p-3 text-sm col-span-1 sm:col-span-2">
                High administrative overhead.
              </Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={showBooking}
                className="bg-primary hover:bg-primary/90"
              >
                Book your free 45-minute AI Mapping Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('use-cases')}
              >
                Explore Use Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What are Agentic AI Systems */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                What are Agentic AI systems?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Agentic AI systems act like digital coworkers embedded in operations — able to make decisions, 
                automate repetitive tasks, and coordinate outcomes.
              </p>
            </div>
            <div>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <capability.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{capability.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-card rounded-lg border">
                <p className="text-sm font-medium">AI Agents market:</p>
                <p className="text-2xl font-bold text-primary">$10.1B (2024) → $470.1B (2030)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How we help</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-sm">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="mb-4"
                  >
                    {expandedService === service.id ? 'Hide Steps' : 'View Steps'}
                    <ChevronRight className={`ml-2 h-4 w-4 transition-transform ${
                      expandedService === service.id ? 'rotate-90' : ''
                    }`} />
                  </Button>
                  {expandedService === service.id && (
                    <div className="space-y-3">
                      {service.steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                            {index + 1}
                          </div>
                          <p className="text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Use Cases</h2>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(useCases).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className="capitalize"
              >
                {tab === 'finance' ? 'Finance & Legal' : tab}
              </Button>
            ))}
          </div>

          {/* Use Case Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases[activeTab]?.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground">
              Human–AI collaboration that delivers measurable business outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-sm">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Tools & Platforms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Agent Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  LangChain, DSPy, CrewAI, RAGatouille, Reflexion/AutoGPT
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Large Language Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Claude 3, GPT-4o, Amazon Titan, Google Gemini/PaLM 2, LLaMA/Mistral
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Security & Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Well-Architected, guardrails, RBAC, data masking for LLMs
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cloud & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AWS-native: Compute/orchestration, data storage & access, ETL, semantic indexing & vector search, containerization, CI/CD setup
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About</h2>
          <p className="text-lg text-muted-foreground">
            CoreAI is a Copenhagen-based consultancy specializing in Generative AI, Agentic AI systems, 
            and ML infrastructure. We help enterprise and public-sector teams deploy AI agents that 
            automate workflows and orchestrate outcomes.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's map your AI opportunities.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a free 45-minute AI Mapping Session.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 mb-4" onClick={showBooking}>
            Book Session
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Turning AI potential into operational advantage through human-centered collaboration.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CoreAI</h3>
              <p className="text-sm text-muted-foreground">
                Transforming business operations with Agentic AI systems.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                © 2024 CoreAI. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Copenhagen, Denmark
              </p>
              <Button 
                variant="link" 
                className="p-0 h-auto text-sm"
                onClick={showBooking}
              >
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}

export default App

