import React from 'react';
import Twemoji from 'react-twemoji';
import './style.scss';

import { emojis } from '../../data/emojis';

const Navbar = () => {
  return (
    <div className="ma-navbar">
      {emojis.map((emoji) => (
        <Twemoji key={emoji.name} options={{ className: 'ma-navbar__emoji' }}>
          <span role="img" aria-label={emoji.name} title={emoji.description}>
            {emoji.value}
          </span>
        </Twemoji>
      ))}

      <Twemoji key="configuration" options={{ className: 'ma-navbar__emoji' }}>
        <span role="img" aria-label="Configuration" title="Settings">
          ⚙️
        </span>
      </Twemoji>
    </div>
  );
};

export default Navbar;
