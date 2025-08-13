import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-3 text-muted-foreground">What partners ask us when securing neural data streams.</p>
      </div>
      <div className="mx-auto mt-8 max-w-2xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Do you decode thoughts?</AccordionTrigger>
            <AccordionContent>
              No. XBrainer is purely a security and governance layer for neural signals. We protect data; we don’t interpret it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do you handle consent?</AccordionTrigger>
            <AccordionContent>
              Consent rules are authored by the user (or institution) and enforced in microseconds before any read—grant, revoke, and scope access in real time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is there a performance impact?</AccordionTrigger>
            <AccordionContent>
              The pipeline is optimized for streaming EEG with minimal overhead, using hardware-friendly primitives and session-specific keys.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
