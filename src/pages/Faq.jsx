import { useState } from 'react';
import Accordion from '../components/Accordion';
const data = [
  {
    question: 'What is your name?',
    answer: 'Michael',
    id: 1,
  },
  {
    question: 'Where are you from?',
    answer: 'Paris',
    id: 2,
  },
  {
    question: 'How old are you ',
    answer: '99',
    id: 3,
  },
];

function Faq() {
  const [selected, setSelected] = useState(null);
  const handleClick = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  console.log('selected', selected);
  return (
    <>
      <div className='pt-16 w-[400px] md:w-[480px] '>
        {data.map((faq, index) => (
          <Accordion
            question={faq.question}
            answer={faq.answer}
            selected={selected}
            index={index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
}

export default Faq;
