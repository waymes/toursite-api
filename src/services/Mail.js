import sgMail from '@sendgrid/mail';
import config from '../config';

sgMail.setApiKey(config.sendGridKey);

export default sgMail;
