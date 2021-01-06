import getHtml from '../api';
import { parse } from 'node-html-parser';

async function getBgImage() {
  try {
    const html = await getHtml();
    const dom = parse(html);
    const imageSrc = dom.querySelector('.fp-one-imagen').getAttribute('src');
    return imageSrc;
  } catch (err) {
    return err;
  }
}

export default getBgImage;
