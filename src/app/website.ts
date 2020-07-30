import { Visit } from './visit';

export class Website {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  visits: Visit[];
}
