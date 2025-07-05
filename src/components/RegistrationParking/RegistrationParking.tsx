"use client";
import React from "react";
import Footer from "../Footer/Footer";
import {
  parkingregistrationdetail,
  parkingregistrationdetailCreate,
} from "@/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import VehicleRegistration from "./VehicleRegistration";
import { getAllParkingRegistrationDetail } from "@/lib/services/parking-registration-details.service";
import { createNewParkingRegistration } from "@/lib/services/parking-registration.service";
type Props = {
  userId: string | null;
};
export default function RegistrationParking({ userId }: Props) {
  const [fullname, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [listVehicle, setListVehicle] = React.useState<
    parkingregistrationdetailCreate[]
  >([]);
  React.useEffect(() => {}, [listVehicle]);
  const handleRegistrationVehicle = async (e: React.FormEvent) => {
    e.preventDefault();
    const list_parkingdetails = await getAllParkingRegistrationDetail();
    const list_pd_id: Array<string> = [];
    list_parkingdetails.forEach((parkingdetails: parkingregistrationdetail) => {
      listVehicle.forEach((vehicle: parkingregistrationdetailCreate) => {
        if (parkingdetails.licenseplate === vehicle.licenseplate) {
          list_pd_id.push((parkingdetails.id - 1).toString());
        }
      });
    });
    const newPR = {
      name: fullname,
      email,
      phone,
      description,
      parking_registration_details: list_pd_id,
      parking_checkout: "",
      customer: userId,
    };
    const data = await createNewParkingRegistration(newPR);
    if (!data) {
      alert("Register failed");
      return;
    }
    alert("Register successfully");
  };
  return (
    <>
      <section className=" py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Register Parking in Saigon Centre
                </h6>
                <button
                  className="bg-black text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:text-black hover:bg-white hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={(e) => handleRegistrationVehicle(e)}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full px-4 py-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="fullname"
                    >
                      Fullname
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email address
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full py-2 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="flex flex-row items-center justify-between mt-3 mb-6">
                  <span className="text-gray-400 text-sm font-bold uppercase">
                    Vehicle Information
                  </span>
                  <VehicleRegistration
                    userId={Number(userId)}
                    setListVehicle={setListVehicle}
                  />
                </h6>
                <div className="flex flex-wrap">
                  <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">STT</TableHead>
                        <TableHead>License Plate</TableHead>
                        <TableHead>Vehicle Registration</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Floor</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {listVehicle.map((vehicle, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {vehicle.stt}
                          </TableCell>
                          <TableCell>{vehicle.licenseplate}</TableCell>
                          <TableCell>{vehicle.vehicleregistration}</TableCell>
                          <TableCell>{vehicle.position}</TableCell>
                          <TableCell>{vehicle.floor}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </form>
            </div>
          </div>
          <footer className="relative  pt-8 pb-6 mt-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with{" "}
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      Next JS
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://www.creative-tim.com"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      {" "}
                      Nguyen Bao Huy
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
      <Footer />
    </>
  );
}
