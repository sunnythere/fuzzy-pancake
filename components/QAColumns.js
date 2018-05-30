import React, { Component } from 'react';
import Link from 'next/link';
import PrismicDOM from 'prismic-dom';
import { RichText } from 'prismic-reactjs';
import { createLink } from '../utils/cms'

/*
data: {
  title: [
    text
  ],
  content: [
    { ques: [ text ], ans: [ text ]}
  ]
}
*/

const renderQList = (qArr) => {
  return qArr.map(({ques},idx) => (
    <span
      className="qListItem"
      key={`${idx}-${ques[0].text.slice(0,4)}`}>
      <Link href={`#${idx}`}><a>{ques[0].text}</a></Link>
    </span>
  ));
}


export default ({data}) => {
  const qArr = data.content;

  return (
    <div>
      <h2 className="heading" tabIndex="0">{data.title[0].text}</h2>

      <div className="qblock">
        {renderQList(qArr)}
      </div>

      <div className="col-2">
        {qArr.map((qaObj, idx) => (
          <div
            id={idx}
            key={`${idx}-${qaObj.ans[0].text.slice(0,7)}`}
            className="qa">
            <h4 className="question">{qaObj.ques[0].text}</h4>
            <div className="answer">
              {RichText.render(qaObj.ans)}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
