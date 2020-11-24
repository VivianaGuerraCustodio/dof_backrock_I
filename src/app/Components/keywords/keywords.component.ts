import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../Services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss'],
})
export class KeywordsComponent implements OnInit {
  addKeyForm = this.fb.group({
    key: [null, Validators.required],
  });

  public keys$;
  public itemId: string;

  bankOfWords = [
    'Buró',
    'Entidades financieras',
    'Fondos',
    'Inversión',
    'Inversiones',
    'Mercado',
    'Valores',
    'Personas',
    'Servicios',
    'Auditoría',
    'Auditor',
    'Cliente',
    'Emisoras',
    'Valores',
    'Entidades financieras',
    'Servicios',
    'Servicio',
    'Inversión',
    'Comisión Nacional Bancaria y de Valores',
    'Estados financieros básicos',
    'Operaciones',
    'Consejeros',
    'Consejero',
    'Prestadores',
    'Servicios financieros',
    'Unidades especializadas',
    'Instituciones financieras',
    'Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros',
    'Programas',
    'Programa',
    'Autocorrección',
    'Operadores',
    'Operador',
    'Bolsa',
    'Intermediarios',
    'Operaciones',
    'Inversión Extranjera',
    'Defensa al Usuario de Servicios Financieros',
    'Protección',
    'Datos Personales',
    'Prevención',
    'Recursos',
    'Procedencia Ilícita',
    'Sociedades Mercantiles',
    'Terrorismo',
    'Banco de México',
    'Expediente',
    'Expedientes',
    'Ahorro',
    'Retiro',
    'Financiera',
    'Régimen de inversión',
    'Artículo 91 de la Ley de Fondos de Inversión',
    'Emisoras de Valores',
    'Participantes del mercado de valores',
    'Servicios de inversión',
    'Operaciones con valores',
    'Requerimientos de información y documentación',
    'Celebración de operaciones',
    'Informe de Auditoría',
    'Cliente Institucional',
    'Cliente Sofisticado',
    'Fondos de Inversión',
    'Operadora',
    'Valores',
    'Emisoras',
    'Inversión',
    'Inversiones',
  ];

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.crudService
      .getKey()
      .pipe()
      .subscribe((key) => {
        this.keys$ = key;
      });
  }

  deleteKey(keyId: string): void {
    const confirmation = confirm('Seguro que deseas eliminar esta palabra?');
    if (confirmation) {
      this.crudService.deleteKey(keyId);
    }
  }

  addKey(): any {
    const key = this.addKeyForm.value.key;

    this.crudService
      .addKey(key)
      .then(() => {
        alert('La palabra se añadió');
      })
      .catch((err) => {
        alert('Error ' + err);
      });
  }

  addArrKeys(): void {}
}
