function Accordion({ question, answer, selected, index, ...rest }) {
  return (
    <div
      className='bg-gray-200 max-w-[480px] rounded-lg mx-auto my-5  p-5'
      {...rest}
    >
      <div className='flex justify-between cursor-pointer'>
        <h3 className='font-bold'>{question}</h3>
        {selected === index ? '-' : '+'}
      </div>
      <div
        className={`h-[0px] overflow-hidden transition-all duration-500 ${
          selected === index ? ' h-[45px] opacity-100 ' : 'opacity-0 '
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Accordion;
