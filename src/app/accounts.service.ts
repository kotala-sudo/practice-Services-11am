import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  constructor() { }

  addAccount(name:string, status: string){
    this.accounts.push({name,status});
  }

  updateStatus(index:number, newStatus:string){
    this.accounts[index].status = newStatus;
  }
}
