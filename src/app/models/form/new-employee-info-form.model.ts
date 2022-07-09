import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { EmergencyContactForm } from './emergency-contact-form.model';

/** 新進員工 表單模型 */
export interface NewEmployeeInfoForm {

  /** 中文名稱 */
  chineseName: FormControl<string | null>;

  /** 英文名稱 */
  englishName: FormControl<string | null>;

  /** 聯絡電話 */
  contactNumber: FormControl<string | null>;

  /** 戶籍地址 */
  residentAddress: FormControl<string | null>;

  /** 通訊地址 */
  mailingAddress: FormControl<string | null>;

  /** 同戶籍地址 */
  sameResidentAddress: FormControl<boolean | null>;

  /** 緊急聯絡人 (n筆) */
  emergencyContacts: FormArray<FormGroup<EmergencyContactForm>>;

}
