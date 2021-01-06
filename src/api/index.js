import axios from 'axios';

const SOURCE = 'http://wufazhuce.com/';

async function getHtml() {
  const resp = await axios.get(SOURCE);
  if (resp.status == 200) {
    return resp.data;
  } else {
    throw new Error(`request failed from ${SOURCE}`);
  }
}

export default getHtml;
