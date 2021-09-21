import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authSevice: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    this.authSevice.fazerLogin(this.usuario);

  }

}
