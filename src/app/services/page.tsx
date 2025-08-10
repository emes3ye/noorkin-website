import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Services | Noorkin.dev — Ethical Tech Solutions",
  description: "Custom software development, cloud architecture, IT consulting, and UI/UX design with integrity and excellence.",
};

const services = [
  {
    icon: "/icons/gear.svg",
    title: "Custom Software Development",
    description: "We build tailored web and mobile applications that solve real business problems. From MVPs to enterprise-scale solutions, our full-stack development approach ensures your software is secure, scalable, and maintainable.",
    features: [
      "Full-stack web applications",
      "Mobile app development",
      "API design and integration",
      "Database architecture",
      "Performance optimization"
    ]
  },
  {
    icon: "/icons/cloud.svg",
    title: "Cloud & DevOps",
    description: "Modern infrastructure that scales with your business. We design and implement cloud solutions that are cost-effective, secure, and reliable, with automated deployments and comprehensive monitoring.",
    features: [
      "AWS & Vercel deployments",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Monitoring & logging",
      "Security best practices"
    ]
  },
  {
    icon: "/icons/bulb.svg",
    title: "IT Consulting & Strategy",
    description: "Strategic technology guidance to help you make informed decisions. We assess your current systems, identify opportunities for improvement, and create roadmaps for sustainable growth.",
    features: [
      "Technology assessments",
      "Architecture reviews",
      "Team augmentation",
      "Best practices training",
      "Digital transformation"
    ]
  },
  {
    icon: "/icons/cube.svg",
    title: "UI/UX Design",
    description: "User-centered design that combines beauty with usability. We create interfaces that are accessible, intuitive, and aligned with your brand values and business objectives.",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Responsive design",
      "Accessibility compliance",
      "Design system creation"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Ethical Technology <span className="text-primary italic">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed">
            We help organizations build and maintain technology solutions that are secure, 
            scalable, accessible, and aligned with ethical principles.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gray-light/30">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}>
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10">
                    <Image
                      src={service.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-charcoal/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt=""
                      width={80}
                      height={80}
                      className="text-primary opacity-60"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Every project follows our ethical development process, ensuring quality, 
            transparency, and long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-semibold text-xl text-charcoal mb-2">Discovery & Planning</h3>
            <p className="text-charcoal/70">
              We start by understanding your business goals, technical requirements, 
              and ethical considerations to create a comprehensive project plan.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent">2</span>
            </div>
            <h3 className="font-semibold text-xl text-charcoal mb-2">Ethical Development</h3>
            <p className="text-charcoal/70">
              We build with integrity, following best practices for security, accessibility, 
              and performance while maintaining transparent communication.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal">3</span>
            </div>
            <h3 className="font-semibold text-xl text-charcoal mb-2">Launch & Support</h3>
            <p className="text-charcoal/70">
              We ensure a smooth launch and provide ongoing support to help your 
              solution evolve and grow with your business needs.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&rsquo;s discuss how we can help you build technology solutions that align with your values and business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              className="bg-white text-primary hover:bg-white/90" 
              size="lg"
              asChild
            >
              <Link href="/contact">
                Get Started Today
              </Link>
            </CTAButton>
            <CTAButton 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary" 
              size="lg"
              asChild
            >
              <Link href="/about">
                Learn About Our Values
              </Link>
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}


