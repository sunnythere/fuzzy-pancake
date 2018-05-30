import Layout from '../components/Layout.js';
import QAColumns from '../components/QAColumns';
import { queryUID } from '../utils/cms'

const FosterFAQ = ({data}) => {
  console.log('data', data)
  return(
  <Layout>
     <QAColumns data={data} />

  </Layout>
)
};

FosterFAQ.getInitialProps = async function() {
  const data = await queryUID('qna', 'fosterfaq');

  return {
    data
  }
}

export default FosterFAQ
