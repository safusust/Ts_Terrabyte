import React, { useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";

function ReportPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [place, setPlace] = useState({
    longitude: 0,
    latitude: 0,
  });
  return (
    <div className="p-5">
      <h1 className="text-3xl text-center font-bold underline">Report us</h1>

      <p>Report your environmental status</p>

      <Form>
        <Input
          title={"Your Full Name"}
          value={name}
          setValue={setName}
          placeholder={"Enter your name"}
          id={"name"}
          name={"name"}
        />
        <Input
          title={"Report Message"}
          value={message}
          setValue={setMessage}
          placeholder={"Your Message for report"}
          id={"message"}
          name={"message"}
          longText={true}
        />
        
      </Form>
    </div>
  );
}

export default ReportPage;