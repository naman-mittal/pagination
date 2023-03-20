export const filterList = (
  list: Array<any>,
  filterText: string,
  filterProperties: Array<string>,
) => {
  if (!filterText) {
    return list;
  }

  filterText = filterText.trim().toLowerCase();

  return list.filter(item =>
    filterProperties.reduce((shouldFilter, prop) => {
      if (shouldFilter) {
        return shouldFilter;
      }

      const propValue = getProperyValue(prop, item);

      if (typeof propValue === 'string') {
        return propValue.toLowerCase().includes(filterText);
      }

      return false;
    }, false),
  );
};

const getProperyValue = (property: string, object: any) => {
  const nestedProperties = property.split('.');

  return nestedProperties.reduce((obj, prop) => {
    if (!obj) {
      return '';
    }

    return obj[prop];
  }, object);
};

export const sortList = (
  list: Array<any>,
  sortProperty: string,
  sortOrder: 'asc' | 'desc',
) => {
  let newList = [...list];
  newList = newList.sort((a, b) => {
    const valueA = String(getProperyValue(sortProperty, a));
    const valueB = String(getProperyValue(sortProperty, b));

    return valueA.localeCompare(valueB) * (sortOrder === 'asc' ? 1 : -1);
  });

  return newList;
};
