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
      question: "What is XBrainer AI?",
      answer: "XBrainer AI is a comprehensive neural data security platform that provides real-time protection for EEG and BCI devices, ensuring your brain data receives the same level of protection as your most sensitive financial information."
    },
    {
      question: "How does real-time neural data protection work?",
      answer: "Our platform continuously monitors neural data streams using advanced AI algorithms to detect anomalies and threats in real-time, with sub-millisecond response times that don't interfere with your device's performance."
    },
    {
      question: "Is XBrainer AI compliant with privacy regulations?",
      answer: "Yes, our platform is designed to comply with HIPAA, GDPR, and other major privacy regulations. We implement privacy by design principles and provide comprehensive audit trails for regulatory compliance."
    },
    {
      question: "What types of neural devices does XBrainer AI support?",
      answer: "We support a wide range of EEG devices, brain-computer interfaces (BCIs), and other neural monitoring equipment used in clinical, research, and consumer applications."
    },
    {
      question: "How do you ensure data privacy and user control?",
      answer: "We implement end-to-end encryption, zero-trust architecture, and granular privacy controls that give users complete sovereignty over their neural data. Users can control what data is collected, how it's processed, and who has access."
    },
    {
      question: "What is the latency impact on neural devices?",
      answer: "Our security layer is designed for ultra-low latency with sub-millisecond processing times, ensuring that security measures don't interfere with real-time neural applications or user experience."
    },
    {
      question: "Can XBrainer AI integrate with existing systems?",
      answer: "Yes, our platform is designed for easy integration with existing neural device ecosystems, research platforms, and clinical systems through standardized APIs and protocols."
    },
    {
      question: "What makes neural data security different from traditional data security?",
      answer: "Neural data is uniquely sensitive as it represents thoughts, intentions, and cognitive patterns. It requires specialized protection against new types of attacks and unprecedented privacy controls that traditional security solutions weren't designed to handle."
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <span className={`text-2xl text-[#6C63FF] transition-transform duration-200 ${
                      openQuestion === index ? 'rotate-45' : ''
                    }`}>+</span>
                  </div>
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
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