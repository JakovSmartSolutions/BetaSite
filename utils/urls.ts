import flattenDeep from 'lodash/flattenDeep';

import { Attribute } from 'types/categories.types';

export const getParams = (attributes: Attribute[], query: any) => {
  // Get query keys and values
  const queryKeys = Object.keys(query);
  const queryValues = flattenDeep(
    Object.values(query).map((el: any) =>
      el
        .split(',')
        .map((el: any) => el.replace(/\"/g, ''))
        .map((el: any) => el.trim())
    )
  );

  // Get Active Attributes and values
  const data = attributes
    .filter(({ attribute }) => queryKeys.includes(String(attribute.name)))
    .map((el) => ({
      id: el.attribute.id,
      values: el.values.filter((value) =>
        queryValues.includes(value.value.value)
      ),
    }));

  // Format and export
  const res = flattenDeep(data).map(
    (el) => `${el.id}(${el.values.map((val) => val.value.id)})`
  );

  return res.join(';');
};
