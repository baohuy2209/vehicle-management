"use client"; // 👈 Bắt buộc để dùng localStorage

import { useEffect, useState } from "react";
import RegistrationParking from "./RegistrationParking";

export default function RegistrationClientWrapper() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  if (!userId) return <p>Loading...</p>;

  return <RegistrationParking userId={userId} />;
}
