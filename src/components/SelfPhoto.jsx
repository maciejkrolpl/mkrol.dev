import React from 'react';
import maciek from '../images/self-photo.png';
import './SelfPhoto.css';

const SelfPhoto = () => (
  <div className="selfie-sticked">
    <img src={maciek} className="selfie" />
  </div>
);

export default SelfPhoto;
