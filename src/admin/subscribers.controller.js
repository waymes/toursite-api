import Boom from '@hapi/boom';
import Subscriber from '../api/subscribers/subscriber.model';

// eslint-disable-next-line import/prefer-default-export
export const list = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.findAll();
    const fieldList = [
      { name: 'name', label: 'Name' },
      { name: 'email', label: 'Email' },
    ];

    res.status(200).send({
      entityList: subscribers,
      fieldList,
    });
  } catch (error) {
    next(Boom.badImplementation());
  }
};
