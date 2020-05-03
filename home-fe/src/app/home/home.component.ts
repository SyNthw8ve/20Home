import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private user_service: UserService) { }

  ngOnInit(): void {

    this.user_service.get_user_data().subscribe(res => {

      console.log(res);
    })
  }

}
