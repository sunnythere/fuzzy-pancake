import Header from './Header';
import styles from './styles';
import Head from 'next/head'


const Layout = (props) => (
  <div>
    <Head>
      <title>Brooklyn Bridge Animal Welfare Coalition</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>

    <div id="layout-div">
      <Header />

      <div id="window-div">
        {props.children}
      </div>

      <style jsx>{`
        #layout-div {
          display: block;
        }
        #window-div {
          box-sizing: border-box;
          padding: 1em;
        }

        @media (min-width: 426px) {
          #layout-div {
            display: flex;
            flex-direction: row;
          }
          #window-div {
            box-sizing: border-box;
            padding: 1em 2em;
            float: right;
          }
        }`}
      </style>

      <style jsx global>
        {styles}
      </style>

    </div>
  </div>
);

export default Layout;
