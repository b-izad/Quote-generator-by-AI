import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
import Header from './Header';
import Footer from './Footer';

function App() {
  const [quote, setQuote] = useState('');
  const [mood, setMood] = useState('');

  const getQuote = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
   
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';




    try {
      const response = await axios.post(apiUrl, {
        prompt: `Generate a quote that makes my ${mood} better:`,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 0.8,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      const generatedQuote = response.data.choices[0].text.trim();
      setQuote(generatedQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
   
    <div className="App">
       <Header/>
      <h1>Empower Your Emotions with Personalized Motivational Quotes!</h1>
      <div className="container">
    <div className="half">
      <div className="mood-selector">
        <label htmlFor="mood">Choose your mood:</label>
        <select
          id="mood"
          value={mood}
          onChange={(event) => setMood(event.target.value)}
        >
          <option value="">Select a mood</option>
          <option value="anxious">anxious</option>
          <option value="sad">Sad</option>
          <option value="unmotivated">unmotivated</option>
          <option value="tired">Tired</option>
        </select>
      </div>
      

      <button onClick={getQuote}>Generate Quote</button>
      </div>
      <div className="half">
      <p>{quote}</p>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
