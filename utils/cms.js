import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom';
import Link from 'next/link'
import { token } from '../env_config'

const apiEndpoint = 'https://bbawc.cdn.prismic.io/api/v2';

export const queryUID = (type, uid) =>
  Prismic.getApi(apiEndpoint, {accessToken: token})
    .then(api => api.query(
      Prismic.Predicates.at(`my.${type}.uid`, uid)
    ))
    .then((response) => response.results[0].data,
          (err) => console.error('error:', err)
    )

export const createLink = (obj) => {
  // assuming obj.spans.length
  return obj.spans.map(oneSpan => {
    if (oneSpan.type === 'hyperlink') {
      return (
        <span key={obj.text}>
          {obj.text.slice(0, oneSpan.start)}
          <Link href={`${oneSpan.data.url}`}>
            <a>{obj.text.slice(oneSpan.start, oneSpan.end)}</a>
          </Link>
          {obj.text.slice(oneSpan.end)}
        </span>);
    }
  })
}
