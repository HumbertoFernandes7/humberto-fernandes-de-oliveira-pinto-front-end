import { autores } from "./autores";

export interface livros{
  id: number,
  titulo: string,
  anoLancamento: Date,
  autores: autores[]
}
