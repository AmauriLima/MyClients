import HttpClient from '../utils/HttpClient';
import { ListClientResponse } from './types';

class ClientsService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(
      'https://middleware-mob4pay-homolog.mob4pay.com/teste',
    );
  }

  async listClients(): Promise<ListClientResponse> {
    return this.httpClient.get('/obterClientes');
  }
}

export default new ClientsService();
