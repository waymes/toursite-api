import Boom from '@hapi/boom';
import Trip from '../api/trips/trip.model';

// eslint-disable-next-line import/prefer-default-export
export const list = async (req, res) => {
  const trips = await Trip.findAll();

  res.status(200).send(trips);
};

export const get = async (req, res, next) => {
  try {
    const trip = await Trip.findOne({ where: { id: req.params.id } });
    if (!trip) {
      next(Boom.notFound());
      return;
    }
    const responseData = {
      entityData: trip,
      title: 'Edit Trip',
      entityFieldList: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'name', type: 'text', label: 'Name' },
        { name: 'destination', type: 'text', label: 'Destination' },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'price', type: 'text', label: 'Price' },
        { name: 'backgroundImage', type: 'text', label: 'Background Image' },
        { name: 'dateFrom', type: 'text', label: 'Date From' },
        { name: 'dateTo', type: 'text', label: 'Date To' },
        {
          isGroup: true,
          items: [
            { name: 'blockTitle1', type: 'text', label: 'Block 1' },
            ...trip.blockItems1.map((_, id) => ({
              isGroup: true,
              items: [
                { name: `blockItems1[${id}].title`, type: 'text', label: 'Title' },
                { name: `blockItems1[${id}].details`, type: 'textarea', label: 'Details' },
              ],
            })),
          ],
        },
        {
          isGroup: true,
          items: [
            { name: 'blockTitle2', type: 'text', label: 'Block 2' },
            ...trip.blockItems2.map((_, id) => ({
              isGroup: true,
              items: [
                { name: `blockItems2[${id}].image`, type: 'text', label: 'Image' },
                { name: `blockItems2[${id}].text`, type: 'textarea', label: 'Details' },
              ],
            })),
          ],
        },
        {
          isGroup: true,
          items: [
            { name: 'blockTitle3', type: 'text', label: 'Block 3' },
            ...trip.blockItems3.map((_, id) => ({
              isGroup: true,
              items: [
                { name: `blockItems3[${id}]`, type: 'textarea', label: 'Details' },
              ],
            })),
          ],
        },
        {
          isGroup: true,
          items: [
            { name: 'blockTitle4', type: 'text', label: 'Block 4' },
            ...trip.blockItems4.map((_, id) => ({
              isGroup: true,
              items: [
                { name: `blockItems4[${id}]`, type: 'text', label: 'Image' },
              ],
            })),
          ],
        },
        {
          isGroup: true,
          items: [
            ...trip.additionalList.map((_, id) => ({
              isGroup: true,
              items: [
                { name: `additionalList[${id}]`, type: 'text', label: 'Additional List Item' },
              ],
            })),
          ],
        },
        {
          isGroup: true,
          items: [
            ...trip.includedList.map((_, id) => ({
              isGroup: true,
              items: [
                { name: `includedList[${id}]`, type: 'text', label: 'Included List Item' },
              ],
            })),
          ],
        },
      ],
    };
    res.status(200).send(responseData);
  } catch (error) {
    next(Boom.badImplementation(error));
  }
};

export const update = async (req, res, next) => {
  try {
    await Trip.update(req.body, { where: { id: req.params.id } });

    res.sendStatus(204);
  } catch (error) {
    next(Boom.badImplementation(error));
  }
};
