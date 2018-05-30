import React, { Component } from 'react';
import Link from 'next/link';
import MenuLink from './MenuLink';
import SocMedia from './SocMedia';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          id: 'about',
          title: 'About'
        }, {
          id: 'rescue',
          title: 'Animal Rescue',
          subMenu: [
            {
              id: 'tnr',
              title: 'Feral Cats & TNR'
            }, {
              id: 'getinvolved',
              title: 'Get Involved'
            }
          ]
        }, {
          id: 'ourcats',
          title: 'Our Cats'
        }, {
          id: 'adoption',
          title: 'Adoption',
          subMenu: [
            {
              id: 'adoptfaq',
              title: 'FAQ'
            }, {
              id: 'adoptapp',
              title: 'Adoption App'
            }
          ]
        }, {
          id: 'foster',
          title: 'Foster',
          subMenu: [
            {
              id: 'fosterfaq',
              title: 'FAQ'
            }, {
              id: 'fosterapp',
              title: 'Foster App'
            }
          ]
        }
      ],
      menuOpen: [ false, false, false, false, false ]
    }
    this.menuToggle = (idx) => (evt) => {
      const newArr = this.state.menuOpen.slice();
      newArr[idx] = !this.state.menuOpen[idx];
      this.setState({ menuOpen: newArr });
    }
  }

  handleClick(evt) {
    const windowDiv = document.getElementById('window-div');
    const yCoord = windowDiv.getBoundingClientRect().top;
    window.scrollTo({
      top: yCoord,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="header">
        <Link prefetch href="/">
          <img src="/static/bbawc_logo.png" alt="Brooklyn Bridge Animal Welfare Coalition"/>
        </Link>
        {this.state.menu.map((linkObj, idx) => (
          <MenuLink
            key={linkObj.id}
            menuItem={linkObj}
            idx={idx}
            menuOpen={this.state.menuOpen}
            menuToggle={this.menuToggle}
            handleClick={this.handleClick}
          />
        ))}
        <h3>info@bbawc.org</h3>
        <h3>#bbawc</h3>
        <SocMedia />

        <style jsx>{`
          #header {
            box-sizing: border-box;
            width: 100vw;
            padding: 1em;
          }
          img {
            margin: 1.5em 0 1.5em;
            width: 100%;
            cursor: pointer;
          }
          @media (min-width: 426px) {
            #header {
              box-sizing: border-box;
              width: 300px;
              flex: none;
              display: inline-flex;
              flex-direction: column;
              padding: 1em;
            }
            img {
              margin: 1.5em 0 1.5em;
              width: 100%;
              max-width: 400px;
              flex: none;
              cursor: pointer;
            }
          }
          h3 {
            margin: 0;
          }
          h3:first-of-type {
            margin-top: 1.5em;
          }
        `}</style>
      </div>
    )
  }
}

export default Header
