"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // This gathers the data from the form
    const formData = new FormData(e.currentTarget);

    // Your Web3Forms access key
    formData.append("access_key", "c618d949-9583-4a44-97d8-76f44d51e2d7");

    try {
      // This sends the email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen text-white overflow-hidden">

      {/* ================================
          CONTACT PAGE CONTENT
          Background + Navbar + Footer
          now come from layout.tsx
          ================================ */}
      <div className="relative z-10 pt-32 pb-16 px-4 flex-grow">
        <div className="max-w-5xl mx-auto">

          {/* Page Title */}
          <h1 className="text-5xl font-bold text-center text-[#E5B868] mb-4">
            Book Services
          </h1>
          <p className="text-center text-gray-300 mb-12">
            Fill out the form below to inquire about services or get a custom quote.
          </p>

          {/* ================================
              SUCCESS STATE
              Shows after form is submitted
              ================================ */}
          {submitted ? (
            <div className="bg-green-900/30 border border-green-500 p-8 
                            rounded-xl text-center max-w-2xl mx-auto 
                            backdrop-blur-md">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Thank You!
              </h3>
              <p className="text-lg text-gray-200">
                We'll get back to you within 24 hours to discuss your project.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-8 py-3 bg-[#4c4c8e] text-white 
                           rounded-full hover:bg-[#3b3b6e] transition-colors"
              >
                Send Another Message
              </button>
            </div>

          ) : (

            // ================================
            // FORM + BOOKING INFO GRID
            // ================================
            <div className="grid md:grid-cols-2 gap-12">

              {/* Contact Form */}
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl 
                              border border-white/10 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Send Inquiry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 
                                 rounded-lg text-white placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-[#4c4c8e]"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 
                                 rounded-lg text-white placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-[#4c4c8e]"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Service Type Dropdown */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200">
                      Service Type
                    </label>
                    <select
                      name="service"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 
                                 rounded-lg text-white focus:outline-none 
                                 focus:ring-2 focus:ring-[#4c4c8e] appearance-none"
                    >
                      <option value="audio" className="text-black">
                        Audio Production
                      </option>
                      <option value="video" className="text-black">
                        Video Production
                      </option>
                      <option value="social" className="text-black">
                        Social Media Content
                      </option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 
                                 rounded-lg text-white placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-[#4c4c8e]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#E5B868] text-black font-bold py-4 
                               rounded-lg hover:bg-[#d4a756] transition-colors 
                               text-lg mt-4"
                  >
                    Submit Inquiry
                  </button>

                </form>
              </div>

              {/* Booking Info */}
              <div className="space-y-6">

                {/* Booking Process */}
                <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl 
                                border border-white/10 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-[#E5B868]">
                    Booking Process
                  </h3>
                  <ol className="list-decimal list-inside space-y-4 
                                  text-gray-300 text-lg">
                    <li className="pb-2 border-b border-white/10">
                      Submit inquiry form
                    </li>
                    <li className="pb-2 border-b border-white/10">
                      We'll schedule a discovery call
                    </li>
                    <li className="pb-2 border-b border-white/10">
                      Receive custom quote & timeline
                    </li>
                    <li className="pt-2">
                      50% deposit to secure booking
                    </li>
                  </ol>
                </div>

                {/* Direct Contact */}
                <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl 
                                border border-white/10 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#E5B868]">
                    Direct Contact
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Email:{" "}
                    <span className="text-[#4c4c8e]">
                      info@yourdomain.com
                    </span>
                  </p>
                  <p className="text-gray-400 mt-2">
                    Typical response time: 24 hours
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

    </main>
  );
}