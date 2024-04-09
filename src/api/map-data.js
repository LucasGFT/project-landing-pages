import { mapMenu } from './map-menu';
import { mapSections } from './map-section';

export const mapData = (pagesData = [{}]) => {
  console.log('asasnk');
  return pagesData.map((data) => {
    const {
      footer_text = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml: footer_text,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
