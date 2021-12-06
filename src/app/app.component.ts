import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form">
      <formly-form
        [model]="model"
        [fields]="fields"
        [options]="options"
        [form]="form"
      ></formly-form>
    </form>
    <button (click)="updateModel()">update model<button></button></button>
  `,
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'foo',
      type: 'custom-field',
    },
  ];

  updateModel() {
    this.model = {
      foo: [1, 2, 3],
    };
  }
}
