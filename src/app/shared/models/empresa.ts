import { Setor } from "./setor";

export interface Empresa {
    id: number,
    nome: string,
    setor: Setor,    	
    cnpj: string
}
