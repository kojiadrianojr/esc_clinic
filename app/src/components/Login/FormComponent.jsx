import React, { useState, useReducer } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import styled from "styled-components";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FormFields = ({ title, state }) => {
  const returnIcon = (title) => {
    switch (title) {
      case "Username":
        return <AccountCircle />;
      case "Password":
        return <VpnKeyIcon />;
      default:
        return "not found";
    }
  };

  const [show, setShow] = useState(false);
  return <TextField
      style={{ margin: "5px 0px 5px 0px" }}
      id={title.toLowerCase()}
      label={title}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{returnIcon(title)}</InputAdornment>
        ),
        endAdornment: title === "Password" && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShow(!show)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {!show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      type={title === "Password" && !show ? "password" : "text"}

    />
};

const init = {
  Username: {
    error: false,
    name: 'username',
    value: ''
  },
  Password: {
    error: false,
    name: 'password',
    value: ''
  },
};
function reducer(state, action) {
  return "";
}

export default () => {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <FormContainer>
      {["Username", "Password"].map((name) => (
        <FormFields key={name} title={name} state={state[`${name}`]} action={dispatch} />
      ))}
      <Button variant="contained" style={{ backgroundColor: "#00B0FF" }}>
        Login
      </Button>
    </FormContainer>
  );
};
