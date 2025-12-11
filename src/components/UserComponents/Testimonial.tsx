"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "Booking appointments with MediSync is so easy! I can manage all my family's health records in one place.",
    img: "/assets/user6.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun Mehta",
    text: "The reminders for appointments and medications have been a lifesaver. MediSync keeps my health on track!",
    img: "/assets/user2.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    text: "I love how I can video consult with my doctor from home. MediSync makes healthcare so convenient.",
    img: "/assets/user3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Rahul Verma",
    text: "Getting prescriptions and lab reports digitally has made everything hassle-free. Highly recommended!",
    img: "/assets/user4.jpeg",
    rating: 4,
  },
  {
    id: 5,
    name: "Sumit Reddy",
    text: "The customer support is amazing! They helped me set up my account and answered all my questions patiently.",
    img: "/assets/user7.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Vikram Singh",
    text: "Finally, a healthcare app that's simple to use. My elderly parents can navigate it without any confusion.",
    img: "/assets/user1.jpeg",
    rating: 5,
  },
  {
    id: 7,
    name: "Karthik Krishnan",
    text: "I can track my health history and share it with specialists easily. The doctors are highly skilled. MediSync is truly innovative!",
    img: "/assets/user5.jpeg",
    rating: 5,
  },
  {
    id: 8,
    name: "Vinita Das",
    text: "The app is fast, secure, and works perfectly on my phone. Managing healthcare has never been this easy.",
    img: "/assets/user8.jpeg",
    rating: 4,
  },
  {
    id: 9,
    name: "Rajal Singh",
    text: "From booking to consultation to getting reports, everything is seamless. MediSync is a game-changer!",
    img: "/assets/user9.jpeg",
    rating: 5,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

 
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1); // mobile
      else if (window.innerWidth < 1024) setCardsPerView(2); // tablet
      else setCardsPerView(3); // desktop
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  //  Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / cardsPerView));
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  const visibleCards = testimonials.slice(index * cardsPerView, index * cardsPerView + cardsPerView);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0077B6]">
          what our customers say
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
  Hear from our customers who trust <span className="font-semibold text-[#0077B6]">MediSync</span> to make healthcare simpler, smarter, and more connected.
</p>

      </div>

      {/* Testimonial Slider */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className={`grid gap-8 ${
              cardsPerView === 1
                ? "grid-cols-1"
                : cardsPerView === 2
                ? "sm:grid-cols-2"
                : "lg:grid-cols-3"
            }`}
          >
            {visibleCards.map((review) => (
              <div
                key={review.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                {/* Star Rating */}
                <div className="flex justify-center mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < review.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-center">
                  “{review.text}”
                </p>

                {/* User Info */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden border border-gray-300 shadow-sm">
                    <Image
                      src={review.img}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
