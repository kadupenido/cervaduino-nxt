import { Connection } from 'mongoose';
import { EquipamentSchema } from './schemas/equipament.schema';

export const equipamentsProviders = [
  {
    provide: 'EQUIPAMENT_MODEL',
    useFactory: (connection: Connection) => {
      return connection.model('Equipament', EquipamentSchema);
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
