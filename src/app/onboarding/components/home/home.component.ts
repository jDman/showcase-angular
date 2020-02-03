import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(readonly fb: FormBuilder) {}

  onBoardForm: FormGroup;

  ngOnInit() {
    this.onBoardForm = this.fb.group({
      email: [''],
      terms: [false]
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // Store locally for example app
    console.warn(this.onBoardForm.value);
  }
}
