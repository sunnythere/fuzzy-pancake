import Layout from '../components/Layout.js'
import { queryUID } from '../utils/cms'

const About = ({data}) => {
  const {
    title,
    text,
    pic
  } = data;
console.log('PIC', pic)
  return (
  <Layout>
    <div>
      <h2 className="heading" tabIndex="0">{title[0].text}</h2>

      <div>
        {text.map(({text}, idx) => (
          <p key={`${idx}-${text.slice(0,7)}`}>
            {text}
          </p>
        ))}
      </div>

      <div className="pic">
        <img src={pic.url} alt={pic.alt} />
      </div>

    </div>
  </Layout>
)
}

About.getInitialProps = async function() {
  const data = await queryUID('page', 'about');

  return {
    data
  }
}

export default About
