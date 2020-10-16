// /* global chrome */
import React from 'react';
import Main from './containers/Main';
// you don't have to do your CSS like this, but one of the benefits of Shadow Dom
// is encapsulating your styles from the target webpage (prevent collusion, etc)
// import { styles } from './_Extension.css';

const App = () => {

  return (
    <>
      <Main />
    </>
  );
}

export default App;
