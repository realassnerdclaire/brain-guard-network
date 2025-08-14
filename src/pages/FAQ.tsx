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
    { name: "FAQ", path: "/faq" },
    { name: "CONTACT", path: "/contact" }
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
    <div className="min-h-screen bg-gray-800 text-white relative overflow-hidden">
      {/* Neural Network Brain Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/lovable-uploads/31172ad7-ab22-45bf-89f3-b085c5db7d79.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Fixed Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-600/20">
        <div className="flex items-center justify-between p-4 md:p-6">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
                alt="XBrainer AI logo" 
                className="h-10 md:h-12 w-auto rounded-lg" 
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))',
                }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-500/20 blur-sm -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-white">
                XBrainer AI
              </span>
              <span className="text-xs md:text-sm font-medium text-white">
                Securing Neural Data in Real Time
              </span>
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-white bg-black/60 backdrop-blur-md border border-blue-600/30 rounded-lg px-3 py-2 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
            style={{
              boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)'
            }}
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span className="text-sm font-medium tracking-widest">MENU</span>
          </button>
        </div>
      </div>

      {/* Side Navigation Menu - Dark blue theme */}
      <div className={`fixed top-0 right-0 h-full w-56 bg-black/90 backdrop-blur-xl border-l border-blue-600/30 z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
        style={{
          boxShadow: 'inset 0 0 50px rgba(37, 99, 235, 0.1)'
        }}
      >
        <div className="p-4 pt-16">
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block w-full text-left text-white/80 hover:text-white py-1.5 px-2 text-sm font-medium transition-all duration-300 hover:bg-blue-600/10 hover:border-l-2 hover:border-blue-500 rounded-r"
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

      {/* Main Content - Futuristic design */}
      <div className="relative z-20 min-h-screen flex flex-col pt-32 px-8 pb-16">
        <div className="max-w-4xl mx-auto w-full">
          {/* Hero Section - Smaller headline */}
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Protecting Brain Data at the Speed of Thought
            </h1>
            <p className="text-xl text-white/80 mb-6">Real-time EEG & BCI security — preventing leaks before they happen.</p>
            <div className="flex justify-center mb-8">
              <div className="text-blue-400 text-2xl tracking-widest animate-pulse">⸻</div>
            </div>
            <h2 className="text-2xl font-bold text-blue-400 relative">
              FAQ – XBrainer AI
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </h2>
          </div>
          
          {/* FAQ Items - Enhanced futuristic cards */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {/* Glow effect - Blue theme */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-600/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="bg-black/60 backdrop-blur-xl border border-blue-600/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full text-left p-6 hover:bg-blue-600/5 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <span className="text-blue-400 font-bold text-lg" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}>{index + 1}. </span>
                        <span className="text-lg font-semibold text-white">{faq.question}</span>
                      </div>
                      <span className={`text-2xl text-blue-400 transition-all duration-300 flex-shrink-0 ${
                        openQuestion === index ? 'rotate-45 scale-110' : 'hover:scale-110'
                      }`}>+</span>
                    </div>
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 pb-6" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                      <div className="pl-8 border-l-2 border-blue-500/30">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section - Blue theme */}
          <div className="mt-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-blue-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-black/70 backdrop-blur-xl border border-blue-600/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Still Have Questions?</h2>
              <p className="text-white/80 mb-6">
                Can't find what you're looking for? Our team is here to help with any questions about neural data security.
              </p>
              <Link 
                to="/contact"
                className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                <span className="relative z-10">Contact Our Team</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

    </div>
  );
};

export default FAQ;