import { mapData } from './map-data';
import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });
  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          _id: '602fdf30540c00269e0561b2',
          link_text: 'grid-two',
          url: '#grid-two',
          __v: 0,
          id: '602fdf30540c00269e0561b2',
        },
        {
          open_in_new_tab: false,
          _id: '602fdf30540c00269e0561b3',
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          _id: '602fdf30540c00269e0561b4',
          link_text: 'contact',
          url: '#contact',
        },
      ],
      logo: {
        url: 'a.svg',
      },
    });

    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[1].newTab).toBe(false);
    expect(menu.links[1].children).toBe('pricing');
    expect(menu.links[1].link).toBe('#pricing');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should default return an empty array if no links', () => {
    const links = mapMenuLinks([{}]);

    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('');
    expect(links[0].link).toBe('');
  });

  it('should map links if links passed ', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        _id: '602fdf30540c00269e0561b2',
        link_text: 'grid-two',
        url: '#grid-two',
        __v: 0,
        id: '602fdf30540c00269e0561b2',
      },
      {
        open_in_new_tab: false,
        _id: '602fdf30540c00269e0561b3',
        link_text: 'pricing',
        url: '#pricing',
      },
      {
        open_in_new_tab: false,
        _id: '602fdf30540c00269e0561b4',
        link_text: 'contact',
        url: '#contact',
      },
    ]);

    expect(links[1].newTab).toBe(false);
    expect(links[1].children).toBe('pricing');
    expect(links[1].link).toBe('#pricing');
  });
});
