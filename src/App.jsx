import { useState, useEffect } from "react";

function App() {
  const quotesByTone = {

    happy: [
      "Happiness is not by chance, but by choice.",
      "Smile, it's free therapy.",
      "Happiness is a direction, not a place.",
    ],

    sad: [
      "Tears come from the heart and not from the brain.",
      "Sadness flies away on the wings of time.",
      "Every human walks around with a certain kind of sadness.",
    ],

    motivational: [
      "Push yourself, because no one else is going to do it for you.",
      "Great things never come from comfort zones.",
      "Dream it. Wish it. Do it.",
    ],

    funny: [
      "I'm on a seafood diet. I see food and I eat it.",
      "Life is short. Smile while you still have teeth.",
      "My bed is a magical place where I remember everything I forgot to do.",
    ],
  };

  const [tone, setTone] = useState("happy");
  const [quote, setQuote] = useState("");


  const generateQuote = () => {
    const selectedQuotes = quotesByTone[tone];
    const randomIndex = Math.floor(Math.random() * selectedQuotes.length);
    setQuote(selectedQuotes[randomIndex]);
  };

  
  useEffect(() => {
    generateQuote();
  }, [tone]);

  return (
    <div className="flex items-center justify-center h-screen bg-orange-500px">
      <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Quotes Generator Website</h1>

        <h1 className="mb-2">Select tone</h1>
        

        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="border px-3 py-2 rounded mb-4"
        >
          <option value="motivational">Motivational</option>
          <option value="funny">Funny</option>
          <option value="sad">Sad</option>
          <option value="happy">Happy</option>
        </select>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
          <p className="text-xl italic mb-4">{quote}</p>
          <button
            onClick={generateQuote}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Generate new quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
