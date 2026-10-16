"use client";

import { useState, useEffect } from "react";

export interface StoreStatus {
  isOpen: boolean;
  statusLabel: string;
  statusSubtext: string;
  karachiTime: string;
}

export function useStoreOpenStatus(): StoreStatus {
  const [status, setStatus] = useState<StoreStatus>({
    isOpen: true,
    statusLabel: "Open Now",
    statusSubtext: "Serving hot & fresh till 2:00 AM",
    karachiTime: "",
  });

  useEffect(() => {
    function computeStatus() {
      try {
        const now = new Date();
        // Format to Asia/Karachi time
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        });

        const timeParts = formatter.formatToParts(now);
        const hourPart = timeParts.find((p) => p.type === "hour");
        const minutePart = timeParts.find((p) => p.type === "minute");

        const hour = hourPart ? parseInt(hourPart.value, 10) : 18;
        const minute = minutePart ? parseInt(minutePart.value, 10) : 0;

        // Open daily from 1:00 PM (13:00) until 2:00 AM (02:00 next morning)
        const isOpen = hour >= 13 || hour < 2;

        const formattedTimeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(now);

        if (isOpen) {
          const closingNote =
            hour < 2
              ? `Closing tonight at 2:00 AM (in ${2 - hour}h)`
              : "Open daily till 2:00 AM";
          setStatus({
            isOpen: true,
            statusLabel: "Open Now",
            statusSubtext: closingNote,
            karachiTime: formattedTimeStr,
          });
        } else {
          setStatus({
            isOpen: false,
            statusLabel: "Closed Now",
            statusSubtext: "Opens today at 1:00 PM • Late night grill till 2:00 AM",
            karachiTime: formattedTimeStr,
          });
        }
      } catch {
        // Fallback if Intl fails
        setStatus({
          isOpen: true,
          statusLabel: "Open Now",
          statusSubtext: "Open daily till 2:00 AM",
          karachiTime: "PKT",
        });
      }
    }

    computeStatus();
    const interval = setInterval(computeStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
