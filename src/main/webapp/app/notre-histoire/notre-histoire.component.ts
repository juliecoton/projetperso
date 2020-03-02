import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-notre-histoire',
  templateUrl: './notre-histoire.component.html',
  styleUrls: ['notre-histoire.component.scss']
})
export class NotreHistoireComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'NotreHistoireComponent message';
  }

  ngOnInit(): void {}
}
