import { autores } from "./autores";

export interface alteraLivros{
    titulo: string,
    anoLancamento: Date,
    autores: autores[]
}