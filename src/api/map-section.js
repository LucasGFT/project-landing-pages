export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  console.log(section);

  const {
    __component = '',
    title = '',
    description = '',
    image = '',
    metadata: { background = false, section_id = '' } = false,
  } = section;

  return {
    component: __component,
    title,
    text: description,
    srcImg: image.data.attributes.url,
    background,
    sectionId: section_id,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component = '',
    title = '',
    content = '',
    metadata: { background = false, section_id = '' } = false,
  } = section;

  return {
    component: __component,
    title,
    html: content,
    background,
    sectionId: section_id,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    text_grid = [],
    metadata: { background = false, section_id } = {},
    title = '',
    description = '',
  } = section;

  return {
    grid: text_grid,
    title,
    description,
    sectionId: section_id,
    background,
    component: 'section.section-grid-text',
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    image_grid = [{}],
    metadata: { background = false, section_id } = {},
    title = '',
    description = '',
  } = section;

  const grid = image_grid.map((image) => mapImageInImageGrid(image));
  return {
    grid,
    title,
    description,
    sectionId: section_id,
    background,
    component: 'section.section-grid-image',
  };
};

export const mapImageInImageGrid = (infoImage) => {
  const { image: { url = '', alternativeText = '' } = {} } = infoImage;

  return {
    altText: alternativeText,
    srcImg: url,
  };
};
