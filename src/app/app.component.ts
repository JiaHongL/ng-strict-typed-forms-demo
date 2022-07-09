import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

import { NewEmployeeInfoForm } from './models/form/new-employee-info-form.model';
import { EmergencyContactForm } from './models/form/emergency-contact-form.model';

import { ToForm } from './models/to-form.model';

import { NewEmployeeInfo } from './models/data/new-employee-info.model';
import { EmergencyContact } from './models/data/emergency-contact.model';

import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // <--- 沒有型別的表單(自動推導)

  newEmployeeInfoForm = new FormGroup({
    chineseName: new FormControl(''),
    englishName: new FormControl(''),
    contactNumber: new FormControl(''),
    residentAddress: new FormControl(''),
    mailingAddress: new FormControl(''),
    sameResidentAddress: new FormControl(false),
    emergencyContacts: new FormArray([this.createEmergencyContactForm()]),
  });

  get newEmployeeInfoFormControls() {
    return this.newEmployeeInfoForm.controls;
  }

  // 沒有型別的表單(自動推導) --->

  // <--- 有型別的表單(一)

  // newEmployeeInfoForm: FormGroup<NewEmployeeInfoForm> = new FormGroup({
  //   chineseName: new FormControl(''),
  //   englishName: new FormControl(''),
  //   contactNumber: new FormControl(''),
  //   residentAddress: new FormControl(''),
  //   mailingAddress: new FormControl(''),
  //   sameResidentAddress: new FormControl(false),
  //   emergencyContacts: new FormArray([this.createEmergencyContactForm()]),
  // });

  // get newEmployeeInfoFormControls(): NewEmployeeInfoForm {
  //   return this.newEmployeeInfoForm.controls;
  // }

  // 有型別的表單(一) --->

  // <--- 有型別的表單(二)

  // newEmployeeInfoForm: FormGroup<ToForm<NewEmployeeInfo>> = new FormGroup({
  //   chineseName: new FormControl(''),
  //   englishName: new FormControl(''),
  //   contactNumber: new FormControl(''),
  //   residentAddress: new FormControl(''),
  //   mailingAddress: new FormControl(''),
  //   sameResidentAddress: new FormControl(false),
  //   emergencyContacts: new FormArray([this.createEmergencyContactForm()]),
  // });

  // get newEmployeeInfoFormControls(): ToForm<NewEmployeeInfo> {
  //   return this.newEmployeeInfoForm.controls;
  // }

  // 有型別的表單(二) --->

  ngOnInit(): void {

    this.newEmployeeInfoFormControls.sameResidentAddress.valueChanges.subscribe(
      (val) => {

        if (val) {
          this.newEmployeeInfoFormControls.mailingAddress.setValue(
            this.newEmployeeInfoFormControls.residentAddress.value
          );
          this.newEmployeeInfoFormControls.mailingAddress.disable();
        } else {
          this.newEmployeeInfoFormControls.mailingAddress.setValue('');
          this.newEmployeeInfoFormControls.mailingAddress.enable();
        }

      }
    );

    this.newEmployeeInfoFormControls.residentAddress.valueChanges
      .pipe(
        filter(
          (val) => !!this.newEmployeeInfoFormControls.sameResidentAddress.value
        )
      )
      .subscribe((address) => {
        this.newEmployeeInfoFormControls.mailingAddress.setValue(address);
      });

    // console.log(this.newEmployeeInfoFormControls.note?.value);
    // console.log(this.newEmployeeInfoFormControls.blaBlaBla?.value);
    // console.log(this.newEmployeeInfoFormControls.emergencyContacts.value[0].contactNumber);
  }

  // <--- 沒有型別 (自動推導)

  createEmergencyContactForm() {
    return new FormGroup({
      name: new FormControl(''),
      relation: new FormControl(''),
      contactNumber: new FormControl(''),
    });
  }

  // 沒有型別 (自動推導) --->

  // <--- 有型別的表單(一)

  // createEmergencyContactForm(): FormGroup<EmergencyContactForm> {
  //   return new FormGroup({
  //     name: new FormControl(''),
  //     relation: new FormControl(''),
  //     contactNumber: new FormControl(''),
  //   });
  // }

  // 有型別的表單(一) --->

  // <--- 有型別的表單(二)

  // createEmergencyContactForm(): FormGroup<ToForm<EmergencyContact>> {
  //   return new FormGroup({
  //     name: new FormControl(''),
  //     relation: new FormControl(''),
  //     contactNumber: new FormControl(''),
  //   });
  // }

  // 有型別的表單(二) --->

  addEmergencyContact(): void {
    this.newEmployeeInfoFormControls.emergencyContacts.push(
      this.createEmergencyContactForm()
    );
  }

  removeEmergencyContact(index: number): void {
    this.newEmployeeInfoFormControls.emergencyContacts.removeAt(index);
  }

  save(): void {
    console.log(
      'newEmployeeInfoForm.getRawValue',
      this.newEmployeeInfoForm.getRawValue()
    );
  }
}
