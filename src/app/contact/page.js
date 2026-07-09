import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full min-h-[calc(100vh-86px)] flex items-center justify-center bg-transparent px-4 py-12">
      
      <div className="max-w-xl w-full bg-[#F8F7FF] p-6 sm:p-8 rounded-xl shadow-sm border border-purple-100/60">
        
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#7C3AED]">Contact Me</h2>
        
        <form action="https://formspree.io/f/mzdwnkdd" method="POST" className="w-full gap-5 flex flex-col">
          
          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2.5 border border-purple-100 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all text-base"
              placeholder="Your Name"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2.5 border border-purple-100 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all text-base"
              placeholder="you@example.com"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              name="message"
              required
              className="w-full px-4 py-2.5 border border-purple-100 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all text-base resize-y"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full h-[50px] flex items-center justify-center bg-[#7C3AED] text-white font-bold text-lg rounded-[6px] cursor-pointer hover:bg-[#4F46E5] transition-colors duration-200 shadow-sm mt-2 active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}