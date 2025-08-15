import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Mail,
  Phone,
  Building,
  User,
  MessageSquare,
  Zap,
  Target,
  Brain
} from 'lucide-react'

const BookingPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    message: '',
    preferredTime: '',
    challenges: []
  })

  const [selectedChallenges, setSelectedChallenges] = useState([])

  const challenges = [
    "Manual workflows slow us down",
    "Knowledge is buried across tools and teams", 
    "Can't extract insights from our data",
    "Internal tools don't integrate",
    "High administrative overhead",
    "Need better decision-making support",
    "Want to automate repetitive tasks",
    "Looking to scale operations"
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const toggleChallenge = (challenge) => {
    setSelectedChallenges(prev => 
      prev.includes(challenge) 
        ? prev.filter(c => c !== challenge)
        : [...prev, challenge]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would submit to a backend
    alert('Thank you for your interest! We will contact you within 24 hours to schedule your AI Mapping Session.')
  }

  const benefits = [
    { icon: Target, text: "Identify AI opportunities in your business" },
    { icon: Brain, text: "Get expert recommendations tailored to your needs" },
    { icon: Zap, text: "Learn about automation possibilities" },
    { icon: CheckCircle, text: "No commitment required" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Website</span>
            </Button>
            <div className="h-6 w-px bg-border"></div>
            <h1 className="text-2xl font-bold text-primary">CoreAI</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">
                Book Your Free AI Mapping Session
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover how Agentic AI can transform your business operations in just 45 minutes.
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Virtual meeting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>1-on-1 consultation</span>
                </div>
              </div>
            </div>

            {/* What You'll Get */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>What You'll Get</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <benefit.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm">Discovery</p>
                      <p className="text-xs text-muted-foreground">We'll learn about your current processes and challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm">Analysis</p>
                      <p className="text-xs text-muted-foreground">Identify opportunities for AI automation and optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm">Recommendations</p>
                      <p className="text-xs text-muted-foreground">Receive tailored AI strategy and next steps</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Session</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll contact you within 24 hours to schedule your session.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Last Name *
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Company *
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Your Role *
                    </label>
                    <Input
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., CEO, CTO, Operations Manager"
                    />
                  </div>

                  {/* Challenges */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      What challenges are you facing? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {challenges.map((challenge, index) => (
                        <Badge
                          key={index}
                          variant={selectedChallenges.includes(challenge) ? "default" : "outline"}
                          className="cursor-pointer p-2 text-xs justify-start hover:bg-primary/10"
                          onClick={() => toggleChallenge(challenge)}
                        >
                          {challenge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Preferred Time
                    </label>
                    <Input
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      placeholder="e.g., Weekday mornings, Tuesday afternoons"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Additional Information
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your business and what you hope to achieve with AI..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    Schedule My AI Mapping Session
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by CoreAI regarding your inquiry. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage

