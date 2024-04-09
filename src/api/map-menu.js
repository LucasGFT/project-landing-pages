export const mapMenu = (menuObj = {}) => {
  const {
    open_in_new_tab = false,
    logo_text = '',
    logo_link = '',
    menu_links = [],
  } = menuObj;

  const srcImg =
    menuObj.logo.data && menuObj.logo.data.attributes.url
      ? menuObj.logo.data.attributes.url
      : '';

  return {
    newTab: open_in_new_tab,
    text: logo_text,
    srcImg,
    link: logo_link,
    links: mapMenuLinks(menu_links),
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
