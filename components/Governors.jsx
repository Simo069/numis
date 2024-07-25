import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";


export default function Governors({items}) {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">

      {items.map((item, index) => (
  <AccordionItem value={`item-${index}`} key={index}>
    <AccordionTrigger>
      <span className="font-bold text-xl">{item.name} ( {item.data} )</span>
    </AccordionTrigger>
    <AccordionContent>
      <div>
        <Image
          src={item.image}
          width={400}
          height={400}
          className="object-cover" // fixed typo: should be 'object-cover'
          alt={item.name} // added alt attribute for accessibility
        />
        <p className="text-xl font-semibold mt-10" >{item.data}</p> {/* Dynamically displaying data */}
      </div>
    </AccordionContent>
  </AccordionItem>
))}
        
        {/* <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </>
  );
}
