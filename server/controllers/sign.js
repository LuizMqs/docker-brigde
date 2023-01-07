import Contacts from '../services/contacts.js'

class SignControl {
  async handler(req, res) {
    try {
      const data = {
        name:req.body.name,
        email:req.body.email
      }
      const Serv = new Contacts();
      const response = await Serv.add(data);

      return res.json(response);
    } catch (error) {
      console.error(error);
    }
  }
}

export default SignControl
