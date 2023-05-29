import { Acao } from "./acao";

export interface Carteira {
  id: number,
  acao: Acao,
  quantidade: number;
}
