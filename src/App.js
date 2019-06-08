import React from 'react';
import './App.css';
import {Jumbotron, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const quotes = [
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "Mark Twain"
  },
  {
    quote: "Love is a serious mental disease.",
    author: "Plato"
  },
  {
    quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.",
    author: "Leonardo Da Vinci"
  },
  { 
    quote: "It is our choices, that show what we truly are, far more than our abilities.", 
    author: "J. K Rowling" 
  },
  {
    quote: "If you want to be happy, be.",
    author: "Leo Tolstoy"
  },
  {
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author: "Steve Jobs"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde"
  }
];

const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const Tweet = props => {
  return (
    <Button variant="outline-light" className="twitterButton">
      <a 
        id="tweet-quote" 
        href={"https://www.twitter.com/intent/tweet".concat(props.tweet)} 
        rel="noopener noreferrer"
        target="_blank"
      >
      <FontAwesomeIcon icon={faTwitter} />
      </a>
    </Button>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    let index = getRandomInt(quotes.length);

    this.state = {
      quote: quotes[index].quote,
      author: quotes[index].author
    };
  }

  handleClick() {
    console.log("Click");    
    let index = getRandomInt(quotes.length);
    do {
      index = getRandomInt(quotes.length);
    }
    while (this.state.quote === quotes[index].quote)
             
    this.setState(prevState => ({
      quote: quotes[index].quote,
      author: quotes[index].author
    }));
  };

  render() {
    return (
      <div className="App">
        <Jumbotron id="quote-box">
          <blockquote className="quote-text">
            <FontAwesomeIcon icon={faQuoteLeft} size="2x"/> <span id="text">{this.state.quote}</span>
          </blockquote>
          <div className="quote-author">
            - <span id="author">{this.state.author}</span>
          </div>
          <Button id="new-quote" variant="outline-light" onClick={this.handleClick}>New quote</Button> 
          <Tweet
            tweet={encodeURI(
              "?hashtags=quotes&text="
              .concat(this.state.quote)
              .concat(" ")
              .concat(this.state.author)
            )}
          />
        </Jumbotron>
      </div>
    );
  }
}

export default App;
