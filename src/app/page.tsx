"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Waves, UtensilsCrossed, Heart, Home, Star, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="animatedAurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015752497-99ut2bvs.jpg"
          logoAlt="Luxury Hotel Thailand"
          brandName="Sanctuary Resort"
          navItems={[
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
          buttonClassName="px-6 py-2 rounded-none font-medium"
          buttonTextClassName="font-semibold tracking-wide"
        />
      </div>

      <div id="hero" data-section="hero" className="relative min-h-screen overflow-hidden">
        <HeroBillboardCarousel
          title="Escape to Pure Luxury"
          description="Discover your paradise at our premier beachfront resort in Thailand. Immerse yourself in elegance, tranquility, and world-class hospitality."
          tag="Luxury Resort"
          tagIcon={Sparkles}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015753283-1oxv73bu.jpg",
              imageAlt: "Luxury beach resort aerial view"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015754055-5mf6o9rq.jpg",
              imageAlt: "Resort pool at sunset"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015754782-duxten88.jpg",
              imageAlt: "Modern hotel entrance"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015755560-g0os0k5p.jpg",
              imageAlt: "Beachfront villa"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015756200-whnmz829.jpg",
              imageAlt: "Resort garden and spa"
            }
          ]}
          ariaLabel="Hero carousel showcasing luxury resort imagery"
          className="min-h-screen flex items-center justify-center"
          containerClassName="w-full max-w-7xl mx-auto px-4"
          titleClassName="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight"
          descriptionClassName="text-lg md:text-xl text-center mb-8 max-w-2xl mx-auto leading-relaxed"
        />
      </div>

      <div id="about" data-section="about" className="bg-gradient-to-br from-purple-50 to-transparent">
        <AboutFeature
          title="Your sanctuary awaits. Step into a world where every detail is crafted for your comfort and delight. Experience Thai hospitality at its finest."
          features={[
            {
              icon: Waves,
              title: "Beachfront Paradise",
              description: "Direct access to pristine white sand beaches with crystal-clear turquoise waters. Perfect for swimming, snorkeling, or simply watching breathtaking sunsets."
            },
            {
              icon: Sparkles,
              title: "World-Class Spa",
              description: "Indulge in traditional Thai treatments and modern wellness therapies. Our expert therapists ensure a journey of complete relaxation and rejuvenation."
            },
            {
              icon: UtensilsCrossed,
              title: "Culinary Excellence",
              description: "Savor exquisite cuisine from our award-winning chefs. International and local flavors blend seamlessly in our elegant dining venues."
            },
            {
              icon: Heart,
              title: "Personalized Service",
              description: "Our dedicated team anticipates every need. Experience legendary Thai hospitality with bespoke service tailored to your preferences."
            }
          ]}
          ariaLabel="Hotel features and amenities"
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-4"
          titleClassName="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight"
          featuresContainerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        />
      </div>

      <div id="rooms" data-section="rooms" className="bg-white">
        <ProductCardOne
          title="Our Signature Rooms"
          description="Choose from our carefully curated selection of luxurious accommodations designed for the discerning traveler."
          tag="Rooms & Suites"
          tagIcon={Home}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              name: "Deluxe Ocean View",
              price: "$299 / night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015760752-yjoe0kkz.jpg",
              imageAlt: "Deluxe room with ocean view"
            },
            {
              id: "2",
              name: "Premier Suite",
              price: "$499 / night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015761397-591ohfqj.jpg",
              imageAlt: "Premier suite with private pool"
            },
            {
              id: "3",
              name: "Beachfront Villa",
              price: "$799 / night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015762172-biy2mszl.jpg",
              imageAlt: "Exclusive beachfront villa"
            }
          ]}
          ariaLabel="Featured rooms and suites"
          containerClassName="max-w-7xl mx-auto px-4 py-20"
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="bg-gradient-to-br from-purple-50 to-transparent">
        <TestimonialCardTwo
          title="Guest Stories"
          description="Hear from our valued guests about their unforgettable experiences at our resort."
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alexandra Morrison",
              role: "Travel Blogger",
              testimonial: "This resort exceeded every expectation. The attention to detail, stunning views, and impeccable service made our honeymoon absolutely magical. We're already planning our return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015762963-71atqs6z.jpg",
              imageAlt: "Alexandra Morrison"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Executive",
              testimonial: "A perfect escape for both relaxation and business. The wellness facilities are outstanding, and the team made sure every moment was seamless. Highly recommend for corporate retreats.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015763674-hba57v0u.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Luxury Travel Editor",
              testimonial: "One of the finest resorts I've visited. The culinary experience alone is worth the trip. Every staff member embodies genuine Thai hospitality. Simply exquisite.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015764400-efsvjk54.jpg",
              imageAlt: "Isabella Rodriguez"
            },
            {
              id: "4",
              name: "David Whitmore",
              role: "Entrepreneur",
              testimonial: "The beachfront villas are pure luxury. Waking up to ocean views, world-class dining, and personalized service. This is what vacation dreams are made of.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015765261-a8v5ejbj.jpg",
              imageAlt: "David Whitmore"
            }
          ]}
          ariaLabel="Guest testimonials and reviews"
          containerClassName="max-w-7xl mx-auto px-4 py-20"
          cardClassName="rounded-none border border-accent"
          gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        />
      </div>

      <div id="faq" data-section="faq" className="bg-white">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at our resort."
          tag="Help & Support"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is the best time to visit?",
              content: "Thailand has a tropical climate. The best time to visit is November to February when weather is cool and dry. However, our resort is beautiful year-round with excellent facilities."
            },
            {
              id: "2",
              title: "Do you offer airport transfers?",
              content: "Yes, we provide complimentary airport transfers for all guests. Simply inform us of your flight details upon booking, and our team will arrange everything."
            },
            {
              id: "3",
              title: "Are there activities for families?",
              content: "Absolutely! We offer activities for all ages including water sports, yoga classes, kids club, cultural tours, and beach games. Our concierge can customize an itinerary for your family."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "Our resort features multiple restaurants serving Thai, Asian, and international cuisine. We also offer in-room dining and private beach dinners for special occasions."
            },
            {
              id: "5",
              title: "Is the resort suitable for business meetings?",
              content: "Yes, we have state-of-the-art conference facilities, high-speed WiFi, and business center services. Perfect for corporate retreats or small conferences."
            },
            {
              id: "6",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation up to 7 days before arrival for a full refund. Specific conditions apply to certain room types. Contact our reservations team for details."
            }
          ]}
          ariaLabel="Frequently asked questions"
          containerClassName="max-w-5xl mx-auto px-4 py-20"
        />
      </div>

      <div id="contact" data-section="contact" className="bg-gradient-to-br from-purple-50 to-transparent">
        <ContactCenter
          tag="Stay Connected"
          title="Plan Your Getaway"
          description="Subscribe to our newsletter for exclusive offers, travel tips, and early access to special packages. We promise only the finest updates delivered to your inbox."
          tagIcon={Mail}
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. Your information is secure with us."
          ariaLabel="Newsletter subscription form"
          containerClassName="max-w-3xl mx-auto px-4 py-20 text-center"
          contentClassName="rounded-none border border-accent p-12"
          titleClassName="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          descriptionClassName="text-lg mb-10 leading-relaxed max-w-xl mx-auto"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764015752497-99ut2bvs.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2025 Sanctuary Resort Thailand. All rights reserved."
          columns={[
            {
              title: "Rooms",
              items: [
                { label: "Deluxe Rooms", href: "rooms" },
                { label: "Suites", href: "rooms" },
                { label: "Villas", href: "rooms" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Dining", href: "features" },
                { label: "Spa & Wellness", href: "features" },
                { label: "Activities", href: "about" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Terms & Privacy", href: "#" }
              ]
            }
          ]}
          ariaLabel="Site footer"
          containerClassName="max-w-7xl mx-auto px-4"
          columnsClassName="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        />
      </div>
    </ThemeProvider>
  );
}