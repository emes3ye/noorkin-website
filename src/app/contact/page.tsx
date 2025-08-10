import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const metadata = {
  title: "Contact | Noorkin.dev — Let's Work Together",
  description: "Ready to start your ethical technology project? Get in touch with our team for custom software development, consulting, and more.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Let&rsquo;s Start a <span className="text-primary italic">Conversation</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed">
            Ready to bring your vision to life with ethical technology solutions? 
            We&rsquo;re here to listen, understand, and help you succeed.
          </p>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-gray-light/30">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
              Tell Us About Your Project
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Email Us</h3>
                  <p className="text-charcoal/80">
                    <a 
                      href="mailto:hello@noorkin.dev" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      hello@noorkin.dev
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Response Time</h3>
                  <p className="text-charcoal/80">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Time Zone</h3>
                  <p className="text-charcoal/80">
                    We work with clients globally and accommodate different time zones.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                  <span className="text-charcoal/80 text-sm">
                    Initial consultation to understand your needs and goals
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-charcoal/80 text-sm">
                    Detailed proposal with timeline and approach
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal rounded-full flex-shrink-0 mt-2" />
                  <span className="text-charcoal/80 text-sm">
                    Transparent communication throughout the project
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Services CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Explore our services to learn more about how we can help with your 
            custom software development, cloud infrastructure, or consulting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="outline" size="lg" asChild>
              <Link href="/services">
                View Our Services
              </Link>
            </CTAButton>
            <CTAButton variant="outline" size="lg" asChild>
              <Link href="/about">
                Learn About Our Values
              </Link>
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-light/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-charcoal mb-3">
                How do you ensure project quality?
              </h3>
              <p className="text-charcoal/80 text-sm">
                We follow rigorous testing, code review, and quality assurance processes. 
                Every project includes comprehensive documentation and ongoing support.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-charcoal mb-3">
                What is your pricing model?
              </h3>
              <p className="text-charcoal/80 text-sm">
                We offer both fixed-price projects and hourly consulting rates. 
                Pricing depends on scope, complexity, and timeline requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-charcoal mb-3">
                Do you work with startups?
              </h3>
              <p className="text-charcoal/80 text-sm">
                Yes! We love helping startups turn their ideas into reality. 
                We offer flexible engagement models and MVP development services.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-charcoal mb-3">
                What technologies do you use?
              </h3>
              <p className="text-charcoal/80 text-sm">
                We specialize in modern web technologies: React, Next.js, TypeScript, 
                Node.js, PostgreSQL, AWS, and Vercel. We choose tools that best fit your needs.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


