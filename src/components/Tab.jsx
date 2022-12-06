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
  const { teacherId, setteacherId } = useContext(MyContext);
  // const [status, setStatus] = useContext("")
  // const [employmentType, setEmployentType] = useContext("");
  // const [employmentFieldId, setemploymentFieldId] = useContext("");
  // const [leader, setLeader] = useContext(null)
  // const [interestIds, setInterestIds] = useContext("")
  // const [imgSrc, setImgSrc] = useState(null);
  // const [image, setImage] = useState(null);
//  const handleImageUpload = (e) => {
//    const img = e.target.files;
//    const url = URL.createObjectURL(img[0]);
//    setImgSrc(url);
//    setImage(img);
//  };

//   let Submit = ()=>{
//     var formdata = new FormData();
//     formdata.append("hemisStudentId", teacherId);
//     formdata.append("status", "SINGLE");
//     formdata.append("employmentType", "WORKS_FORMAL");
//     formdata.append(
//       "employmentFieldId",
//       "045a5bd0-ae87-4180-8b6f-199a4e779988"
//     );
//     formdata.append("leader", "true");
//     formdata.append("interestIds", "94b1af74-8e4f-4328-8554-c78a8d678d0f");
//     formdata.append(
//       "passportImg",
//       // fileInput.files[0],
//       "/C:/Users/admin/Pictures/1.jpg"
//     );
//     formdata.append(
//       "doc",
//       // fileInput.files[0],
//       "/C:/Users/admin/Pictures/3.png"
//     );
//     formdata.append("interestIds", "f781fd04-8692-462a-9ea7-9d26d8eaa1d6");
//     formdata.append("tutorId", "78a5a035-92de-4e89-9d24-c9e3707c3a30");

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(
//       "https://university-docs-production.up.railway.app/api/student",
//       requestOptions
//     )
//       .then((response) => response.text())
//       .then((result) => console.log(result))
//       .catch((error) => console.log("error", error));
//   }

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
                    <div>
                      <label htmlFor="imgDoctor" className="cursor-pointer">
                        <img
                          // src={imgSrc}
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
                        // onChange={(e) => handleImageUpload(e)}
                      />
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
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="exampleInputEmail2"
                    placeholder="Interest of student"
                  >
                    <option value="03de6e03-c58b-4d91-a2ee-b3c1ee5dab37">
                      Kitob o'qish
                    </option>
                    <option value="26158977-e790-4901-ba2b-6dad2e1be761">
                      Rassomchilik
                    </option>
                    <option value="bd43ea89-2401-47a1-8a56-53e71a52d297">
                      Pazandachilik
                    </option>
                    <option value="f781fd04-8692-462a-9ea7-9d26d8eaa1d6">
                      IT sohasi
                    </option>
                    <option value="94b1af74-8e4f-4328-8554-c78a8d678d0f">
                      Marketing
                    </option>
                    <option value="af3384f6-5684-40ec-a82b-fd4e1e463e3e">
                      Sport
                    </option>
                    <option value="09404c40-00e7-45ee-813e-f297736b9b41">
                      Musiqa
                    </option>
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
                        <select className="form-select">
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                          <option value="divorced">Divorced</option>
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
                        <option value="works_formal">Works formal</option>
                        <option value="not_working">Doesn't</option>
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
                        <select className="form-select">
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                          <option value="divorced">Divorced</option>
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
                        <option value="works_formal">Works formal</option>
                        <option value="not_working">Doesn't</option>
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
