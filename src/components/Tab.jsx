import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

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
