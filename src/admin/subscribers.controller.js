import Subscriber from '../api/subscribers/subscriber.model';

// eslint-disable-next-line import/prefer-default-export
export const list = async (req, res) => {
  const subscribers = await Subscriber.findAll();

  res.status(200).send(subscribers);
};
