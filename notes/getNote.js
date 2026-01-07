import { NotesDal } from "../data/NotesDal.js"
import { getIdUsernameByToken } from "../JWT/verifyToken.js"

export async function getAllByToken(token){
    const {id} = getIdUsernameByToken(token)
    const result = await NotesDal.selectAllByOwnerId(id)
    return result
}