"use client";

import { useEffect, useState } from "react";
import TrackingRegistration from "./TrackingRegistration";

export default function TrackingRegistrationWrapper() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  if (!userId) return <p>Loading...</p>;

  return <TrackingRegistration userId={userId} />;
}
