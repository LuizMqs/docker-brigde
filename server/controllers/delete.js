import ContactServ from '../services/contacts.js'

class DeleteControl {
    async handler(req, res) {
      try {
        const Serv = new ContactServ();
        const response = await Serv.IdDelete(req.params.id);
        return res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
export default DeleteControl;