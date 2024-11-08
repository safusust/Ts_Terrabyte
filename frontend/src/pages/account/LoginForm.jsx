import React, { useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPass] = useState("");
  const [passError, setPassError] = useState("");
  const [error, setError] = useState("");
  const gProvider = new GoogleAuthProvider();
  auth.languageCode = "it";

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, gProvider);
      const user = response.user;
      console.log(user);
      // now send user info like displayName,email,photoUrl
    } catch (error) {
      console.log(error);
      console.error("Error while logging in");
      setError(error?.message);
    } finally {
    }
  };
  return (
    <div className="p-2">
      <Form
        handleSubmit={handleLogin}
        classes={"pointer-events-none grayscale opacity-70"}
      >
        <header>
          <h3 className="text-4xl font-bold text-center">
            Welcome to Aquaflow BD
          </h3>
          <p>We are here to help you.</p>
          <p>*This feature is unavailable right now.</p>
        </header>
        <Input
          title={"Email"}
          value={email}
          setValue={setEmail}
          placeholder={"Enter your email"}
          name={"email"}
          id={"email"}
          errorMsg={emailError}
        />
        <Input
          title={"password"}
          value={password}
          setValue={setPass}
          placeholder={"Enter your password"}
          name={"password"}
          id={"password"}
          errorMsg={passError}
        />

        <button className="bg-blue-500 text-cyan-50 w-full text-xl rounded-lg py-3">
          Login now
        </button>
      </Form>
      <hr />
      <button
        className="flex items-center justify-center gap-4 w-fit mx-auto bg-black text-white rounded-full px-10 py-2 text-xl my-6"
        type="button"
        onClick={handleGoogleLogin}
      >
        Login with google <FaGoogle />{" "}
      </button>
    </div>
  );
}

export default LoginForm;
