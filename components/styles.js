import css from 'styled-jsx/css';

export default css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', sans-serif;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  @font-face {
    font-family: 'Jaapokki Regular';
    font-style: normal;
    font-weight: 400;
    src: local('Jaapokki Regular'),
      url('../static/fonts/jaapokki-regular.woff') format('woff'),
      url('../static/fonts/jaapokki-regular.ttf') format('truetype'),
      url('../static/fonts/jaapokki-regular.eot') format('embedded-opentype');
  }
  .heading {
    font-family: 'Jaapokki Regular', sans-serif;
    font-size: 1.875em;
    letter-spacing: 0.1em;
    text-align: center;
  }
  .col-2 {
    -moz-column-width: 300px;
    -webkit-column-width: 300px;
    column-width: 300px;
    column-gap: 2.2em;
  }
  .qa {
    break-inside: avoid;
  }
  .qa:first-child h4 {
    margin-top: 0;
  }
  .footn {
    font-size: small;
  }
  .qblock {
    margin: 1em 0 1.5em 1em;
  }
  .qListItem a {
    display: block;
    // font-style: italic;
    font-weight: 700;
    color: black;
    text-indent: -1em;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: 0
  }
  .pic {
    text-align: center;
    max-width: 100%;
  }
  .pic > img {
    width: 100%;
    max-width: 500px;
  }
  .center {
    margin: 0 auto;
    text-align: center;
  }
`
