import React, { useContext } from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Contexts/Context";

export default function Dashboard() {
  const { teacherId, setteacherId } = useContext(MyContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://student.uzswlu.uz/rest/v1/data/student-list?_department=22`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer wJm5Q0Yv7Gt7OPvZCwCZQTm04GLX0mP2",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          setData(result.data.items);
          console.log(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoaded) {
    return <div>Loading....</div>;
  } else {
    return (
      <div class="content-wrapper">
        <div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <a
                      href="https://university-docs-production.up.railway.app/file.xls"
                      download="excel"
                    >
                      <button className="btn btn-success">Import qilish</button>
                    </a>
                  </h3>
                  <div className="card-tools">
                    <div
                      className="input-group input-group-sm"
                      style={{ width: 100 }}
                    >
                      <input
                        type="text"
                        name="table_search"
                        className="form-control float-right"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Position</th>
                      </tr>
                    </thead>
                    {data &&
                      data.map((e, i) => (
                        <tbody>
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                              <Link
                                to="/teacher"
                                onClick={() =>
                                  setteacherId(e.student_id_number)
                                }
                              >
                                {e.short_name}
                              </Link>
                            </td>
                            <td>{e.full_name}</td>
                            <td>{e.student_id_number}</td>
                            <td>{e.department.name}</td>
                          </tr>
                        </tbody>
                      ))}
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
          {/* /.row */}
        </div>
      </div>
    );
  }
}
