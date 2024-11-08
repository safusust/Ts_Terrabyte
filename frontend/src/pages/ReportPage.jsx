import React, { useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import MapContainer from "../components/MapContainer";
import mapboxgl from "mapbox-gl";
import { AddressAutofill, SearchBox } from "@mapbox/search-js-react";

function ReportPage() {
  const mapboxApi = import.meta.env.VITE_MAPBOXAPI;
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState(null);
  const [place, setPlace] = useState({
    longitude: 0,
    latitude: 0,
  });
  return (
    <div className="p-5 max-w-screen-2xl mx-auto min-h-svh">
      <h1 className="text-3xl text-center font-bold underline">Report us</h1>

      <p className="py-4">Report your environmental status</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form>
          <Input
            title={"Your Full Name"}
            value={name}
            setValue={setName}
            placeholder={"Enter your name"}
            id={"name"}
            name={"name"}
            required={true}
          />
          <Input
            title={"Report Message"}
            value={message}
            setValue={setMessage}
            placeholder={"Your Message for report"}
            id={"message"}
            name={"message"}
            longText={true}
            required={true}
          />
          {/* <Input
            title={"Place Location"}
            value={location}
            setValue={setLocation}
            placeholder={"Add your location to report"}
            id={"location"}
            name={"location"}
            required={true}
          /> */}
          <SearchBox
            accessToken={mapboxApi}
            options={{
              language: "en",
              country: "BD",
            }}
            placeholder="Add a Location"
            mapboxgl={mapboxgl}
            value={location}
            onChange={(e) => setLocation(e)}
            marker
          />
          <button
            className="bg-slate-900 text-slate-100 w-full rounded-sm my-5 text-xl font-medium"
            type="submit"
          >
            Submit
          </button>
        </Form>
        <MapContainer />
      </div>
    </div>
  );
}

export default ReportPage;
