import React, { useState, useEffect } from 'react';
import './RQuote.css';
import ReloadIcon from '../Assets/Reload-icon.webp';
import XIcon from '../Assets/x-logo.svg';

const RQuote = () => {
  const [quote, setQuote] = useState({
    text: "If you want to pay without looking at the price tag. You must work without looking at the clock",
    author: "Unknown",
  });

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const loadQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const quotesData = await response.json();
      setQuotes(quotesData);
    };

    loadQuotes();
  }, []);

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
  };

  return (
    <div className='Container'>
      <div className='quote'>{quote.text}</div>
      <div className='line'></div>
      <div className='bottom'>
        <div className='author'>- {quote.author.split(',')[0]}</div>
        <div className='icons'>
          <img src={ReloadIcon} onClick={random} alt="Reload" />
          <img src={XIcon} alt="XIcon" onClick={twitter} />
        </div>
      </div>
    </div>
  );
};

export default RQuote;
