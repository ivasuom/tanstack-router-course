import { useState } from "react";

const Auth = () => {
  const [username, setUsername] = useState("");

  return (
    <>
      <h1 className="mb-4">Log in</h1>
      <div>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username:"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log("Log in " + username);
            setUsername("");
          }}
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default Auth;
