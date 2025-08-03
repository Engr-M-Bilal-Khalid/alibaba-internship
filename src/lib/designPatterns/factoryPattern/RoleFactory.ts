// lib/RoleFactory.ts

import { IUserRole, Customer, Seller,Admin ,Hybrid} from './UserRoleFactory';

export class RoleFactory {
    static createRole(role: string): IUserRole {
        switch (role.toLowerCase()) {
            case 'customer':
                console.log('Factory: Creating Customer instance');
                return new Customer();
            case 'seller':
                console.log('Factory: Creating Seller instance');
                return new Seller();
            case 'hybrid':
                console.log('Factory: Creating Hybrid instance');
                return new Hybrid();
            case 'admin':
                console.log('Factory: Creating Seller instance');
                return new Admin();
            default:
                throw new Error('Invalid role');
        }
    }
}
