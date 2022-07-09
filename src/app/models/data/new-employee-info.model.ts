import { EmergencyContact } from './emergency-contact.model';

/** 新進員工 資料模型 */
export interface NewEmployeeInfo {

  /** 中文名稱 */
  chineseName: string;

  /** 英文名稱 */
  englishName: string;

  /** 聯絡電話 */
  contactNumber: string;

  /** 戶籍地址 */
  residentAddress: string;

  /** 通訊地址 */
  mailingAddress: string;

  /** 同戶籍地址 */
  sameResidentAddress: boolean;

  /** 緊急聯絡人 (n筆) */
  emergencyContacts: EmergencyContact[];

  /** 備註 (後端有給，但前端表單不一定會用到) **/
  note?:string;

  /** 前端自用欄位(非後端欄位) */
  blaBlaBla?:string;

}
