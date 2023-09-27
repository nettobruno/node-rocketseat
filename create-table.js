import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//   console.log('tabela apagada')
// })

sql`
  CREATE TABLE videos (
    id            UUID PRIMARY KEY,
    title         TEXT,
    description   TEXT,
    duration      INTEGER
  );
`.then(() => {
  console.log('Tabela Criada')
})


// comando para executar é o node create-table.js