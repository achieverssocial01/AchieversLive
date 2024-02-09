import React, { useState } from 'react';

const GptCodeTest = () => {
  const [cards, setCards] = useState([
    { id: 1, content: 'First Card' },
    { id: 2, content: 'Second Card' },
    { id: 3, content: 'Third Card' },
    // Add more cards as needed
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4 ">
        <p>{cards[currentCardIndex].content}</p>
        <div className="mt-4">
          <button onClick={handlePrev} className='text-white'>Left</button>
          <button onClick={handleNext} className="ml-2 text-white">Right</button>
        </div>
      </div>
      <div className="w-1/2 p-4 bg-green-400">
        {cards.map((card, index) => (
          <div key={card.id} className={`card ${index === currentCardIndex ? 'visible' : 'hidden'}`}>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptCodeTest;
