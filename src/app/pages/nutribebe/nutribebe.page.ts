import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutribebe',
  templateUrl: './nutribebe.page.html',
  styleUrls: ['./nutribebe.page.scss'],
})
export class NutribebePage implements OnInit {
  slideOpts = {
    speed: 400,
    loop: true
  };
  constructor() { }

  ngOnInit() {
  }

}
