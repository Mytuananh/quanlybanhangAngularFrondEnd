import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor(private tokeService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
  }

  Logout() {
    this.tokeService.Logout();
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    })
  }
}
