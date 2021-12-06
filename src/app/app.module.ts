import { NgModule, Component, ChangeDetectionStrategy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  AbstractControl,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { FieldType } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';

@Component({
  template: `im MyCustomComponent!! formControl.value:
    {{ formControl.value | json }} `,
})
export class MyCustomComponent extends FieldType {
  ngOnInit() {
    console.log('in ngOnInit');

    this.formControl.valueChanges.subscribe((v) => {
      console.log({ v });
    });
  }

  ngOnDestroy() {
    console.log('in ngOnDestroy');
  }

  constructor() {
    super();
  }
}

@NgModule({
  declarations: [MyCustomComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      extras: { lazyRender: true },
      types: [{ name: 'custom-field', component: MyCustomComponent }],
    }),
  ],
})
export class CustomFieldModule {}

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CustomFieldModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
