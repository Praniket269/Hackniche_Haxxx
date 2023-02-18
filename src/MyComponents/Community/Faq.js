import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './FAQ.css'

export default function SimpleAccordion() {
  return (
    <div className="mainfaq">
      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accSum"
        >
          <Typography>What is the Ex Service Men Contributory Health Scheme?</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ECHS was authorised by Government of India on 30 Dec 2002, and has been introduced from 01 April 2003. It is a publicly funded medicare scheme for those who are ex-servicemen and pensioners & their eligible dependants, and will provide medical care through out-patient treatment at 227 Polyclinics all over India, and in-patient hospitalization & treatment through Military Hospitals and out-sourced Civil Hospitals & Diagnostic Centers at all these 227 locations, which will be empanelled for the purpose. Treatment/hospitalization in Service Hospitals will be available to ECHS members, subject to availability of speciality, medical staff and bed space.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accSum"
        >
          <Typography>Is there any age limit, medical condition and last date for joining the ECHS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Joining the ECHS is voluntary for those AFV/eligible persons who retired on or before 31 March 2003. There is no restriction on age or medical condition at the time of seeking membership or joining the scheme. It is also clarified that there is no last date for joining ECHS. However, this is to inform you that ESM who do not join ECHS will not be provided medical facilities at Service Hospitals after 31 Mar 08.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accSum"
        >
          <Typography>What are the methods of empanelment of hospitals and doctors with respect to each Polyclinic?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Hospitals desirous of empanelment are required to apply through application forms available at all Stn HQs. Inspection will be done by a Station Board of officers, comprising of the Station Cdr/his rep, SEMO, concerned specialists medical officers. The proceedings of the Board of Officers will be forwarded to Central Organisation ECHS through the chain of Command, for approval of Min of Defence. List of empanelled Hospitals/Diagnostic Centres & Specialist Consultants will be available at each Polyclinic. The updated list is also posted on ECHS website.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
