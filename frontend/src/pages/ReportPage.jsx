import React from "react";
import Form from "../components/Form";
import Input from "../components/Input";

function ReportPage() {
    
  return (
    <div className="p-5">
      <h1 className="text-3xl text-center font-bold underline">
        Report us
      </h1>

      <p>Report your environmental status</p>

      <Form>
        <Input />
      </Form>
    </div>
  );
}

export default ReportPage;
