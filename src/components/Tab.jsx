import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Contexts/Context";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const { teacherId, setteacherId, study, setStudy, fieldId, setFieldId } =
    useContext(MyContext);

  const [status, setStatus] = useState("SINGLE");
  const [employmentType, setEmploymentType] = useState("WORKS_FORMAL");
  const [employmentFieldId, setemploymentFieldId] = useState(
    "045a5bd0-ae87-4180-8b6f-199a4e779988"
  );
  const [leader, setLeader] = useState(false);
  const [interestIds, setInterestIds] = useState([
    "03de6e03-c58b-4d91-a2ee-b3c1ee5dab37",
  ]);
  const [study1, setStudy1] = useState([
    "6b021208-4faa-4b08-b64f-4aff8a02fcf2",
  ]);
  const [imgSrc, setImgSrc] = useState(null);
  const [image, setImage] = useState(null);
  const [imgSrc2, setImgSrc2] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImageUpload = (e) => {
    const img = e.target.files;
    const url = URL.createObjectURL(img[0]);
    setImgSrc(url);
    setImage(img);
  };
  const handleImageUpload2 = (e) => {
    const img2 = e.target.files;
    const url2 = URL.createObjectURL(img2[0]);
    setImgSrc2(url2);
    setImage2(img2);
  };

  let Submit = () => {
    var formdata = new FormData();
    formdata.append("hemisStudentId", teacherId);
    formdata.append("status", status);
    formdata.append("employmentType", employmentType);
    formdata.append("employmentFieldId", employmentFieldId);
    formdata.append("leader", leader);
    formdata.append("interestIds", interestIds);
    formdata.append("passportImg", image[0]);
    formdata.append("doc", image2[0]);
    formdata.append("tutorId", tutor);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://university-docs-production.up.railway.app/api/student",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const [isLoaded5, setIsLoaded5] = useState(false);
  const [ourData1, setOurData1] = useState([]);
  const [tutor, setTutor] = useState("");

  useEffect(() => {
    fetch(
      `https://university-docs-production.up.railway.app/api/student/info/${teacherId}`
    )
      .then((response) => response.json())
      .then(
        (res) => {
          console.log(res.data.tutors[0].id);
          setOurData1(res.data);
          setIsLoaded5(false);
          setStudy(res.data.fields.STUDIES);
          setFieldId(res.data.fields.WORKS_FORMAL);
          setTutor(res.data.tutors[0].id);
          // console.log(ourData)
        },

        (error) => {
          setIsLoaded5(true);
          console.log(error);
        }
      );
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Qo'shish" {...a11yProps(0)} />
          <Tab label="Yangilash" {...a11yProps(1)} />
          <Tab label="O'chirish" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
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
                      <label htmlFor="exampleInputEmail1">Sertificates</label>
                      <select className="form-select">
                        <option value="IELTS">IELTS</option>
                        <option value="TOEFL">TOEFL</option>
                        <option value="Milliy">Milliy setifikat</option>
                      </select>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Olingan Bal"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Tutor Name:</label>

                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Tutor name"
                      />
                    </div>
                    <label htmlFor="exampleInputFile1">Passport</label>
                    <div>
                      <label htmlFor="imgDoctor" className="cursor-pointer">
                        <img
                          src={imgSrc}
                          style={{ width: "240px", height: "240px" }}
                          className="object-cover object-center mx-auto"
                        />
                      </label>
                      <input
                        type="file"
                        id="imgDoctor"
                        className="invisible"
                        // enctype="multipart/form-data"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputFile1">Document</label>
                      <div>
                        <label htmlFor="imgDoctor2" className="cursor-pointer">
                          <img
                            src={imgSrc2}
                            style={{ width: "240px", height: "240px" }}
                            className="object-cover object-center mx-auto"
                          />
                        </label>
                        <input
                          type="file"
                          id="imgDoctor2"
                          className="invisible"
                          // enctype="multipart/form-data"
                          accept="image/*"
                          onChange={(e) => handleImageUpload2(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="box-footer"></div>
                </form>
              </div>
              <div className="box box-success">
                <div className="box-header with-border">
                  <h3 className="box-title">Interest of Student</h3>
                </div>
                <div className="box-body">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="exampleInputEmail2"
                    placeholder="Interest of student"
                    onChange={(e) => setInterestIds(e.target.value)}
                  >
                    {ourData1.interests?.map((e) => (
                      <option value={e.id}>{e.name}</option>
                    ))}
                  </select>
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
                        Status
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-select"
                          onClick={(e) => setStatus(e.target.value)}
                        >
                          <option value="SINGLE">SINGLE</option>
                          <option value="MARRIED">MARRIED</option>
                          <option value="DIVORCED">DIVORCED</option>
                          <option value="WIDOW">WIDOW</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Hemis Student ID
                      </label>
                      <div className="col-sm-10">
                        <h2 className="form-control">{teacherId}</h2>
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
                      <label>Employment Type</label>

                      <select
                        className="form-select"
                        onClick={(e) => setEmploymentType(e.target.value)}
                      >
                        <option value="WORKS_FORMAL">WORKS_FORMAL</option>
                        <option value="STUDIES">STUDIES</option>
                        <option value="WORKS_INFORMAL">WORKS_INFORMAL</option>
                        <option value="UNEMPLOYED">UNEMPLOYED</option>

                        {/* <option value="divorced">Divorced</option> */}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Employment Field</label>
                      <select
                        className="form-select"
                        onClick={(e) => setemploymentFieldId(e.target.value)}
                      >
                        {fieldId?.map((e) => (
                          <option value={e.id}>{e.name}</option>
                        ))}

                        {/* <option value="divorced">Divorced</option> */}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Is Leader?</label>

                      <select
                        className="form-select"
                        onClick={(e) => setLeader(e.target.value)}
                      >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                        {/* <option value="divorced">Divorced</option> */}
                      </select>
                      <label>Studies</label>
                      <select
                        className="form-select"
                        onChange={(e) => {
                          setStudy1(e.target.value);
                        }}
                      >
                        {study.map((e) => (
                          <option value={e.id}>{e.name}</option>
                        ))}
                      </select>
                    </div>
                  </form>
                  <button className="btn btn-success" onClick={Submit}>
                    POST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
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
                      <label htmlFor="exampleInputEmail1">Sertificates</label>
                      <select className="form-select">
                        <option value="IELTS">IELTS</option>
                        <option value="TOEFL">TOEFL</option>
                        <option value="Milliy">Milliy setifikat</option>
                      </select>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Olingan Bal"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Tutor Name:</label>

                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Tutor name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputFile">Passport</label>
                      <input type="file" id="exampleInputFile" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputFile1">Document</label>
                      <input type="file" id="exampleInputFile1" />
                    </div>
                  </div>
                  <div className="box-footer"></div>
                </form>
              </div>
              <div className="box box-success">
                <div className="box-header with-border">
                  <h3 className="box-title">Interest of Student</h3>
                </div>
                <div className="box-body">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail2"
                    placeholder="Interest of student"
                  />
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
                        Status
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-select"
                          onClick={(e) => setStatus(e.target.value)}
                        >
                          <option value="WORKS_FORMAL">WORKS FORMAL</option>
                          <option value="UNEMPLOYED">UNEMPLOYED</option>
                          <option value="SINGLE">SINGLE</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Hemis Student ID
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail5"
                          placeholder="Id"
                        />
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
                      <label>Employment Type</label>

                      <select className="form-select">
                        <option value="WORKS_FORMAL">WORKS_FORMAL</option>
                        <option value="STUDIES">STUDIES</option>
                        <option value="WORKS_INFORMAL">WORKS_INFORMAL</option>
                        <option value="UNEMPLOYED">UNEMPLOYED</option>

                        {/* <option value="divorced">Divorced</option> */}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Employment Field</label>
                      <select className="form-select">
                        {fieldId?.map((e) => (
                          <option value={e.id}>{e.name}</option>
                        ))}

                        {/* <option value="divorced">Divorced</option> */}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Is Leader?</label>

                      <h2 className="form-control">
                        <select className="form-select">
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                          {/* <option value="divorced">Divorced</option> */}
                        </select>
                      </h2>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <button className="btn btn-danger">
          Student ma'lumotlarini o'chirish
        </button>
      </TabPanel>
    </Box>
  );
}
