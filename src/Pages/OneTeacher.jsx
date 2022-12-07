import React, { useContext, useEffect, useState } from "react";
import BasicTabs from "../components/Tab";
import { MyContext } from "../Contexts/Context";

export default function OneTeacher() {
  const [data, setData] = useState([]);
  const { teacherId, setteacherId } = useContext(MyContext);
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [ourData, setOurData] = useState([]);

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
          setData(
            ...json.data.items.filter((e) => e.student_id_number == teacherId)
          );
          setIsLoaded(false);
          // console.log(data);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  {
    /*Our Api*/
  }

  useEffect(() => {
    fetch(
      `https://university-docs-production.up.railway.app/api/student/info/${teacherId}`
    )
      .then((response) => response.json())
      .then(
        (res) => {
          console.log(res.data.student);
          setOurData(res.data.student);
          setIsLoaded2(false);
          // console.log(ourData)
        },

        (error) => {
          setIsLoaded2(true);
          setError2(error);
        }
      );
  }, []);

  return (
    <>
      {isLoaded ? (
        <div> Loading...</div>
      ) : (
        <div
          class="content-wrapper"
          style={{
            width: "80%",
            margin: "auto",
            marginTop: "5rem",
            paddingTop: "2rem",
          }}
        >
          <h1 className="text-center">Talaba Ma'lumoti</h1>
          <section
            className="content"
            style={{
              width: "100%",
              margin: "auto",
              padding: "20px",
              paddingTop: "4rem",
              paddingBottom: "6rem",
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
                          value={data?.full_name}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          Department
                        </label>

                        <h2 className="form-control">
                          {data?.department?.name}
                        </h2>
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
                          <h2 className="form-control">
                            {data?.educationType?.name}
                          </h2>
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
                          <h2 className="form-control">
                            {data?.educationForm?.name}
                          </h2>
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

                        <h2 className="form-control">{data?.semester?.name}</h2>
                      </div>
                      <div className="form-group">
                        <label>Status</label>

                        <h2 className="form-control">
                          {data?.studentStatus?.name}
                        </h2>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="getreq container">
            <h1>Qo'shimcha ma'lumotlar</h1>
            <label>Employment Field</label>
            <h2 className="form-control">{ourData.employmentField}</h2>
            <label>Employment Type</label>
            <h2 className="form-control">{ourData.employmentType}</h2>
            <label>Is Leader?</label>
            <h2 className="form-control">
              {ourData.isLeader == false && "No"}
              {ourData.isLeader == true && "Yes"}
            </h2>
            <div className="form-group">
              <label>tutorName</label>

              <h2 className="form-control">{ourData.tutorName}</h2>
            </div>
            <label>Status</label>
            <h2 className="form-control">{ourData.status}</h2>
            <label>Passport Image</label>
            <br />
            <a
              href={`https://university-docs-production.up.railway.app/${ourData.passportUrl}`}
              download="passport"
              target="_blank"
            >
              <img
                src={`https://university-docs-production.up.railway.app/${ourData.passportUrl}`}
                alt=""
                download
                width={200}
              />
            </a>
            <br></br>
            <label>Document Image</label>
            <br />
            <a
              href={`https://university-docs-production.up.railway.app/${ourData.documentUrl}`}
              download="document"
              target="_blank"
            >
              <img
                src={`https://university-docs-production.up.railway.app/${ourData.documentUrl}`}
                alt=""
                download
                width={200}
              />
            </a>
          </div>

          <BasicTabs />
        </div>
      )}
    </>
  );
}
