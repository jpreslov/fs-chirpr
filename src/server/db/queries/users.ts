import { Query } from '..'
import type { TUsers } from '../models/types'

const all = () => Query<Array<TUsers>>('SELECT id, username FROM users');
const one = (userid: number) => Query<Array<TUsers>>('SELECT id, username FROM users WHERE id = ?', [userid])
const newuser = (name: string) => Query<Array<TUsers>>('INSERT INTO users(name) VALUE (?)', [name])

export default {
    all,
    one,
    newuser
}