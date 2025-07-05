import { DateTime } from "next-auth/providers/kakao";
export interface parkingregistration {
  prid: string;
  customerid: number;
  name: string;
  email: string;
  phone: string;
  description: string;
}
export interface parkingregistrationCreate {
  name: string;
  email: string;
  phone: string;
  description: string;
  parking_registration_details: Array<string>;
  parking_checkout: number | string;
  customer: string | null;
}
export interface parkingregistrationdetail {
  id: number;
  stt: number;
  licenseplate: string;
  vehicleregistration: string;
  entrytime: DateTime;
  floor: string;
  position: string;
}
export interface parkingregistrationdetailCreate {
  stt: number;
  licenseplate: string;
  vehicleregistration: string;
  entrytime: DateTime;
  floor: string;
  position: string;
}
export interface customerCreate {
  username: string;
  fullname: string;
  email: string;
  phone: string;
  password: string;
  parking_registrations: Array<parkingregistration>;
  linked_bank_accounts: Array<linkedbankaccount>;
  vehicle_infos: Array<vehicleinfo>;
}
export interface customer {
  id: number;
  username: string;
  citizenid: string;
  fullname: string;
  email: string;
  phone: string;
  password: string;
  parking_registrations: Array<parkingregistration>;
  linked_bank_accounts: Array<linkedbankaccount>;
  vehicle_infos: Array<vehicleinfo>;
}
export interface vehicleinfo {
  vehicleid: number;
  customerid: number;
  vehiclestatus: string;
  licenseplate: string;
  vehicleregistration: string;
}

export interface location {
  locationid: number;
  position: string;
  status: string;
  floorlocation: string;
}
export interface parkingcheckout {
  pcid: number;
  prid: number;
  vehicleid: number;
  description: string;
  licenseplate: string;
  actualexittime: DateTime;
}
export interface linkedbankaccount {
  bankaccountid: number;
  customerid: number;
  bankname: string;
  accountnumber: string;
  accountholder: string;
  linkeddate: DateTime;
  isdefault: boolean;
  status: string;
}
