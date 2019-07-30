function getBlockItems(trip, blockName, blockTypes, blockLabels, blockSubnames) {
  if (!trip) return [];
  return trip[blockName].map((_, id) => ({
    isGroup: true,
    items: blockTypes.map((__, idx) => ({
      name: `${blockName}[${id}].${blockSubnames[idx]}`,
      type: blockTypes[idx],
      label: blockLabels[idx],
    })),
  }));
}

function getConfigToAddNewItem(groupName, blockTypes, blockLabels, blockSubnames) {
  return {
    isGroup: true,
    items: blockTypes.map((_, id) => ({
      name: `${groupName}[{id}].${blockSubnames[id]}`,
      type: blockTypes[id],
      label: blockLabels[id],
    })),
  };
}

// eslint-disable-next-line import/prefer-default-export
export const getTripFormFieldList = (trip) => {
  const configBlock1 = ['blockItems1', ['text', 'textarea'], ['Title', 'Details'], ['title', 'text']];
  const configBlock2 = ['blockItems2', ['text', 'textarea'], ['Image', 'Details'], ['image', 'text']];
  const configBlock3 = ['blockItems3', ['textarea'], ['Details'], ['text']];
  const configBlock4 = ['blockItems4', ['image'], ['Image'], ['image']];
  const configAdditionalList = ['additionalList', ['text'], ['Text'], ['text']];
  const configIncludedList = ['includedList', ['text'], ['Text'], ['text']];
  return [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'destination', type: 'text', label: 'Destination' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'price', type: 'text', label: 'Price' },
    { name: 'backgroundImage', type: 'text', label: 'Background Image' },
    { name: 'dateFrom', type: 'date', label: 'Date From' },
    { name: 'dateTo', type: 'date', label: 'Date To' },
    {
      isGroup: true,
      groupLabel: 'Block 1',
      configToAdd: getConfigToAddNewItem(...configBlock1),
      items: [
        { name: 'blockTitle1', type: 'text', label: 'Title' },
        ...getBlockItems(trip, ...configBlock1),
      ],
    },
    {
      isGroup: true,
      groupLabel: 'Block 2',
      configToAdd: getConfigToAddNewItem(...configBlock2),
      items: [
        { name: 'blockTitle2', type: 'text', label: 'Title' },
        ...getBlockItems(trip, ...configBlock2),
      ],
    },
    {
      isGroup: true,
      groupLabel: 'Block 3',
      configToAdd: getConfigToAddNewItem(...configBlock3),
      items: [
        { name: 'blockTitle3', type: 'text', label: 'Title' },
        ...getBlockItems(trip, ...configBlock3),
      ],
    },
    {
      isGroup: true,
      groupLabel: 'Block 4',
      configToAdd: getConfigToAddNewItem(...configBlock4),
      items: [
        { name: 'blockTitle4', type: 'text', label: 'Title' },
        ...getBlockItems(trip, ...configBlock4),
      ],
    },
    {
      isGroup: true,
      groupLabel: 'Additional List Items',
      configToAdd: getConfigToAddNewItem(...configAdditionalList),
      items: [...getBlockItems(trip, ...configAdditionalList)],
    },
    {
      isGroup: true,
      groupLabel: 'Included List Items',
      configToAdd: getConfigToAddNewItem(...configIncludedList),
      items: [...getBlockItems(trip, ...configIncludedList)],
    },
  ];
};
