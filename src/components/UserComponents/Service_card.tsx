import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Dental treatments',
    description: 'Comprehensive dental care including cleanings, fillings, root canals, and cosmetic procedures to keep your smile healthy and bright.',
    imagePath: '/assets/dental.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'Bones treatments',
    description: 'Expert orthopedic care for fractures, joint issues, and bone-related conditions with advanced treatment options and rehabilitation support.',
    imagePath: '/assets/bones.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'Diagnosis',
    description: 'State-of-the-art diagnostic services using the latest technology to accurately identify health conditions and create effective treatment plans.',
    imagePath: '/assets/diagnosis.jpg',
    link: '#'
  },
  {
    id: 4,
    title: 'Cardiology',
    description: 'Specialized heart care from experienced cardiologists offering preventive screenings, treatment for heart conditions, and ongoing cardiac health management.',
    imagePath: '/assets/cardiology.jpg',
    link: '#'
  },
  {
    id: 5,
    title: 'Surgery',
    description: 'Advanced surgical procedures performed by skilled surgeons in modern facilities, ensuring safe and effective treatment with personalized post-operative care.',
    imagePath: '/assets/surgery.jpg',
    link: '#'
  },
  {
    id: 6,
    title: 'Eye care',
    description: 'Complete vision and eye health services including comprehensive eye exams, treatment for eye conditions, and corrective solutions for optimal vision.',
    imagePath: '/assets/eye.jpg',
    link: '#'
  }
];

export default function Service_card() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0077B6] mb-4">
            Services we provide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive healthcare services designed to meet all your medical needs. Our experienced team of specialists is dedicated to providing exceptional care with the latest medical technology and compassionate service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border-2 border-[#0077B6] p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0077B6] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href={service.link}
                className="inline-flex items-center text-[#0077B6] font-semibold hover:underline"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}