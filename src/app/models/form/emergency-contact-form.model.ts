import { FormControl } from "@angular/forms";

/** 緊急聯絡人 表單模型 */
export interface EmergencyContactForm {

  /** 名稱 */
  name: FormControl<string|null>;

  /** 關係 */
  relation: FormControl<string|null>;

  /** 聯絡電話 */
  contactNumber: FormControl<string|null>;

}
