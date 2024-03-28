import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-section';

import pagesFakeData from './dados.json';

describe('map-section', () => {
  it('should render with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].sectionId).toBe('home');
    expect(data[1].sectionId).toBe('intro');
    expect(data[2].sectionId).toBe('grid-one');
    expect(data[3].sectionId).toBe('gallery');
  });

  it('should render map section  if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render map section  if section grid not data', () => {
    const data = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    expect(data).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);
  });

  it('should map section two columns if no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
  });
  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '602fdf2d540c00269e056178',
      title: 'January brings us Firefox 85',
      description: 'abc',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617b',
        name: 'contact',
        section_id: 'contact',
        __v: 0,
        id: '602fdf2d540c00269e05617b',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056178',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('January brings us Firefox 85');
  });

  it('shoud map section content if no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('shoud map section content', () => {
    const data = mapSectionContent(pagesFakeData[0].sections[5]);
    expect(data.component).toBe('section.section-content');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('pricing');
    expect(data.html).toBe(pagesFakeData[0].sections[5].content);
    expect(data.title).toBe('Pricing');
  });

  it('shoud map section text grid if no data', () => {
    const data = mapTextGrid();
    expect(data.background).toBe(false);
    expect(data.grid).toEqual([]);
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('shoud map section text grid', () => {
    const data = mapTextGrid(pagesFakeData[0].sections[2]);
    expect(data.background).toBe(true);
    expect(data.title).toBe('My Grid');
    expect(data.grid).toEqual(pagesFakeData[0].sections[2].text_grid);
    expect(data.description).toBe(
      'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut',
    );
  });

  it('shoud map section image grid if no data', () => {
    const data = mapImageGrid();
    expect(data.background).toBe(false);
    expect(data.grid).toEqual([
      {
        altText: '',
        srcImg: '',
      },
    ]);
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('shoud map section image grid', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056175',
      description:
        'Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          _id: '602fdf2d540c00269e056183',
          __v: 0,
          image: {
            _id: '602fde37540c00269e05616b',
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'Uma paisagem com céu claro e montanhas bonitas',
            caption: '',
            hash: '360x360_r_1_6a2049d13a',
            ext: '',
            mime: 'image/jpeg',
            size: 29.09,
            width: 360,
            height: 360,
            url: 'https://test.com/',
            provider_metadata: {
              public_id: '360x360_r_1_6a2049d13a',
              resource_type: 'image',
            },
          },
        },
      ],
    });
    expect(data.background).toBe(false);
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].srcImg).toBe('https://test.com/');
    expect(data.grid[0].altText).toBe(
      'Uma paisagem com céu claro e montanhas bonitas',
    );
    expect(data.description).toBe(
      'Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    );
  });
});
