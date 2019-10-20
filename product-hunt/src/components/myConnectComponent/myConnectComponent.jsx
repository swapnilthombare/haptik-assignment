import * as React from "react";
import { Bearer, factory } from "@bearer/react";

const MyConnectComponent = () => {
  const { Connect } = factory("Product Hunt");
  return (
    // Initialize the Bearer provider with your client ID
    <Bearer clientId="m-zX2mEmI-8aLJL1ErHwvr7mgHsSd2Z8lugd9d6Y5A4">
      <Connect
        onSuccess={({ authId }) => {
          // Use this authId like bearer.auth(authId).get(..
          console.log("AUTH_ID for this user", authId);
        }}
        render={({ connect }) => {
          return (
            <button className="btn btn-primary" onClick={connect}>
              Connect to Product Hunt
            </button>
          );
        }}
      />
    </Bearer>
  );
};
export default MyConnectComponent;
