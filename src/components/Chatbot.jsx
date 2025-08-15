import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Q&A Database
  const qaDatabase = {
    "what is coreai": {
      answer: "CoreAI is a Copenhagen-based consultancy specializing in Generative AI, Agentic AI systems, and ML infrastructure. We help enterprise and public-sector teams deploy AI agents that automate workflows, augment teams, and orchestrate outcomes across your business."
    },
    "what are agentic ai systems": {
      answer: "Agentic AI systems act like digital coworkers embedded in your business operations. They can make decisions, automate repetitive tasks, and coordinate outcomes across departments. These systems learn, adapt, make real-time decisions, evaluate information, consult knowledge bases, and orchestrate complex multi-step workflows while maintaining security and compliance."
    },
    "how can coreai help": {
      answer: "We help businesses by: Automating data ingestion and entry across systems, providing centralized AI-powered knowledge retrieval, implementing AI-driven approval workflows with instant routing, developing agents that bridge and sync multiple systems, offering real-time security monitoring and predictive alerts, providing system analysis and AI-generated forecasting, automating report generation and scheduling, and creating scalable AI processes that grow without extra staff."
    },
    "services": {
      answer: "We offer four main services: 1) Agentic AI Optimization Strategy & Implementation - From business process assessment to full deployment, 2) Workflow Automation Solutions - Streamlining your business processes with AI, 3) Predictive Analytics & AI-Driven Forecasting - Data-driven insights for better decision making, 4) AI Enablement & Training - Upskilling your team for the AI-powered future."
    },
    "tools and platforms": {
      answer: "We use cutting-edge technologies including: Agent Frameworks (LangChain, DSPy, CrewAI, RAGatouille, Reflexion/AutoGPT), LLMs (Claude 3, GPT-4o, Amazon Titan, Google Gemini/PaLM 2, LLaMA/Mistral), Cloud Infrastructure (AWS-native solutions with Well-Architected Framework), and Security (Guardrails, RBAC, and data masking for LLMs)."
    },
    "book session": {
      answer: "You can book a free 45-minute AI Mapping Session with us! This session will help us understand your specific needs and map out AI opportunities for your business. During our session, we'll assess your current business processes, identify automation opportunities, discuss potential AI solutions tailored to your needs, provide initial recommendations, and answer any questions about our services."
    },
    "use cases": {
      answer: "Our AI agents excel in various areas: Operations (Cross-system data reconciliation, customer feedback analysis), Sales & Marketing (Lead qualification, demo follow-ups, account research), Finance & Legal (Automated reporting, contract drafting, invoice review), HR (Employee onboarding, knowledge discovery, document automation), and Logistics (Predictive maintenance, autonomous dispatch, inventory monitoring)."
    },
    "pricing": {
      answer: "Our pricing varies based on the scope and complexity of your project. We offer customized solutions tailored to your specific needs. During our free AI Mapping Session, we'll provide you with a detailed proposal and pricing structure. We also offer credits and co-funding opportunities through our AWS Partner Network."
    },
    "security": {
      answer: "Absolutely! We prioritize security with AWS Well-Architected Framework alignment, role-based access controls (RBAC), data masking for LLMs, and comprehensive guardrails. All our solutions maintain strict security and compliance standards."
    },
    "why ai now": {
      answer: "The AI Agents market is experiencing substantial growth, ascending from $10.1 billion in 2024 to an anticipated $470.1 billion by 2030. Early adoption gives you a competitive advantage, and our human-AI collaboration approach ensures measurable business outcomes while reducing administrative overhead."
    }
  }

  // Quick action buttons
  const quickActions = [
    { label: "What is CoreAI?", key: "what is coreai" },
    { label: "Our Services", key: "services" },
    { label: "Book a Session", key: "book session" },
    { label: "Use Cases", key: "use cases" }
  ]

  // Welcome message
  const welcomeMessage = {
    id: 'welcome',
    type: 'bot',
    content: "Hi! I'm CoreAI's virtual assistant. I can help you learn about our Agentic AI solutions and services. How can I assist you today?",
    timestamp: new Date()
  }

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([welcomeMessage])
    }
  }, [isOpen])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Find best matching answer
  const findAnswer = (question) => {
    const normalizedQuestion = question.toLowerCase().trim()
    
    // Direct matches
    for (const [key, value] of Object.entries(qaDatabase)) {
      if (normalizedQuestion.includes(key)) {
        return value.answer
      }
    }

    // Keyword matching
    if (normalizedQuestion.includes('help') || normalizedQuestion.includes('assist')) {
      return qaDatabase["how can coreai help"].answer
    }
    
    if (normalizedQuestion.includes('price') || normalizedQuestion.includes('cost')) {
      return qaDatabase["pricing"].answer
    }

    if (normalizedQuestion.includes('secure') || normalizedQuestion.includes('safety')) {
      return qaDatabase["security"].answer
    }

    if (normalizedQuestion.includes('example') || normalizedQuestion.includes('case')) {
      return "Sure! For Sales & Marketing, our agents can generate personalized talking points using public data, LinkedIn profiles, and internal notes - reducing SDR prep time significantly. They can also automatically qualify leads and enrich CRM data, flagging high-fit accounts based on ICP signals and intent."
    }

    // Fallback response
    return "I'd be happy to help! While I don't have specific information about that topic, I can connect you with one of our specialists who can provide detailed answers. Would you like to book a free AI Mapping Session to discuss your specific needs? Or feel free to ask me about our services, use cases, or how we can help transform your business operations."
  }

  // Handle sending message
  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageText.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: findAnswer(messageText),
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  // Handle quick action
  const handleQuickAction = (key) => {
    const answer = qaDatabase[key]?.answer
    if (answer) {
      const botMessage = {
        id: Date.now(),
        type: 'bot',
        content: answer,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }
  }

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 transition-all duration-300 shadow-xl ${
        isMinimized ? 'h-14' : 'h-96'
      }`}>
        <CardHeader className="p-4 pb-2 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-sm">CoreAI Assistant</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {isTyping ? 'Typing...' : 'Online'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="p-0 h-64 overflow-hidden flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 text-sm ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && (
                          <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        )}
                        <p className="text-xs leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-muted-foreground rounded-lg p-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="p-4 pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <Button
                        key={action.key}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickAction(action.key)}
                        className="text-xs h-8"
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>

            {/* Input */}
            <div className="p-4 pt-0 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  size="sm"
                  disabled={!inputValue.trim() || isTyping}
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}

export default Chatbot

