import Layout from '../components/Layout.js';
import QAColumns from '../components/QAColumns';
import { queryUID } from '../utils/cms'


const TNR = ({data}) => {
  console.log('DATA', data)
  return(
  <Layout>
    <QAColumns data={data} />
  </Layout>
)};

TNR.getInitialProps = async function() {
  const data = await queryUID('qna', 'tnr');

  return {
    data
  }
}

export default TNR
