import { Component, OnInit } from '@angular/core';

import * as faker from 'faker';


@Component({
  selector: 'app-home-container',
  templateUrl: './home.container.component.html',
  styleUrls: ['./home.container.component.sass']
})

export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tomalo = {
      name: faker.name.findName(),
      phone: faker.phone.phoneNumberFormat(),
      image: faker.image.avatar(),
      id: faker.random.number()
    };

    console.log(tomalo);
  }

}
