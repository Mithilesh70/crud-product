import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgbDropdownModule],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  sidebar = false;

  menus: {
    routerLink: string;
    label: string;
  }[] = [
    {
      label: 'Employees',
      routerLink: 'employees',
    },
    {
      label: 'Add Employee',
      routerLink: 'employees/create',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
