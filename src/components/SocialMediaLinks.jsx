import React from "react";
import GitHubLogo from "../svgs/GitHubLogo";
import LinkedInLogo from "../svgs/LinkedInLogo";
import SalesforceLogo from "../svgs/SalesforceLogo";
import SocialMediaLink from "./SocialMediaLink";

import './SocialMediaLinks.css';

const SocialMediaLinks = () => {

  const pressIco = (event) => {
    event.currentTarget.classList.add('clicked')
  };

  const releaseIco = (event) => {
    event.currentTarget.classList.remove("clicked");
  };


  const components = [
    {
      componentName: GitHubLogo,
      url: "https://github.com/maciejkrolpl/",
    },
    {
      componentName: LinkedInLogo,
      url: "https://www.linkedin.com/in/maciejkrolpl/",
    },
    {
      componentName: SalesforceLogo,
      url: "https://trailblazer.me/id/mkro",
    },
  ];

  return (
    <div className="social-media">
      {components.map((component, ix) => {
        const { componentName, url } = component;
        return (
          <SocialMediaLink
            componentName={componentName}
            url={url}
            key={ix}
            onMouseDown={pressIco}
            onMouseUp={releaseIco}
            onMouseMove={releaseIco}
          />
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;
