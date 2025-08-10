import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-overlay opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/50" />
        
        <div className="relative text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-tight">
              <span className="block">Illuminating Your Business</span>
              <span className="block text-primary italic">
                with Ethical Tech Solutions
              </span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-charcoal/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We craft custom software with integrity, excellence, and respect. 
              Building the future while honoring timeless values.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAButton size="lg" asChild>
                <Link href="/services">
                  Explore Our Services
                </Link>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Start a Conversation
                </Link>
              </CTAButton>
            </div>
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
