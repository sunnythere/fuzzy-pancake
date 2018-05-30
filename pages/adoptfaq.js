import Layout from '../components/Layout.js';
import QAColumns from '../components/QAColumns';
import { queryUID } from '../utils/cms'

const AdoptFAQ = ({data}) => (
  <Layout>
    <QAColumns data={data} />
  </Layout>
);

AdoptFAQ.getInitialProps = async function() {
  const data = await queryUID('qna', 'adoptfaq');
  return { data }
}

export default AdoptFAQ
