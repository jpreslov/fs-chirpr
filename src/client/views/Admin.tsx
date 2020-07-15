import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Admin: React.FC<AdminProps> = () => {
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState<string>("");
  const [text, setText] = useState<string>("");

  const saveEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let res = await fetch(`/api/chirps/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, text }),
    });

    if (res.ok) {
      history.push("/");
    } else {
      console.log("Something went wrong");
    }
  };

  const deleteChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let res = await fetch(`/api/chirps/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      history.push("/");
    } else {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/chirps/${id}`);
      let chirp = await res.json();
      setUser(chirp.user);
      setText(chirp.text);
    })();
  }, [id]);

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-8">
          <form className="form-group p-3 shadow border">
            <label htmlFor="user">User</label>
            <input
              id="user"
              type="text"
              onChange={(e) => setUser(e.target.value)}
              className="form-control"
            />
            <label htmlFor="text">Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="text"
              name="text"
              rows={8}
              className="form-control"
            />
            <button
              onClick={saveEdit}
              className="btn btn-outline-primary btn-block mt-3 w-75 mx-auto shadow-sm"
            >
              Save Edit
            </button>
            <button
              onClick={deleteChirp}
              className="btn btn-outline-danger btn-block mt-3 w-75 mx-auto shadow-sm"
            >
              Delete
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

interface AdminProps {}

export default Admin;