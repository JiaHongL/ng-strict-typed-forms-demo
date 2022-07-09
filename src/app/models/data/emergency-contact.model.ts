import { FormControl } from "@angular/forms";

/** 緊急聯絡人 資料模型 */
export interface EmergencyContact {

  /** 名稱 */
  name: string;

  /** 關係 */
  relation:string;

  /** 聯絡電話 */
  contactNumber: string;

}
