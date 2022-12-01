import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Contexts/Context";

export default function OneTeacher() {
  const [data, setData] = useState([]);
  const { teacherId, setteacherId } = useContext(MyContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(
      `https://student.uzswlu.uz/rest/v1/data/student-list?_department=22&id=${teacherId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer wJm5Q0Yv7Gt7OPvZCwCZQTm04GLX0mP2",
        },
      }
    )
      .then((response) => response.json())
      .then(
        (json) => {
          // console.log(json);
          setData(...json.data.items.filter((e) => e.id == teacherId));
          setIsLoaded(false);
          console.log(data);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      {isLoaded ? (
        <div> Loading...</div>
      ) : (
        <div class="content-wrapper" style={{ width: "80%", margin: "auto" }}>
          <section
            className="content"
            style={{
              width: "100%",
              margin: "auto",
              padding: "20px",
              paddingTop: "3rem",
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="box box-primary">
                  <div className="box-header with-border">
                    {/* <h3 className="box-title">About Teacher</h3> */}
                  </div>
                  <form role="form">
                    <div className="box-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Full name</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Full Name"
                          // value={data.full_name}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          Department
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Department"
                          // value={data.department.name}
                        />
                        {/* <h2>{data.department}</h2> */}
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">File input</label>
                        <img src="" alt="" id="exampleInputFile" />
                      </div>
                    </div>
                    <div className="box-footer"></div>
                  </form>
                </div>
                <div className="box box-success">
                  <div className="box-header with-border">
                    <h3 className="box-title">Rasm</h3>
                  </div>
                  <div className="box-body">
                    <img src={data.image} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="box box-info">
                  <div className="box-header with-border">
                    {/* <h3 className="box-title">Horizontal Form</h3> */}
                  </div>
                  <form className="form-horizontal">
                    <div className="box-body">
                      <div className="form-group">
                        <label
                          htmlFor="inputEmail3"
                          className="col-sm-2 control-label"
                        >
                          Edu Type
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Edu Type"
                            value={data.educationType.name}
                          />
                          {/* <h2>{data.educationType.name}</h2> */}
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="inputPassword3"
                          className="col-sm-2 control-label"
                        >
                          Edu Form
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            id="inputPassword3"
                            placeholder="Edu form"
                            // value={data.educationForm.code}
                          />
                          {/* <h2>{data.educationForm.name}</h2> */}
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <div className="checkbox"></div>
                        </div>
                      </div>
                    </div>
                    <div className="box-footer"></div>
                  </form>
                </div>
                <div className="box box-warning">
                  <div className="box-header with-border">
                    <h3 className="box-title">General Elements</h3>
                  </div>
                  <div className="box-body">
                    <form role="form">
                      <div className="form-group">
                        <label>Semester</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter ..."
                          // value={data.semester.code}
                        />
                        {/* <h2>{data.semester.name}</h2> */}
                      </div>
                      <div className="form-group">
                        <label>Status</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter ..."
                          disabled
                          // value={data.studentStatus.code}
                        />
                        {/* <h2>{data.studentStatus.name}</h2> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
