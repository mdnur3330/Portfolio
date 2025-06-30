import React from 'react';
import { FaPhoneAlt, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section className="py-20 bg-[#0e1016] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-3 text-green-400">Let's Connect</h2>
        <p className="text-center text-gray-400 mb-12">Have a project in mind or want to discuss opportunities? Reach out through any of these channels.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left - Contact Info */}
          <div className="space-y-6">
            <ContactCard icon={<FaPhoneAlt />} label="Phone" value="+8801890536220" color="green" />
            <ContactCard icon={<MdEmail />} label="Email" value="nuralom.web@gmail.com" color="green" />
            <ContactCard icon={<FaGithub />} label="GitHub" value="https://github.com/mdnur3330" color="green" />
            <ContactCard icon={<FaLinkedin />} label="LinkedIn" value="https://www.linkedin.com/in/nur-alom1" color="green" />
            <ContactCard icon={<FaWhatsapp />} label="WhatsApp" value="https://wa.me/qr/HQUAFMEBDLC3G1" color="green" />
            <ContactCard icon={<FaMapMarkerAlt />} label="Address" value="Babuganj, Barisal, Dhaka, Bangladesh" color="green" />
          </div>

          {/* Right - Contact Form */}
          <form action='https://formsubmit.co/nuralom.web@gmail.com' method='POST' className="bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-xl p-8 space-y-6 shadow-xl">
            <h3 className="text-2xl font-bold text-green-400">Send Me a Message</h3>
            <input type="text" name='name' placeholder="Your Name" className="w-full p-3 rounded-md bg-[#1f2937] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="email" name='email' placeholder="Your Email" className="w-full p-3 rounded-md bg-[#1f2937] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="text" name='subject' placeholder="Subject" className="w-full p-3 rounded-md bg-[#1f2937] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <textarea name='message' placeholder="Your Message" rows="5" className="w-full p-3 rounded-md bg-[#1f2937] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
            <button type="submit" className="w-full py-3 text-lg font-semibold bg-green-400 hover:bg-green-500 text-black rounded-md flex items-center justify-center gap-2 transition duration-300 cursor-pointer">
              <FaTelegramPlane className="text-xl" /> Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, color }) => {
  return (
    <div className={`border-l-4 border-${color}-500 bg-[#1a1c23] p-4 rounded-lg flex items-start gap-4 shadow-md`}>
      <div className={`text-${color}-400 text-2xl`}>{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{label}</h4>
        <p className="text-sm text-gray-300">{value}</p>
      </div>
    </div>
  );
};

export default Contact;

