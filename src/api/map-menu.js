export const mapMenu = (menuObj = {}) => {
  const {
    open_in_new_tab = false,
    logo_text = '',
    logo_link = '',
    logo = { url: '' },
    menu = [],
  } = menuObj;

  return {
    newTab: open_in_new_tab,
    text: logo_text,
    srcImg: logo.url,
    link: logo_link,
    links: mapMenuLinks(menu),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const { open_in_new_tab = false, link_text = '', url = '' } = item;
    return {
      newTab: open_in_new_tab,
      children: link_text,
      link: url,
    };
  });
};
