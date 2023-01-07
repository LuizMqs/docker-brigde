import ContactServ from '../services/contacts.js'

class GetAllControl {
    async handler(req, res) {
      try {
        const Serv = new ContactServ();
        const response = await Serv.getAll(req.params.id);
  
        return res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }

export default GetAllControl