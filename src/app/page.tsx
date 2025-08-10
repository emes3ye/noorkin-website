import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Hero Section with Animated Gradient */}
      <Section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-primary/15 animate-gradient-y"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-40 right-10 w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-lg animate-pulse"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 bg-pattern-overlay opacity-10 animate-pulse-slow"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full text-center lg:text-left">
          <div className="max-w-5xl mx-auto lg:mx-0">
            {/* Main Heading with Gradient Text */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-charcoal via-primary to-charcoal bg-clip-text text-transparent animate-text-shimmer bg-300% mb-2">
                Illuminating Your Business
              </span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-text-shimmer bg-300% italic">
                with Ethical Tech Solutions
              </span>
            </h1>
            
            {/* Subtitle with Fade-in Animation */}
            <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-charcoal/80 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up">
              We craft custom software with integrity, excellence, and respect. 
              Building the future while honoring timeless values through innovative technology.
            </p>
            
            {/* CTA Buttons with Staggered Animation */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up-delayed">
              <CTAButton 
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                size="lg" 
                asChild
              >
                <Link href="/services">
                  <span className="flex items-center gap-2">
                    Explore Our Services
                    <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </CTAButton>
              <CTAButton 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/10"
                size="lg" 
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    Start a Conversation
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </Link>
              </CTAButton>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 animate-fade-in-up-more-delayed">
              <p className="text-sm text-charcoal/60 mb-4">Trusted by forward-thinking organizations</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center opacity-60">
                <div className="flex items-center gap-2 text-sm font-medium text-charcoal/70">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                  Ethical Development
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-charcoal/70">
                  <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse"></div>
                  Accessible Design
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-charcoal/70">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
                  Sustainable Solutions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-gray-light/50">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            How We Serve You
          </h2>
          <p className="mt-4 text-lg text-charcoal/70 max-w-2xl mx-auto">
            Comprehensive technology solutions built with care and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon="/icons/gear.svg"
            title="Custom Development"
            description="Tailored software solutions that fit your unique business needs and scale with your growth."
          />
          <ServiceCard
            icon="/icons/cloud.svg"
            title="Cloud & DevOps"
            description="Scalable infrastructure, automated deployments, and monitoring that keeps your systems running smoothly."
          />
          <ServiceCard
            icon="/icons/cube.svg"
            title="Product Strategy"
            description="From MVP to market leader, we help you build products that users love and businesses need."
          />
          <ServiceCard
            icon="/icons/bulb.svg"
            title="Technical Consulting"
            description="Strategic guidance on technology decisions, architecture, and best practices for your team."
          />
        </div>
        
        <div className="text-center mt-12">
          <CTAButton variant="outline" asChild>
            <Link href="/services">
              View All Services
            </Link>
          </CTAButton>
        </div>
      </Section>

      {/* About Preview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Built on Timeless Values
            </h2>
            <div className="space-y-4 text-charcoal/80">
              <p>
                At Noorkin.dev, we believe that technology should serve humanity with integrity. 
                Our approach combines modern technical excellence with principles of respect, 
                trust, and social responsibility.
              </p>
              <p>
                Every line of code we write, every system we design, and every solution we deliver 
                is guided by our commitment to ethical practices and long-term sustainability.
              </p>
            </div>
            <div className="mt-8">
              <CTAButton variant="secondary" asChild>
                <Link href="/about">
                  Learn About Our Mission
                </Link>
              </CTAButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-medium text-charcoal">Integrity & Trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="font-medium text-charcoal">Excellence (Ihsan)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal rounded-full"></div>
                  <span className="font-medium text-charcoal">Respect & Inclusivity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-olive rounded-full"></div>
                  <span className="font-medium text-charcoal">Social Responsibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-overlay opacity-10" />
        <div className="relative text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&rsquo;s discuss how we can help illuminate your business with ethical technology solutions.
          </p>
          <CTAButton 
            className="bg-white text-primary hover:bg-white/90" 
            size="lg"
            asChild
          >
            <Link href="/contact">
              Start the Conversation
            </Link>
          </CTAButton>
    </div>
      </Section>
    </>
  );
}
