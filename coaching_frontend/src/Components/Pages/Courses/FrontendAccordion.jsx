import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FrontendAccordion() { // Renamed component to FrontendAccordion
  return (
    <div className='mt-10'>
      <Accordion className='w-full p-3 lg:p-0 lg:w-2/4'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className='text-5xl lg:text-xl font-bold'>Course Overview</p>
        </AccordionSummary>
        <AccordionDetails>
            <ul className='text-3xl lg:text-lg space-y-2 list-disc pl-5'>
                <li>Introduction to Frontend Development</li>
                <li>Importance of Frontend Skills in Web Development</li>
                <li>Overview of the Course Structure and Goals</li>
            </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className='w-full p-3 lg:p-0 lg:w-2/4'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className='text-5xl lg:text-xl font-bold'>Getting Started</p>
        </AccordionSummary>
        <AccordionDetails>
            <ul className='text-3xl lg:text-xl space-y-2 list-disc pl-5'>
                <li>Setting Up the Development Environment</li>
                <li>Introduction to IDEs and Text Editors</li>
                <li>Installing Essential Tools (e.g., Node.js, Git)</li>
            </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FrontendAccordion;
