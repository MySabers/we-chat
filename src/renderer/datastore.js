import DataStore from 'nedb'
import path from 'path'
import { remote } from 'electron'

// nedb database
const db = {}

db.chatPointers = new DataStore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/chatPointers.db')
})

console.log(path.join(remote.app.getPath('userData'), '/chatPointers.db'))

export default db
