import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '../../../data/faqsAccordionData.json'

export default function AccordionUsage() {
  return (
    <>
    <h2 data-aos="zoom-in-up" className="text-5xl lg:text-3xl text-center font-bold mb-10">
        Frequently Asked <span className="text-[#4e3dff]">Questions</span>
      </h2>
    <div data-aos="slide-right" className='mx-20 mb-28 lg:mb-0'>
        {data.map((value, index)=>{
            return (
                <Accordion  key={index} className='text-3xl lg:text-xl mt-5 lg:mt-2 p-5 lg:p-0'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                   <p className='text-[#4e3dff] font-bold'>{value.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                  {value.answer}
                </AccordionDetails>
              </Accordion>
            )
        })}
     
    </div>
    </>
  );
}
