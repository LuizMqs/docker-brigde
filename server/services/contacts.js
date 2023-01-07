import {contactRepository} from '../repository/contact.js'
import { v4 , validate } from 'uuid';
class Contacts {
    async getAll(){
        const repo = new contactRepository();
        try {
            const data = await repo.getAllContacts();
            return { data: data, err: null, errCode: null };
        } catch (err) {
            throw new Error(err.message);
        }
    }
    async add(_data){
        const repo = new contactRepository();
        try {
            _data.id = v4();
            const data = await repo.addContact(_data);
            //change user interface
            return { data: _data, err: null, errCode: null };
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async IdDelete(_id) {
        const repo = new contactRepository();
        try {
            const updUser = await repo.delContacts(_id);
            const data = await repo.getAllContacts();
            //change user interface
            return { data: data, err: null, errCode: null };
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

export default Contacts;