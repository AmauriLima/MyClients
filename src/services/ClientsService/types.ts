export interface Client {
  id: number;
  nome: string;
  idade: number;
  email: string;
  endereco: string;
  cidade: string;
  estado: string;
}

export interface ListClientResponse {
  clientes: Client[];
}
