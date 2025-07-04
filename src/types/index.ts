import { DateTime } from "next-auth/providers/kakao";

export interface user {
  customerid: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createAt: DateTime;
  updateAt: DateTime;
}
export interface vehicleinfo {
  vehicleid: number;
  customerid: number;
  vehiclestatus: string;
  licenseplate: string;
  vehicleregistration: string;
}
export interface parkingregistration {
  prid: string;
  customerid: number;
  name: string;
  email: string;
  phone: string;
  description: string;
}
export interface parkingregistrationdetail {
  prdetailid: number;
  prid: number;
  stt: number;
  vehicleid: number;
  licenseplate: string;
  vehicleregistration: string;
  entrytime: DateTime;
  locationid: number;
  qrcode: string;
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
