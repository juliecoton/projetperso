import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-nos-produits',
  templateUrl: './nos-produits.component.html',
  styleUrls: ['nos-produits.component.scss']
})
export class NosProduitsComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'NosProduitsComponent message';
  }

  ngOnInit(): void {}
}
