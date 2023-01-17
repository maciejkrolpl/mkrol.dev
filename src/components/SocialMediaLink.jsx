import React from 'react';
import './SocialMediaLink.css';

const SocialMediaLink = (props) => {
  const { componentName: TagName, url, onMouseDown, onMouseMove, onMouseUp } = props;
  return (
    <a
      href={url}
      target="_blank"
      className="social-media-link"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      rel="noreferrer">
      <TagName />
    </a>
  );
};

export default SocialMediaLink;
