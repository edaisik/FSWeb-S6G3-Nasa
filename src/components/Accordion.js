import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const Description = (props) => {
  const { data } = props;
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Description</AccordionHeader>
          <AccordionBody accordionId="1">{data.explanation}</AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Description;
