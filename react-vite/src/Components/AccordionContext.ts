import { createContext, useContext } from "react";
export const AccordionContext = createContext(null);
export const AccordionItemContext = createContext(null)

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("useAccordion should use inside the <Accordion />");
  }
  return context;
}

export function useAccordionItem() {
  const context = useContext(AccordionItemContext);
  if (context === undefined) {
    throw new Error("useAccordion should use inside the <Accordion />");
  }
  return context;
}
