import { useEffect, useState } from 'react';
import { Base } from '../Base';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { useLocation } from 'react-router-dom';
import { config } from '../../config';

export function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname
      .replace(/^a-z0-9-_/gi, '')
      .replace('/', '');
    const slug = pathName && pathName !== '/' ? pathName : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(
          `${config.url}?filters[slug]=${slug}&populate=deep&pagination[page]=1&pagination[pageSize]=1&sort[0]=id:desc`,
        );
        const json = await data.json();
        console.log(json);
        const pageData = mapData([json.data[0].attributes]);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title}  | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns {...section} key={key} />;
        }

        if (component === 'section.section-content') {
          return <GridContent {...section} key={key} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={key} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={key} />;
        }

        if (component === 'section.section-image') {
          return <GridImage {...section} key={key} />;
        }
      })}
    </Base>
  );
}
