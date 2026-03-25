import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Audio (Music & Podcasts)",
    price: "$60.00",
    description: "Recording, Engineering, Mixing, Mastering.",
    imageUrl: "/service1.png",
  },
  {
    title: "Video Editing",
    price: "$45.00",
    description: "High quality video editing for music videos, YouTube videos, vlogs, short films and movies, and content.",
    imageUrl: "/service2.png",
  },
  {
    title: "Social Media",
    price: "Reach Out For Pricing",
    description: "Reels, Images, Posting Calendar, Content Creation, Social Media Analytics.",
    imageUrl: "/service3.png",
  },
];

export default function HomePage() {
  return (
    <main className="relative flex flex-col min-h-screen text-white overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Ancient_Egypt.png')" }}
      >
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <Navbar />

      {/* Main Content - Hero Section */}
            {/* Main Content - Hero Section */}
      <div className="relative z-10 flex flex-col flex-grow items-center justify-center text-center px-4 pt-48 pb-32">
        <h1 className="text-5xl font-bold text-[#4c4c8e] mb-8 drop-shadow-md">
          Discover the Future of Multi Media
        </h1>
        {/* Adjusted container width to match 25% reduction */}
        <div className="w-full max-w-3xl mb-20"> 
          <Image
            src="/t_hero_edit.png"
            alt="T the Pharaoh hero image"
            width={768} // Reduced from 1024
            height={432} // Reduced from 576
            className="rounded-lg shadow-2xl mx-auto"
            priority
          />
        </div>
      </div>

      {/* Listen Up and Sound Content Section */}
      <section className="relative z-20 w-full bg-[#E5DDE9] pb-16 pt-16 -mt-32">
        <div className="absolute top-0 left-0 w-full h-24 overflow-hidden -mt-24 pointer-events-none">
          <svg
            className="absolute bottom-0 w-full h-full text-[#E5DDE9]"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,80L48,90.7C96,101,192,123,288,133.3C384,144,480,144,576,133.3C672,123,768,101,864,80C960,59,1056,37,1152,42.7C1248,48,1344,80,1392,96L1440,112L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
            ></path>
          </svg>
        </div>
 
        <div className="overflow-hidden whitespace-nowrap py-4 mb-8">
          <div className="animate-[marquee_25s_linear_infinite] inline-block">
            <span className="text-7xl md:text-8xl font-bold text-[#4c4c8e] tracking-tight">
              Listen up. * Listen up. * Listen up. * Listen up. * Listen up. *
            </span>
            <span className="text-7xl md:text-8xl font-bold text-[#4c4c8e] tracking-tight">
              Listen up. * Listen up. * Listen up. * Listen up. * Listen up. *
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:space-x-12 px-6 text-gray-800">
          <div className="md:w-1/2 mb-8 md:mb-0 text-lg leading-relaxed">
            <p className="max-w-md">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whichever it is,
              the way you tell your story online can make all the difference.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-end space-y-4">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%234c4c8e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="max-w-md"
            ></iframe>
            <div
              style={{ fontSize: "10px", color: "#cccccc", textOverflow: "ellipsis" }}
              className="max-w-md text-gray-500"
            >
              <a href="#" style={{ color: "#cccccc", textDecoration: "none" }}>Aoki</a> · 
              <a href="#" style={{ color: "#cccccc", textDecoration: "none" }}>Sample Track</a>
            </div>
            <a href="#" className="text-sm text-gray-600 hover:underline mt-4">
              Privacy policy
            </a>
          </div>
        </div>
      </section>

      {/* NEW SECTION - Our Services */}
      <section className="relative z-30 bg-[#E5B868] text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Title */}
          <div className="lg:col-span-1 flex items-center justify-center lg:justify-start text-center lg:text-left">
            <h2 className="text-5xl font-serif">Our Services</h2>
          </div>

          {/* Right Column: Service Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title}>
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-700 mt-1">{service.price}</p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}