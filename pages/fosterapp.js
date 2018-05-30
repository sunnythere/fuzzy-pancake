import React, { Component } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Loading from '../components/Loading';

class FosterApp extends Component {

  constructor(props) {
    super(props);
    this.state = { isReady: false };
    this.onLoad = this.onLoad.bind(this);
  }

  onLoad() {
    this.setState({ isReady: true });
  }

  render() {
    return (
      <div>

        {
        this.state.isReady
        ? (<Link prefetch href='/'>
            <a><h4 >back to the bbawc website</h4></a>
          </Link>)
        : <Loading />
        }

        <iframe
          src="https://service.sheltermanager.com/asmservice?account=az1377&method=online_form_html&formid=10"
          title="adoption app"
          onLoad={this.onLoad} />

        <style jsx>{`
          iframe {
            width: 100%;
            height: 100vh;
            border: 0;
          }
      `}</style>

      </div>
    )
  }
}

export default FosterApp;
