/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import FaCode from 'react-icons/lib/fa/code';
import FaConnectdevelop from 'react-icons/lib/fa/connectdevelop';
import FaTerminal from 'react-icons/lib/fa/terminal';

import './style.css';
import './styleM.css';


export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div className='filter'></div>
        <div className='head'>
          <div className='filler'></div>
          <div className='head-content'>
            <div className='title'>WMosley</div>
            <div className='head-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc neque, vulputate vel congue et, vestibulum sed sem. Nullam accumsan, risus vel volutpat</div>
            <div className='links'>
            <a href='#about' className='link'><div>About me</div></a>
              <a href='#contact' className='link'><div>Contact</div></a>
            </div>
          </div>
          <div></div>
          <div></div>
          <div className='icons'><a href='https://www.facebook.com/profile.php?id=100014534701453' target='_blank'><FaFacebook className='social'/></a><a href='https://www.linkedin.com/in/william-mosley-968a6a151/' target='_blank'><FaLinkedin className='social' /></a><a href='https://github.com/wmosley91' target='_blank'><FaGithub className='social' /></a></div>
        </div>
          <div className='content' id='about'>
            <div className='content-title'>My skills</div>
            <div className='content-content'>I possess a variety of expertise that aids in the development process</div>
            <div className='skills'>
              <div className='skill'>
                <div className='skill-icon'><FaTerminal className='skill-image' /></div>
                <div className='skill-title'>backend title?</div>
                <div className='skill-content'>some text about backend skills/apis or something some text about backend skills/apis or something some text about backend skills/apis or something</div>
              </div>
              <div className='skill'>
                <div className='skill-icon'><FaCode className='skill-image' /></div>
                <div className='skill-title'>arbitrary code title?</div>
                <div className='skill-content'>super cliche code icon, insert random code related skill here super cliche code icon, insert random code related skill here super cliche code icon, insert random code related skill here</div>
              </div>
              <div className='skill'>
                <div className='skill-icon'><FaConnectdevelop className='skill-image' /></div>
                <div className='skill-title'>front end title</div>
                <div className='skill-content'>icon seems flashy, add something about making shit pretty icon seems flashy, add something about making shit pretty icon seems flashy, add something about making shit pretty</div>
              </div>
            </div>
        </div>
        <div className='contact'  id='contact'>
          <div className='contact-title'>Still interested?</div>
          <a href='mailto:wmosley91@gmail.com?subject=Website+Ref' className='contact-link'><div>Email me</div></a>
          <div className='contact-end'>let's build something together</div>
        </div>
      <div className='foot'>
        <div className='foot-content'>hastily created by me 2017</div>
      </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
