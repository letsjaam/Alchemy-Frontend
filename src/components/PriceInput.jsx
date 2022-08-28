function PriceInput({ price, unit }) {
  return (
    <div>
      <div className='mb-3'>
        <div className='border-2 border-gray-400 rounded-lg bg-gray-200  p-4 font-bold uppercase text-center text-xl text-gray-400'>
          {`${price}  ${unit.toUpperCase()}`}
        </div>
      </div>
    </div>
  );
}

export default PriceInput;
