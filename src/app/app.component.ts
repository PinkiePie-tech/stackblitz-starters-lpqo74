import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public exampleControl = new FormControl<string | undefined>(
    undefined,
    Validators.required
  );

  constructor() {}

  ngOnInit() {
    this.exampleControl.valueChanges.subscribe((value) => console.log(value));
  }
}
