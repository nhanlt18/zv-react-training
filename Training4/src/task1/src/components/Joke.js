import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import joke from '../apis/joke';
// import debounce from '../utils/debounce';
// import throttle from '../utils/throttle';

const Joke = () => {
  const [loading, setLoading] = useState(true);
  const [jokeStory, setJokeStory] = useState('');

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);

    const respond = await joke.get('random_joke');

    setLoading(false);
    setJokeStory(respond.data);
  };

  const onMoreJoke = _.debounce(() => {
    fetch();
  }, 500);

  return (
    <div>
      <button onClick={onMoreJoke}>Get more joke</button>
      <div>
        {loading ? (
          '...loading'
        ) : (
          <JokeElement
            setup={jokeStory.setup}
            punchLine={jokeStory.punchline}
          />
        )}
      </div>
    </div>
  );
};

const JokeElement = ({ setup, punchLine }) => {
  return (
    <div>
      <p>{setup}</p>
      <h2>{punchLine}</h2>
    </div>
  );
};

export default Joke;
