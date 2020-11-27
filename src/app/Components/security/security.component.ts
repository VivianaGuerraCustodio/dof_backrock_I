import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  hide = true;
  constructor() { }
  confirm() {
    alert("tu contraseña se actualizó de manera exitosa, por favor revisa tu correo ")
  };
  ngOnInit(): void {
  }

}
