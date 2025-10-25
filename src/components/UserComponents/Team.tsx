import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  imagePath: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Trish Carter',
    role: 'GYNECOLOGIST',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.',
    imagePath: '/assets/doctor1.jpeg',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Sophie Moore',
    role: 'DENTAL SPECIALIST',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.',
    imagePath: '/assets/doctor2.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'Matt Cannon',
    role: 'ORTHOPEDIC',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.',
    imagePath: '/assets/doctor3.jpeg',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 4,
    name: 'Andy Smith',
    role: 'BRAIN SURGEON',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.',
    imagePath: '/assets/doctor4.jpeg',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 5,
    name: 'Lily Woods',
    role: 'HEART SPECIALIST',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.',
    imagePath: '/assets/doctor5.webp',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 6,
    name: 'Patrick Meyer',
    role: 'EYE SPECIALIST',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.',
    imagePath: '/assets/doctor6.avif',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  }
];

export default function Team() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0077B6] mb-4">
            Meet our team members
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of healthcare professionals committed to providing exceptional medical care. Our experienced specialists bring expertise, compassion, and innovative approaches to ensure the best outcomes for our patients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#E0F7FF] rounded-3xl border-2 border-[#0077B6] p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.imagePath}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-[#0EA5E9] mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-semibold text-gray-700 tracking-wide mb-4">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3">
                <a
                  href={member.social.facebook}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#0EA5E9] hover:text-white" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-[#0EA5E9] hover:text-white" />
                </a>
                <a
                  href={member.social.instagram}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#0EA5E9] hover:text-white" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#0EA5E9] hover:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}