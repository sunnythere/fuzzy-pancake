import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import { postData } from '../config/rgcats.js';
import { decodeStringClip } from '../utils/decode.js';
import styles from '../components/ourcats-style.js';
import { nameSort } from '../utils/sort';
import Loading from '../components/Loading';

const OurCats = (props) => {
  console.log('%cCATSSSS', 'font-size: 30px; color: coral;', props.cats.length)

return(
  <Layout>
    <h2 className="heading" tabIndex="0">Our Cats</h2>

    { props.cats.length ?
      <div id="thecats">
      { props.cats.map(cat => {
        const catName = cat.animalName
        //.split(' (')[0];
        return (
        <div
          key={cat.animalID}
          className="cat-div">
              <img
                src={cat.animalPictures && cat.animalPictures.length ? cat.animalPictures[0].urlSecureFullsize : null}
                className="cat-pic"
                alt={cat.animalID} />
              <Link prefetch
                as={`/cat/${cat.animalID}`}
                href={`/catprofile?id=${cat.animalID}`}>
                  <a><h4 className="cat-name">{catName}</h4></a>
              </Link>
              <p className="short-descrip">
                  {cat.animalSex ? `${cat.animalSex} |` : null}
                  {cat.animalColor ? `${cat.animalColor} |` : null}
                  {cat.animalBreed ? `${cat.animalBreed} |` : null}
                  {cat.animalGeneralAge}</p>
              <p>{decodeStringClip(cat.animalDescriptionPlain, 50)}...</p>
              <hr/>
        </div>
        )
      })
    }
    </div>

    :  <Loading />
  }
    <style jsx>{styles}</style>

  </Layout>
)};


OurCats.getInitialProps = async function() {
  const data = await axios.post("https://api.rescuegroups.org/http/v2.json", postData)
  .then(res => {
    // console.log('%cCATSSSS', 'font-size: 30px; color: pink;', res.data)
    let catData = [];
    for (let key in res.data.data) {
      catData.push(res.data.data[key]);
    }
    return nameSort(catData);
  })

  return {
    cats: data
  }
}

export default OurCats
