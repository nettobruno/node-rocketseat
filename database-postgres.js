import { randomUUID } from 'node:crypto';
import { sql } from './db.js';
 
export class DatabasePostgres {
  async list() {
    return await sql`
      SELECT * FROM videos;
    `;
  }

  async create(video) {
    const videoID = randomUUID()
    const { title, description, duration } = video
    
    await sql`insert into videos (id, title, description, duration) VALUES (${videoID}, ${title}, ${description}, ${duration})`
  }

  async update(id, video) {
    const { title, description, duration } = video
    await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
  }

  async delete(id) {
    await sql`delete from videos where id = ${id}`
  }

}