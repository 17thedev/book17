import { useState } from "react";
import { API_URL } from "../config";

export default function Book() {
  const [data, setData] = useState({});

  const submit = async () => {
    await fetch(`${API_URL}/api/booking/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    await fetch(`${API_URL}/api/sms/send`, {
      method: "POST"
    });

    alert("Booking confirmed!");
  };

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", padding: 20 }}>
      <h2>Book Appointment</h2>
      <input placeholder="Business Username" onChange={e=>setData({...data, businessUsername:e.target.value})} />
      <input placeholder="Your Name" onChange={e=>setData({...data, clientName:e.target.value})} />
      <input placeholder="Phone" onChange={e=>setData({...data, clientPhone:e.target.value})} />
      <input type="date" onChange={e=>setData({...data, date:e.target.value})} />
      <input type="time" onChange={e=>setData({...data, time:e.target.value})} />
      <button style={{ marginTop: 12, width: "100%" }} onClick={submit}>
        Confirm Booking
      </button>
    </div>
  );
}
