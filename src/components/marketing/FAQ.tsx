import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl mb-4">Protecting Brain Data at the Speed of Thought</h2>
        <p className="text-lg text-muted-foreground mb-2">Real-time EEG & BCI security — preventing leaks before they happen.</p>
        <div className="text-center text-muted-foreground mb-8">⸻</div>
        <h3 className="text-2xl font-semibold mb-8">FAQ – XBrainer AI</h3>
      </div>
      <div className="mx-auto mt-8 max-w-4xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How fast does your system secure brain data?</AccordionTrigger>
            <AccordionContent>
              We protect EEG and BCI streams in milliseconds, ensuring that even fleeting neural signals are never exposed to unauthorized access.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What types of devices can integrate with your system?</AccordionTrigger>
            <AccordionContent>
              From consumer-grade EEG headsets to clinical-grade BCI implantables — our adapters and SDKs enable plug-and-play integration.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Does your security layer affect signal quality or latency?</AccordionTrigger>
            <AccordionContent>
              No — encryption and intrusion detection run in parallel, with zero signal degradation and negligible added latency.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can your platform detect tampering in real time?</AccordionTrigger>
            <AccordionContent>
              Yes — our system instantly flags abnormal patterns, blocks malicious requests, and logs attempts for compliance audits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is your solution future-proof for emerging neurotech standards?</AccordionTrigger>
            <AccordionContent>
              Absolutely — our modular architecture enables fast updates for new encryption methods, device protocols, and regulations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Do you provide APIs for developers?</AccordionTrigger>
            <AccordionContent>
              Yes — REST and WebSocket APIs allow developers to build secure neurotech apps without reinventing core security infrastructure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>How do you handle device interoperability issues?</AccordionTrigger>
            <AccordionContent>
              Our cross-device validation pipeline normalizes all incoming streams, ensuring consistent performance across manufacturers and formats.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>What happens if the network drops mid-stream?</AccordionTrigger>
            <AccordionContent>
              We buffer encrypted data locally and auto-sync when the connection is restored — with full integrity maintained.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Can organizations self-host your system?</AccordionTrigger>
            <AccordionContent>
              Yes — deployment options include cloud, on-premise, or hybrid to meet varied compliance and control needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>How is XBrainer AI different from traditional cybersecurity?</AccordionTrigger>
            <AccordionContent>
              We specialize in neuro-specific threats, securing cognitive data at the raw-signal level — before breaches can even occur.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;