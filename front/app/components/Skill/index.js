/**
*
* Skill
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Skill extends React.PureComponent {
  render() {
    return (
      <div className='skill'>
        <div className='skill-icon'>{this.props.icon}</div>
        <div className='skill-title'>{this.props.title}</div>
        <div className='skill-content'>{this.props.content}</div>
      </div>
    );
  }
}

Skill.contextTypes = {
  router: React.PropTypes.object
};
