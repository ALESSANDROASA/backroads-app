import React from 'react';
import {SocialLinks} from '../Data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="section footer">
      
      <PageLinks parentClass="footer-links" itemClass="footer-link"/>

      {/* <ul className="footer-links">
        {PageLinks.map((link) => {
          const {id, href, text} = link;
          return ( <li key ={id}>
                   <a href={href} className="footer-link">{text}</a>
                  </li>);
        })}
      </ul> */}

      <ul className="footer-icons">
        {SocialLinks.map((link) => {
           return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
