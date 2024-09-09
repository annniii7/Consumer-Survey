import React from "react";
import Button from "./Button";


const Welcome = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="text-9xl">Welcome Customer</h1>
        <Button name="Start" link={"/questions"}/>
      </div>
    </div>
  );
};

export default Welcome;
