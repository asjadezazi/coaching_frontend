import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '../../../data/frontendAcoordianData.json'; // Assuming this is the JSON file

function FrontendAccordion() {
  return (
    <div className='mt-10'>
      {data.map((section, index) => (
        <Accordion key={index} className='w-full mt-2 p-3 lg:p-0 lg:w-2/4'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <p className='text-5xl text-[#4e3dff] lg:text-xl font-bold'>{section.title}</p>
          </AccordionSummary>
          <AccordionDetails>
            {section.contents ? (
              section.contents.map((subSection, idx) => (
                <div key={idx} className='mb-5'>
                  <h3 className='text-4xl lg:text-lg  font-semibold'>{subSection.subtitle}</h3>
                  <ul className='text-3xl text-slate-600 lg:text-lg space-y-2 list-disc pl-5'>
                    {subSection.content.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className='text-3xl lg:text-lg space-y-2 list-disc pl-5'>
                {section.content.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FrontendAccordion;
