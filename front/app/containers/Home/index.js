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
import FaCheck from 'react-icons/lib/fa/check';
import GoX from 'react-icons/lib/go/x';
import Skill from 'components/Skill';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import './style.css';
import './styleM.css';


export default class Home extends React.PureComponent {
  constructor()
  {
    super();
    this.state = {
      open: false,
      name: '',
      email: '',
      submitHover: false,
      cancelHover: false
    };
  }



  renderForm = () => {
    const styles = {
      slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
    };
    if(this.state.open == true)
    {
      let submit = 'Submit';
      let cancel = 'Cancel';
      if(this.state.submitHover)
      {
        submit = <FaCheck/>
      }
      if(this.state.cancelHover)
      {
        cancel = <GoX/>
      }
      return (
        <StyleRoot>
          <div className='form' style={styles.slideInRight}>
            <input type='text' placeholder='NAME' value={this.state.name} onChange={this.handleName} onFocus={this.handleFocus} onBlur={this.handleBlurName} className='form-input'/>
            <input type='text' placeholder='EMAIL' value={this.state.email} onChange={this.handleEmail} onFocus={this.handleFocus} onBlur={this.handleBlurEmail} className='form-input'/>
            <div className='form-buttons'>
              <button className='form-submit' onMouseEnter={this.handleMouseEnterSubmit} onMouseLeave={this.handleMouseLeaveSubmit} value='Submit'>{submit}</button>
              <button  className='form-cancel' onClick={this.handleForm} onMouseEnter={this.handleMouseEnterCancel} onMouseLeave={this.handleMouseLeaveCancel} value='Cancel'>{cancel}</button>
            </div>
          </div>
        </StyleRoot>
      );
    }
  }

  handleMouseEnterSubmit = (event) =>
  {
    if(event.target.value === 'Submit')
    {
      this.setState({
        submitHover: true
      })
    }
  }

  handleMouseLeaveSubmit = () =>
  {
    this.setState({
      submitHover: false
    })
  }

  handleMouseEnterCancel = (event) =>
  {
    if(event.target.value === 'Cancel')
    {
      this.setState({
        cancelHover: true
      })
    }
  }

  handleMouseLeaveCancel = () =>
  {
    this.setState({
      cancelHover: false
    })
  }

  handleBlurName = (event) => {
    if(event.target.value == '')
    {
      event.target.placeholder = 'NAME';
    }
  }

  handleBlurEmail = (event) => {
    if(event.target.value == '')
    {
      event.target.placeholder = 'EMAIL';
    }
  }

  handleFocus = (event) => {
    event.target.placeholder = '';
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleForm = () => {
   this.setState({
     open: !this.state.open,
     name: '',
     email: '',
     cancelHover: false,
     submitHover: false
   })
  }

  render() {
    let transitionStyle = {transition: 'background-color 1.5s'};
    if(this.state.open)
    {
      transitionStyle = {transition: 'none', backgroundColor: '#FED766'};
    }
    let message = 'Contact me';
    if(this.state.open)
    {
      message = 'Information';
    }
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div className='filter'></div>
        <div className='head'>
          <div className='filler'> <img src={require('../../images/evqevqev.svg')} className='logo'/></div>
          <div className='head-content'>
            <div className='title'>D.Mosley</div>
            <div className='head-text'>Work in progress >>>> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc neque, vulputate vel congue et, vestibulum sed sem. Nullam accumsan, risus vel volutpat</div>
            <div className='links'>
              <a href='#about' className='link'><div>About me</div></a>
              <a href='#contact' className='link'><div>Contact</div></a>
            </div>
          </div>
          <div></div>
          <div></div>
          <div className='icons'>
            <a href='https://www.facebook.com/profile.php?id=100014534701453' target='_blank'><FaFacebook className='social'/></a>
            <a href='https://www.linkedin.com/in/william-mosley-968a6a151/' target='_blank'><FaLinkedin className='social' /></a>
            <a href='https://github.com/wmosley91' target='_blank'><FaGithub className='social' /></a>
          </div>
        </div>
          <div className='content' id='about'>
            <div className='content-title'>My skills</div>
            <div className='content-content'>I possess a variety of expertise that aids in the development process</div>
            <div className='skills'>
              <Skill icon={<FaTerminal/>} title={'backend title?'} content={'some text about backend skills/apis or something some text about backend skills/apis or something some text about backend skills/apis or something'} />
              <Skill icon={<FaCode/>} title={'arbitrary code title?'} content={'super cliche code icon, insert random code related skill here super cliche code icon, insert random code related skill here super cliche code icon, insert random code related skill here'} />
              <Skill icon={<FaConnectdevelop/>} title={'front end title?'} content={'icon seems flashy, add something about making shit pretty icon seems flashy, add something about making shit pretty icon seems flashy, add something about making shit pretty'} />
            </div>
        </div>
        <div className='contact'  id='contact'>
          <div className='contact-title'>Have an idea for a project?</div>
          <button onClick={this.handleForm} className='contact-link' style={transitionStyle} disabled={this.state.open}>{message}</button>
          {this.renderForm()}
          <div className='contact-end'>Let's build something together</div>
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
