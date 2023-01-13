import React from 'react';
import DisplayName from './components/DisplayName';
import SelfPhoto from './components/SelfPhoto';
import SocialMediaLinks from './components/SocialMediaLinks';
import Resume from './components/Resume';

import './styles.css';

const App = () => {
  return (
    <div className="wholesome">
      <SelfPhoto />
      <div className="content">
        <DisplayName />
        <SocialMediaLinks />
        <Resume />
      </div>
    </div>
  );
};

export default App;
