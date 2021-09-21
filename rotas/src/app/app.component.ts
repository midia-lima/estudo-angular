import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'rotas';

  mostrarMenu: boolean = false;

  constructor(private authSevice: AuthService){}

  ngOnInit() {
    this.authSevice.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

  }
}
