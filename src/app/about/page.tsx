import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const metadata = {
  title: "About | Noorkin.dev — Our Mission & Values",
  description: "Learn about our commitment to ethical technology, integrity, excellence, and social responsibility in software development.",
};

const values = [
  {
    title: "Integrity & Trust",
    description: "We build relationships on honesty, transparency, and reliability. Every interaction, every line of code, and every commitment we make is guided by integrity.",
    color: "bg-primary"
  },
  {
    title: "Excellence (Ihsan)",
    description: "We strive for ihsan—excellence and perfection in our work. This means going beyond meeting requirements to creating solutions that truly serve and benefit others.",
    color: "bg-accent"
  },
  {
    title: "Respect & Inclusivity",
    description: "We honor the dignity of every person we work with. Our technology solutions are designed to be accessible, inclusive, and respectful of diverse needs and perspectives.",
    color: "bg-teal"
  },
  {
    title: "Social Responsibility",
    description: "Technology should benefit society. We consider the broader impact of our work and strive to create solutions that contribute positively to our communities.",
    color: "bg-olive"
  }
];

// Geometric divider component
function GeometricDivider() {
  return (
    <div className="flex justify-center py-8">
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20L30 10L40 20L30 30L20 20Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
        <path d="M50 20L60 10L70 20L60 30L50 20Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M80 20L90 10L100 20L90 30L80 20Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Technology with <span className="text-primary italic">Purpose</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed">
            At Noorkin.dev, we believe that technology should illuminate possibilities, 
            empower communities, and honor the dignity of every person it touches.
          </p>
        </div>
      </Section>

      <GeometricDivider />

      {/* Mission Section */}
      <Section className="bg-gray-light/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
              <p>
                We exist to bridge the gap between cutting-edge technology and timeless ethical values. 
                Our mission is to help organizations build digital solutions that are not only powerful 
                and efficient, but also just, sustainable, and beneficial to society.
              </p>
              <p>
                Every project we undertake is an opportunity to demonstrate that excellence in technology 
                and excellence in character can—and should—go hand in hand.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4L24 16L36 20L24 24L20 36L16 24L4 20L16 16L20 4Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-charcoal">Illuminating Solutions</h3>
                  <p className="text-sm text-charcoal/70">
                    We bring clarity to complex problems through thoughtful, ethical technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <GeometricDivider />

      {/* Values Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            These principles guide every decision we make, every solution we build, 
            and every relationship we nurture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className={`w-4 h-4 ${value.color} rounded-full flex-shrink-0 mt-2`} />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <GeometricDivider />

      {/* Story Section */}
      <Section className="bg-gray-light/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Story
            </h2>
          </div>
          
          <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
            <p>
              Noorkin.dev was founded on the belief that the technology industry needs more than just 
              innovation—it needs conscience. In an era where digital solutions shape every aspect of 
              human life, we recognized the crucial need for technology that serves not just business 
              objectives, but human flourishing.
            </p>
            <p>
              The name &ldquo;Noorkin&rdquo; reflects our core purpose: to bring light (noor) to the world of 
              technology development. We draw inspiration from universal principles of justice, 
              compassion, and excellence that transcend cultural boundaries while honoring our 
              foundational Islamic values.
            </p>
            <p>
              Today, we work with organizations worldwide who share our vision of technology as a 
              force for good—building solutions that are secure, accessible, sustainable, and designed 
              with the wellbeing of all users in mind.
            </p>
          </div>
        </div>
      </Section>

      <GeometricDivider />

      {/* Approach Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M9 3L5 7L3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
                    </svg>
                  </div>
                  <span className="font-medium text-charcoal">Security & Privacy by Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-md flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M9 3L5 7L3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"/>
                    </svg>
                  </div>
                  <span className="font-medium text-charcoal">Accessibility & Inclusion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal/20 rounded-md flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M9 3L5 7L3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal"/>
                    </svg>
                  </div>
                  <span className="font-medium text-charcoal">Sustainable & Maintainable Code</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-olive/20 rounded-md flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M9 3L5 7L3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive"/>
                    </svg>
                  </div>
                  <span className="font-medium text-charcoal">Transparent Communication</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              How We Work
            </h2>
            <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
              <p>
                Our development approach is rooted in ethical principles that prioritize long-term 
                value over short-term gains. We believe in building relationships, not just software.
              </p>
              <p>
                Every project begins with understanding&mdash;not just the technical requirements, but the 
                human needs, ethical considerations, and broader impact of the solution we're creating together.
              </p>
              <p>
                We practice radical transparency, sustainable development practices, and continuous 
                learning to ensure that our solutions remain valuable and ethical throughout their lifecycle.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If our values align with yours, we&rsquo;d love to explore how we can help bring your vision to life 
            through ethical technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              className="bg-white text-primary hover:bg-white/90" 
              size="lg"
              asChild
            >
              <Link href="/contact">
                Start a Conversation
              </Link>
            </CTAButton>
            <CTAButton 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary" 
              size="lg"
              asChild
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}


