import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[AccountsService]
})
export class AppComponent {
  accounts: {name:string, status:string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }

}
