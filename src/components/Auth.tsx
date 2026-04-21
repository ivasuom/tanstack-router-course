import { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "@tanstack/react-router";

interface Props {
  redirect?: string;
}

const Auth = ({ redirect }: Props) => {
  const navigate = useNavigate();

  const {
    username: currentUser,
    logIn,
    logOut,
    isAuthenticated,
  } = useAuthStore();

  const [username, setUsername] = useState("");

  return (
    <>
      <h1 className="mb-4">{isAuthenticated() ? currentUser : "Log in"}</h1>
      {isAuthenticated() ? (
        <button
          className="btn btn-primary"
          onClick={() => {
            logOut();
          }}
        >
          Log out
        </button>
      ) : (
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
              if (username.trim()) {
                logIn(username.trim());
                if (redirect) {
                  navigate({ to: redirect });
                }
              }

              setUsername("");
            }}
          >
            Log in
          </button>
        </div>
      )}
    </>
  );
};

export default Auth;
