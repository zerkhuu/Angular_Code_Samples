import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 1, name: 'Liem', status: 'Active', ready: 'Yes', guardian: 'Titan' },
      { id: 2, name: 'Caroline', status: 'Active', ready: 'Yes', guardian: 'Warlock' },
      { id: 3, name: 'Ian', status: 'Active', ready: 'Yes', guardian: 'Hunter' },
      { id: 4, name: 'Si', status: 'Active', ready: 'Yes', guardian: 'Hunter' },
      {id: 5, name: 'Charles', status: 'Active', ready: 'Yes', guardian: 'Warlock' },
      { id: 6, name: 'Lyle', status: 'Active', ready: 'Yes', guardian: 'Titan' },
      { id: 7, name: 'Adam', status: 'Inactive', ready: 'Yes', guardian: 'Warlock' },
      { id: 8, name: 'Carl', status: 'Inactive', ready: 'Yes', guardian: 'Hunter'},
      { id: 9, name: 'Ray', status: 'Active', ready: 'Yes', guardian: 'Warlock'},
      { id: 10, name: 'Aiden', status: 'PUG', ready: 'Yes', guardian: 'Warlock' }
    ];
    return {members};
  }
}