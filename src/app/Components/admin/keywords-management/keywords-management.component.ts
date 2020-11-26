import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../Services/crud.service';
import { ActivatedRoute } from '@angular/router';
import {
  Validators,
  FormBuilder,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-keywords-management',
  templateUrl: './keywords-management.component.html',
  styleUrls: ['./keywords-management.component.scss'],
})
export class KeywordsManagementComponent implements OnInit {
  addKeyForm = this.fb.group({
    key: [null, Validators.required],
    newKey: this.fb.array([]),
  });

  public keys$;
  public itemId: string;

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

  // get newKey(): FormArray {
  //   return this.addKeyForm.get('newKey') as FormArray;
  // }

  // addNewKey() {
  //   const keys = this.fb.group({
  //     key: new FormControl(''),
  //   });
  //   this.newKey.push(keys);
  // }

  // updateKey(key, id) {
  //   console.log(key);
  // }
}
