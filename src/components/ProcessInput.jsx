function ProcessInput({ tier, process, onClick, selected }) {
  return (
    <div>
      <div className='mb-3' onClick={onClick}>
        <div
          className={`transition-all border-2 border-gray-400 rounded-lg bg-gray-200 p-4 font-bold uppercase text-xl text-gray-400 hover:bg-orange-200 hover:border-black hover:text-black ${
            selected === tier && 'bg-orange-200 border-black text-black'
          }`}
        >
          {`T${tier} - ${process.toUpperCase()}`}
        </div>
      </div>
    </div>
  );
}

export default ProcessInput;
