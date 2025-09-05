import React, { useState } from "react";
import styled from "styled-components";

const faqData = [
  {
    question: "How do I join CUAC?",
    answer: "Joining is easy! There’s no application or interview, just show up to our meetings. New members can join all year round."
  },
  {
    question: "How do I stay updated?",
    answer: "Join our mailing list and follow our Instagram! We send out reminders for every general body meeting and build session, as well as any social events."
  },
  {
    question: "Do I need prior aerospace/engineering experience?",
    answer: "Whether you’re a total beginner or an aviation enthusiast, you’re welcome here. We provide all the training you need to get up to speed on design, manufacturing, and testing an RC aircraft."
  },
  {
    question: "Are students from non-engineering majors welcome?",
    answer: "Absolutely! We welcome students from all majors. There are many ways to get involved beyond the technical side, like managing sponsorship outreach, writing project reports, and maintaining our social media and website platforms."
  },
  {
    question: "What kind of time commitment does the club require?",
    answer: "Members can decide how much time they dedicate to the team. Attendance at weekly general body meetings is expected, while weekend build sessions are optional. Time commitments may also increase as we approach competition deadlines."
  }
];

const FAQContainer = styled.div`
    margin: 3rem;
    margin-top: 0rem;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 0rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem;
  transition: color 0.2s;

  &:hover {
    color: #007bff;
  }
`;

const Chevron = styled.span`
  display: inline-block;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
`;

const Answer = styled.div`
  padding: 0.5rem 0 1rem 0;
  line-height: 1.5;
`;


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      {faqData.map((item, index) => (
        <div key={index}>
          <Question onClick={() => toggleFAQ(index)}>
            {item.question}
            <Chevron open={openIndex === index}>▶</Chevron> {/* simple arrow */}
          </Question>
          {openIndex === index && <Answer>{item.answer}</Answer>}
        </div>
      ))}
    </FAQContainer>
  );
};
