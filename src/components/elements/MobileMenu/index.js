import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import './styles.scss'

class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class MobileMenu extends Component {
  render () {
    return (
        <MenuWrap wait={10} side="right">
            <Menu id="elastic" isOpen={this.props.isOpen} onStateChange={(state) => this.props.toggleMenu(state)} right={true}>
                <div className="icon brands alt gold" ><AnchorLink href="#first" onClick={() => this.props.toggleMenu({ isOpen: false })}>Now Playing</AnchorLink></div>
                <div className="icon brands alt gold" ><AnchorLink href="#second" onClick={() => this.props.toggleMenu({ isOpen: false })}>Reviews</AnchorLink></div>
                <div className="icon brands alt gold" ><AnchorLink href="#cta" onClick={() => this.props.toggleMenu({ isOpen: false })}>Groups</AnchorLink></div>
                <div className="icon brands alt gold" ><AnchorLink href="#faq" onClick={() => this.props.toggleMenu({ isOpen: false })}>FAQ</AnchorLink></div>
                <div className="icon brands alt gold" ><a href="https://dellsescaperooms.resova.us/gift-voucher" onClick={() => this.props.toggleMenu({ isOpen: false })}>Gift Vouchers</a></div>
                <div className="icon brands alt gold" ><a href="https://dellsescaperooms.resova.us/" onClick={() => this.props.toggleMenu({ isOpen: false })}>Book Now</a></div>
            </Menu>
        </MenuWrap>
    );
  }
}

export default MobileMenu;

