import { pool } from "./index.js";

export class contactRepository {
  async addContact(_data) {
    const client = await pool.connect();

    try {
      const values = [_data.id,_data.name,_data.email]
      const query = `INSERT INTO public.Contatos (id, name, email) 
                        VALUES ($1,$2,$3) RETURNING *`;

      const result = await client.query({ text: query, values: values });
      return result.rows;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      client.release();
    }
  }

  async getAllContacts() {
    const client = await pool.connect();
    const query = "SELECT * FROM public.Contatos";
    try {
      const result = await client.query(query);
      return result.rows;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      client.release();
    }
  }

  async delContacts(id) {
    const client = await pool.connect();
    const query = "DELETE FROM public.Contatos WHERE id = $1;";
    try {
      const result = await client.query(query, [id]);
      return result.rows;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      client.release();
    }
  }
  async getIdContacts(id) {
    const client = await pool.connect();
    let query = "SELECT * FROM public.Contatos WHERE email = $1";
    try {
      const result = await client.query(query, [id]);
      return result.rows;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      client.release();
    }
  }
}
