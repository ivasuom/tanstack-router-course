import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useAuthStore } from "../../stores/authStore";

export const Route = createFileRoute("/profile/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  const { username: currentUser, updateUsername } = useAuthStore();

  const [username, setUsername] = useState(currentUser || "");

  return (
    <>
      <h1>Edit profile</h1>
      <label htmlFor="username" className="form-label">
        Username:
      </label>
      <input
        id="username"
        type="text"
        className="form-control mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          if (username.trim()) {
            updateUsername(username.trim());
          }
        }}
      >
        Save
      </button>
    </>
  );
}
