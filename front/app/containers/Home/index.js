/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    configureAnchors({scrollDuration: 1000});
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
              <a href='#section1' className='link'><div>About Me</div></a>
              <a href='#' className='link'><div>Contact</div></a>
            </div>
          </div>
          <div></div>
          <div></div>
          <div className='icons'><a href='https://www.facebook.com/profile.php?id=100014534701453' target='_blank'><FaFacebook className='social'/></a><a href='https://www.linkedin.com/in/william-mosley-968a6a151/' target='_blank'><FaLinkedin className='social' /></a><a href='https://github.com/wmosley91' target='_blank'><FaGithub className='social' /></a></div>
        </div>
        <div className='content'>
          <p>
LOREM IPSUM GENERATOR
PLUGINS
ENGLISH
Lorem Ipsum Generator
Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!
GENERATED LOREM IPSUM

8
    GENERATE!
COPY  Icon copy  red
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Venenatis urna cursus eget nunc scelerisque viverra mauris. Praesent tristique magna sit amet. Morbi enim nunc faucibus a pellentesque sit amet. Vel elit scelerisque mauris pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Nam aliquam sem et tortor. Mi bibendum neque egestas congue quisque egestas diam in arcu. Libero volutpat sed cras ornare arcu dui vivamus arcu. Imperdiet proin fermentum leo vel orci. Velit aliquet sagittis id consectetur purus. Integer quis auctor elit sed vulputate mi sit amet. Sagittis purus sit amet volutpat consequat. Mauris rhoncus aenean vel elit. Vitae sapien pellentesque habitant morbi tristique senectus et. Auctor augue mauris augue neque. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. In fermentum et sollicitudin ac orci phasellus egestas tellus. Leo a diam sollicitudin tempor.

Sed augue lacus viverra vitae congue eu consequat ac. Odio pellentesque diam volutpat commodo. Fermentum odio eu feugiat pretium. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu dui vivamus arcu felis bibendum ut tristique. A arcu cursus vitae congue mauris rhoncus. In arcu cursus euismod quis viverra nibh cras. Aliquam purus sit amet luctus venenatis lectus. Amet facilisis magna etiam tempor. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Malesuada fames ac turpis egestas integer. Massa placerat duis ultricies lacus sed. Eget velit aliquet sagittis id consectetur purus. Sit amet venenatis urna cursus. Enim praesent elementum facilisis leo vel fringilla. Cursus in hac habitasse platea dictumst quisque sagittis. Sed tempus urna et pharetra. Lacinia at quis risus sed vulputate odio ut. Habitasse platea dictumst quisque sagittis purus. Amet dictum sit amet justo donec enim diam vulputate ut.

Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Velit ut tortor pretium viverra suspendisse. Eget sit amet tellus cras adipiscing enim. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Fermentum posuere urna nec tincidunt praesent. Venenatis lectus magna fringilla urna porttitor. Vitae proin sagittis nisl rhoncus. Bibendum at varius vel pharetra vel. Amet justo donec enim diam vulputate ut. Magna fringilla urna porttitor rhoncus. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Non nisi est sit amet facilisis magna etiam tempor orci. Euismod lacinia at quis risus sed. Eu ultrices vitae auctor eu. Condimentum lacinia quis vel eros. Libero volutpat sed cras ornare arcu dui vivamus arcu.

Sed velit dignissim sodales ut eu sem integer. Imperdiet nulla malesuada pellentesque elit. Feugiat in fermentum posuere urna nec tincidunt. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Vitae tempus quam pellentesque nec nam aliquam. Imperdiet dui accumsan sit amet. In vitae turpis massa sed elementum tempus egestas sed sed. Auctor elit sed vulputate mi sit amet. Volutpat diam ut venenatis tellus. Dolor purus non enim praesent elementum. Imperdiet sed euismod nisi porta lorem. Massa sapien faucibus et molestie ac. Sed arcu non odio euismod lacinia at. Ullamcorper sit amet risus nullam eget. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Lectus quam id leo in vitae turpis massa sed elementum. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl.

Nibh praesent tristique magna sit amet purus. Et ligula ullamcorper malesuada proin libero nunc. Lorem ipsum dolor sit amet consectetur adipiscing elit. Eget gravida cum sociis natoque. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Suspendisse sed nisi lacus sed viverra. Lacus viverra vitae congue eu. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Integer malesuada nunc vel risus. Scelerisque felis imperdiet proin fermentum leo. Volutpat blandit aliquam etiam erat velit scelerisque in. Id eu nisl nunc mi ipsum. Feugiat sed lectus vestibulum mattis ullamcorper velit. Etiam sit amet nisl purus in mollis nunc sed id. Turpis cursus in hac habitasse platea.

Aenean et tortor at risus viverra adipiscing at. Neque ornare aenean euismod elementum nisi. Tortor id aliquet lectus proin nibh. Sodales neque sodales ut etiam. Quam viverra orci sagittis eu volutpat odio. Ultrices vitae auctor eu augue ut. Eget aliquet nibh praesent tristique. At in tellus integer feugiat. Fermentum leo vel orci porta non pulvinar. Aenean sed adipiscing diam donec adipiscing. Volutpat blandit aliquam etiam erat velit scelerisque in. Libero volutpat sed cras ornare arcu dui vivamus. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.

Ipsum faucibus vitae aliquet nec ullamcorper. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Aliquet nec ullamcorper sit amet risus. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Et netus et malesuada fames. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Adipiscing tristique risus nec feugiat in fermentum posuere. Diam ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada bibendum arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. In dictum non consectetur a erat nam at. In nisl nisi scelerisque eu ultrices vitae. Convallis convallis tellus id interdum.

Sit amet tellus cras adipiscing enim eu turpis. Volutpat lacus laoreet non curabitur gravida arcu. Quam id leo in vitae turpis. Suspendisse ultrices gravida dictum fusce ut placerat. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Aliquam nulla facilisi cras fermentum odio eu feugiat. Euismod elementum nisi quis eleifend quam adipiscing vitae. Morbi tristique senectus et netus et malesuada fames. Neque volutpat ac tincidunt vitae semper. Enim diam vulputate ut pharetra sit. Sit amet consectetur adipiscing elit ut aliquam purus sit. Morbi tristique senectus et netus et malesuada fames ac turpis. Lectus mauris ultrices eros in cursus. Non sodales neque sodales ut etiam. Gravida dictum fusce ut placerat orci nulla pellentesque. Volutpat est velit egestas dui id ornare arcu odio. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus.

© 2015 — 2017

SHARE THE LOREM

OUR NETWORK

WORD COUNTER
WA
—SAI</p>
<ScrollableAnchor id={'section1'}>
          <div> Hello World </div>
        </ScrollableAnchor>
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
