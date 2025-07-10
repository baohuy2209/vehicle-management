"use client";
import {
  customer,
  location,
  parkingregistrationdetail,
  parkingregistrationdetailCreate,
} from "@/types";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCustomerByUsername } from "@/lib/services/user.service";
import { DateTimePicker } from "../date-time-picker";
import {
  getAllLocation,
  getLocationAvailable,
} from "@/lib/services/location.service";
import { createNewParkingRegistrationDetail } from "@/lib/services/parking-registration-details.service";
type Props = {
  userId: number;
  setListVehicle: React.Dispatch<
    React.SetStateAction<parkingregistrationdetailCreate[]>
  >;
};

function VehicleRegistration({ userId, setListVehicle }: Props) {
  const [stt, setStt] = React.useState(0);
  const [licensePlate, setLicensePlate] = React.useState("");
  const [vehicleRegistration, setVehicleRegistration] = React.useState("");
  const [entryTime, setEntryTime] = React.useState<Date>();
  const [floor, setFloor] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState<customer | null>(null);
  const [listPosition, setListPosition] = React.useState<location[]>([]);
  const [loading, setLoading] = React.useState(true);
  const getCurrentUser = async () => {
    console.log(userId);
    const user = await getCustomerByUsername(userId);
    setCurrentUser(user);
    setLoading(false);
  };
  React.useEffect(() => {
    const getAvailablePosition = async () => {
      const list_available_position = await getAllLocation();
      setListPosition((prevs) => {
        const updated = [...(prevs || []), ...(list_available_position || [])];
        return updated;
      });
    };
    getAvailablePosition();
  }, []);
  React.useEffect(() => {
    getCurrentUser();
    console.log(currentUser);
  }, [userId, loading]);
  const handleClick = async () => {
    if (
      !stt ||
      !licensePlate ||
      !vehicleRegistration ||
      !entryTime ||
      !floor ||
      !position
    ) {
      alert("Please fill all fields");
    }
    const isoDate = new Date(entryTime ?? new Date()).toISOString();
    const detail = {
      stt,
      licenseplate: licensePlate,
      vehicleregistration: vehicleRegistration,
      entrytime: isoDate,
      floor,
      position,
    };
    const data = await createNewParkingRegistrationDetail(detail);
    if (!data) {
      alert("Failed to create parking registration detail");
    }
    setListVehicle((prevs) => {
      const updated = [...(prevs || []), detail];
      return updated;
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Vehicle</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register Parking</DialogTitle>
          <DialogDescription>
            Register your parking registration for Saigon Centre. Click save
            when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="stt">STT</Label>
            <Input
              id="stt"
              name="stt"
              value={stt}
              onChange={(e) => {
                const newStt = Number(e.target.value);
                setStt(newStt);
              }}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="licenseplate">License Plate</Label>
            <Input
              id="licenseplate"
              name="licenseplate"
              value={licensePlate}
              onChange={(e) => {
                setLicensePlate(e.target.value);
              }}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="vehicleregistration">Vehicle Registration</Label>
            <Input
              id="vehicleregistration"
              name="vehicleregistration"
              value={vehicleRegistration}
              onChange={(e) => {
                setVehicleRegistration(e.target.value);
              }}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="entrytime">Entry Time</Label>
            <DateTimePicker setDate={setEntryTime} date={entryTime} />
          </div>
          <div className="flex flex-row items-center justify-between gap-1">
            <div className="grid gap-3">
              <Label htmlFor="entrytime">Position</Label>
              <Select onValueChange={setPosition}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Position" />
                </SelectTrigger>
                <SelectContent>
                  {listPosition.map((location, index) => (
                    <SelectItem key={index} value={location.position}>
                      {location.position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label>Floor</Label>
              <Select onValueChange={setFloor}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Floor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleClick}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default VehicleRegistration;
