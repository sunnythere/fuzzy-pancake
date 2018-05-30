import css from 'styled-jsx/css';

export default css`
  #thecats {
    -moz-column-width: 250px;
    -webkit-column-width: 250px;
    column-width: 250px;
    column-gap: 1.8em;
  }
  .cat-div {
    break-inside: avoid;
    margin: 1.5em 0;
  }
  .cat-div:first-of-type {
    margin-top: 0;
  }
  .cat-div hr {
    border-top: 1px black solid;
    border-bottom: 4px black double;
    border-left: none;
    border-right: none;
    height: 7px;
  }

  .cat-pic {
    width: 100%;
    min-width: 250px;
  }
  .cat-text {
    margin-top: 0;
  }

  a {
    text-decoration: none;
  }
  .cat-name {
    margin: 0;
    font-family: Futura, sans-serif;
    font-size: 2.5em;
    line-height: 1em;
  }

  .cat-div:nth-of-type(5n+1) .cat-name {
    color: #F3A738;
  }
  .cat-div:nth-of-type(5n+2) .cat-name {
    color: #3B8EA5;
  }
  .cat-div:nth-of-type(5n+3) .cat-name {
    color: #8C1C13;
  }
  .cat-div:nth-of-type(5n+4) .cat-name {
    color: #654236;
  }
  .cat-div:nth-of-type(5n+5) .cat-name {
    color: #BF4342;
  }

  .short-descrip {
    font-style: italic;
  }`
