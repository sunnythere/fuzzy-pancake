import React from 'react';
// import '../static/fa/css/font-awesome.min.css';

const SocMedia = (props) => {

  const faIcon = "fa fa-2x";

  return (
    <span id="socialmedia">
      <a href="https://www.facebook.com/BBAWC/" target="_blank" rel="noopener noreferrer">
        {"\uf082"}
      </a>

      <a href="https://www.instagram.com/brooklynbridgeanimals/" target="_blank" rel="noopener noreferrer">
        {"\uf16d"}
      </a>

      <a href="https://www.youtube.com/user/BBAnimals" target="_blank" rel="noopener noreferrer">
        {"\uf081"}
        </a>

      <a href="https://twitter.com/BBAWC" target="_blank" rel="noopener noreferrer">
        {"\uf167"}
      </a>

      <style jsx>{`
        @font-face {
          font-family: 'Font Awesome';
          font-style: normal;
          font-weight: 400;
          src: local('Font Awesome'),
            url('../static/fa/fonts/fontawesome-webfont.woff') format('woff'),
            url('../static/fa/fonts/fontawesome-webfont.ttf') format('truetype'),
            url('../static/fa/fonts/fontawesome-webfont.eot') format('embedded-opentype');
        }
        a {
          font-family: 'Font Awesome';
          font-size: 2em;
          text-decoration: none;
          color: black;
        }
        #socialmedia > a {
          margin-right: 0.3em;
        }
      `}</style>
    </span>)
}

export default SocMedia;
