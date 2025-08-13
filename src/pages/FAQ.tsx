import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "VISION", path: "/vision" },
    { name: "OVERVIEW", path: "/overview" },
    { name: "COMPLIANCE & STANDARDS", path: "/compliance" },
    { name: "USE CASES", path: "/use-cases" },
    { name: "SECURITY & PRIVACY", path: "/security" },
    { name: "PARTNERS & COLLABORATORS", path: "/partners" },
    { name: "RESOURCES", path: "/resources" },
    { name: "CAREERS", path: "/careers" },
    { name: "FAQ", path: "/faq" }
  ];

  const faqData = [
    {
      question: "How fast does your system secure brain data?",
      answer: "We protect EEG and BCI streams in milliseconds, ensuring that even fleeting neural signals are never exposed to unauthorized access."
    },
    {
      question: "What types of devices can integrate with your system?",
      answer: "From consumer-grade EEG headsets to clinical-grade BCI implantables — our adapters and SDKs enable plug-and-play integration."
    },
    {
      question: "Does your security layer affect signal quality or latency?",
      answer: "No — encryption and intrusion detection run in parallel, with zero signal degradation and negligible added latency."
    },
    {
      question: "Can your platform detect tampering in real time?",
      answer: "Yes — our system instantly flags abnormal patterns, blocks malicious requests, and logs attempts for compliance audits."
    },
    {
      question: "Is your solution future-proof for emerging neurotech standards?",
      answer: "Absolutely — our modular architecture enables fast updates for new encryption methods, device protocols, and regulations."
    },
    {
      question: "Do you provide APIs for developers?",
      answer: "Yes — REST and WebSocket APIs allow developers to build secure neurotech apps without reinventing core security infrastructure."
    },
    {
      question: "How do you handle device interoperability issues?",
      answer: "Our cross-device validation pipeline normalizes all incoming streams, ensuring consistent performance across manufacturers and formats."
    },
    {
      question: "What happens if the network drops mid-stream?",
      answer: "We buffer encrypted data locally and auto-sync when the connection is restored — with full integrity maintained."
    },
    {
      question: "Can organizations self-host your system?",
      answer: "Yes — deployment options include cloud, on-premise, or hybrid to meet varied compliance and control needs."
    },
    {
      question: "How is XBrainer AI different from traditional cybersecurity?",
      answer: "We specialize in neuro-specific threats, securing cognitive data at the raw-signal level — before breaches can even occur."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/lovable-uploads/27f96d4c-bee3-4923-8c3e-57550bedb369.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Logo and Company Info */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-4">
        <img 
          src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
          alt="XBrainer AI logo" 
          className="h-12 w-auto mix-blend-screen opacity-90 rounded-lg" 
          style={{
            filter: 'blur(0.1px)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight leading-tight text-white">
            XBrainer AI
          </span>
          <span className="text-sm font-medium text-white/70">
            Securing Neural Data in Real Time
          </span>
        </div>
      </div>

      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 z-50 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 hover:bg-black/40 transition-all"
      >
        {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        <span className="text-sm font-medium tracking-widest menu-text">MENU</span>
      </button>

      {/* Side Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-56 bg-black/80 backdrop-blur-md border-l border-white/20 z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 pt-16">
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block w-full text-left text-white/80 hover:text-white py-1.5 px-2 text-sm font-medium transition-colors hover:bg-white/5 rounded"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col pt-32 px-8 pb-16">
        <div className="max-w-4xl mx-auto w-full">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Protecting Brain Data at the Speed of Thought</h1>
            <p className="text-xl text-white/80 mb-6">Real-time EEG & BCI security — preventing leaks before they happen.</p>
            <div className="flex justify-center mb-8">
              <div className="text-white/60 text-2xl tracking-widest">⸻</div>
            </div>
            <h2 className="text-2xl font-bold text-[#6C63FF]">FAQ – XBrainer AI</h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-4">
                      <span className="text-[#6C63FF] font-bold text-lg">{index + 1}. </span>
                      <span className="text-lg font-semibold text-white">{faq.question}</span>
                    </div>
                    <span className={`text-2xl text-[#6C63FF] transition-transform duration-200 flex-shrink-0 ${
                      openQuestion === index ? 'rotate-45' : ''
                    }`}>+</span>
                  </div>
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-8">
                      <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">Still Have Questions?</h2>
            <p className="text-white/80 mb-6">
              Can't find what you're looking for? Our team is here to help with any questions about neural data security.
            </p>
            <button className="bg-gradient-to-r from-[#6C63FF] to-[#A855F7] text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Overlay to close menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default FAQ;