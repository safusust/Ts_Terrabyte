import React from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";

function SignupForm() {
  const handleLogin = async (e) => {
    e.preventDefault();
  };
  return <Form handleSubmit={handleLogin}>
    <Input />
  </Form>;
}

export default SignupForm;
