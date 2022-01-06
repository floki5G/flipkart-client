import React, { useState } from "react"
import { AppBar, TextField, Checkbox, Box, Toolbar, MenuList, Typography, Paper, ListItemText, Divider, Button, Input, makeStyles, Grid, EditIcon, MenuItem } from '@material-ui/core'
import { useDispatch, useSelector } from "react-redux";
import { addaddress } from "../../../actions/order";


export const AddNewaddderss = (props) => {
  const { initialData } = props;
  const [name, setName] = useState(initialData ? initialData.name : "");
  const [mobileNumber, setMobileNumber] = useState(
    initialData ? initialData.mobileNumber : ""
  );
  const [pinCode, setPinCode] = useState(
    initialData ? initialData.pinCode : ""
  );
  const [locality, setLocality] = useState(
    initialData ? initialData.locality : ""
  );
  const [address, setAddress] = useState(
    initialData ? initialData.address : ""
  );
  const [cityDistrictTown, setCityDistrictTown] = useState(
    initialData ? initialData.cityDistrictTown : ""
  );
  const [state, setState] = useState(initialData ? initialData.state : "");
  const [landmark, setLandmark] = useState(
    initialData ? initialData.landmark : ""
  );
  const [alternatePhone, setAlternatePhone] = useState(
    initialData ? initialData.alternatePhone : ""
  );
  const [addressType, setAddressType] = useState(
    initialData ? initialData.addressType : ""
  );
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [id, setId] = useState(initialData ? initialData._id : "");


  const onAddressSubmit = (e) => {
    const payload = {
    
        name,
        mobileNumber,
        pinCode,
        locality,
        address,
        cityDistrictTown,
        state,
        landmark,
        alternatePhone,
        addressType,
      
    };

    if (id) {
      payload.address._id = id;
    }
    dispatch(addaddress(payload));
    setSubmitFlag(true);
  };
  const renderAddressForm = () => {
    return (
      <>
        <div className="flexRow">
          <div >
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div >
            <TextField
              label="10-digit mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flexRow">
          <div >
            <TextField
              label="Pincode"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <div >
            <TextField
              label="Locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            />
          </div>
        </div>
        <div className="flexRow">
          <div >
            <TextField
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="flexRow">
          <div >
            <TextField
              label="City/District/Town"
              value={cityDistrictTown}
              onChange={(e) => setCityDistrictTown(e.target.value)}
            />
          </div>
          <div >
            <TextField
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="flexRow">
          <div >
            <TextField
              label="Landmark (Optional)"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </div>
          <div >
            <TextField
              label="Alternate Phone (Optional)"
              value={alternatePhone}
              onChange={(e) => setAlternatePhone(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Address Type</label>
          <div className="flexRow">
            <div>
              <input
                type="radio"
                onClick={() => setAddressType("home")}
                name="addressType"
                value="home"
              />
              <span>Home</span>
            </div>
            <div>
              <input
                type="radio"
                onClick={() => setAddressType("work")}
                name="addressType"
                value="work"
              />
              <span>Work</span>
            </div>
          </div>
        </div>
        <div className="flexRow">
          {/* <MaterialButton
                title="SAVE AND DELIVER HERE"
                onClick={onAddressSubmit}
                style={{
                  width: "250px",
                  margin: "20px 0",
                }} 
              /> */}
            {/* <Button style={{ width: "250px", margin: "20px 0", }} onClick={() => cancel}>CANCEL </Button> */}


          <Button style={{ width: "250px", margin: "20px 0", }} onClick={onAddressSubmit}>SAVE AND DELIVER HERE</Button>
        </div>
      </>
    );
  };


  return (
    <>


      <div className="checkoutStep" style={{ background: "#f5faff" }}>
        <div className={`checkoutHeader`}>
          <div>
            <span className="stepNumber">+</span>
            <span className="stepTitle">{"ADD NEW ADDRESS"}</span>
          </div>
        </div>
        <div
          style={{
            padding: "0 60px",
            paddingBottom: "20px",
            boxSizing: "border-box",
          }}
        >
          {renderAddressForm()}
        </div>
      </div>



    </>
  )
}