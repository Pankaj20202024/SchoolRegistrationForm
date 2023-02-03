import { useState } from "react";
import "./App.css";

function App() {
  // fro getting the complete date
  var CurrentDate = new Date();
  //usestate for input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Select Gender");
  const [number, setNumber] = useState("");
  const [registrationnumber, setRegistrationNumber] = useState("");
  const [userAge, setUserAge] = useState("");

  const [userSchoolName, setUserSchoolName] = useState("");
  const [userClassName, setUserClassName] = useState("");

  const [userCurrentPercentage, setCurrentPercentage] = useState("");
  const [userDateOfBirth, setUserDateOfBirth] = useState("");

  //useState for error
  const [emptyError, setEmptyError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [registrationNumberError, setRegistrationNumberError] = useState("");
  const [userAgeError, SetUserAgeError] = useState("");
  const [userDateOfBirthError, SetUserDateOfBirthError] = useState("");
  const [userCurrentPercentageError, setCurrentPercentageError] = useState("");

  const [userSchoolNameError, setUserSchoolNameError] = useState("");
  const [userClassNameError, setUserClassNameError] = useState("");

  const validate = () => {
    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      number === "" ||
      registrationnumber === ""
    ) {
      setEmptyError("All fields are mandatory");

      return false;
    }
    if (!name.match(/^[A-Za-z0-9- ]+$/)) {
      setNameError("Name is not alphanumeric");

      return false;
    }
    if (!email.includes("@")) {
      setEmailError("must contain @");

      return false;
    }
    if (!gender.match(/male|female|other/i)) {
      setGenderError("please identify as male,female or other");

      return false;
    }

    if (number.length !== 10) {
      setPhoneNumberError("Phone Number Must contain 10 digit ");
      if (!number.match(/^[0-9]+$/)) {
        setPhoneNumberError("Phone Number Must contain only numbers");

        return false;
      }
      return false;
    }
    if (registrationnumber.length !== 8) {
      setRegistrationNumberError("Registration Number must contain 8 digits");

      return false;
    }
    if (!userAge.match(/^[0-9]+$/)) {
      SetUserAgeError("Age should be number");

      return false;
    }
    if (userDateOfBirth.substring(0, 4) >= CurrentDate.getFullYear()) {
      SetUserDateOfBirthError(
        "Year of birth should be smaller than current year "
      );

      return false;
    }
    if (!userCurrentPercentage.match(/^[0-9]+$/)) {
      setCurrentPercentageError("Percentage should be number");

      return false;
    }

    if (!userSchoolName.match(/^[A-Za-z- ]+$/)) {
      setUserSchoolNameError("Name is not alphanumeric");

      return false;
    }
    if (!userClassName.match(/^[0-9]+$/)) {
      setUserClassNameError("Class should be in number");

      return false;
    }
    return true;
  };

  const resetDefaultError = () => {
    setEmptyError("");
    setNameError("");
    setEmailError("");
    setGenderError("");
    setPhoneNumberError("");
    setRegistrationNumberError("");
    SetUserAgeError("");
    SetUserDateOfBirthError("");
    setCurrentPercentageError("");
    setUserSchoolNameError("");
    setUserClassNameError("");
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    resetDefaultError();
    const isValid = validate();
    if (isValid) {
      setName("");
      setEmail("");
      setNumber("");
      setGender("Select Gender");
      setRegistrationNumber("");
      setUserAge("");
      setUserDateOfBirth("");
      setCurrentPercentage("");
      setUserSchoolName("");
      setUserClassName("");
      resetDefaultError();
    }
  };
  return (
    <div className="Maincontainer">
      <h1 className="MainHeading">School Registration Form</h1>
      <form className="FormContainer" onSubmit={hadleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {nameError}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailError}
        <select
          name="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="Select Gender">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        {genderError}
        <input
          type="text"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        {phoneNumberError}
        <input
          type="text"
          placeholder="Registration Number"
          value={registrationnumber}
          onChange={(e) => {
            setRegistrationNumber(e.target.value);
          }}
        />
        {registrationNumberError}

        <input
          type="text"
          placeholder="Age"
          value={userAge}
          onChange={(e) => {
            setUserAge(e.target.value);
          }}
        />
        {userAgeError}

        <div className="DateOfBirthContainer">
          <p>D.O.B : </p>
          <input
            type="date"
            value={userDateOfBirth}
            onChange={(e) => {
              setUserDateOfBirth(e.target.value);
            }}
          />
        </div>
        {userDateOfBirthError}
        <input
          type="text"
          placeholder="Current Percentage"
          value={userCurrentPercentage}
          onChange={(e) => {
            setCurrentPercentage(e.target.value);
          }}
        />
        {userCurrentPercentageError}
        <input
          type="text"
          placeholder="School Name "
          value={userSchoolName}
          onChange={(e) => {
            setUserSchoolName(e.target.value);
          }}
        />
        {userSchoolNameError}
        <input
          type="text"
          placeholder=" Class "
          value={userClassName}
          onChange={(e) => {
            setUserClassName(e.target.value);
          }}
        />
        {userClassNameError}
        <input type="submit" value="Submit" id="submitbuttonid"/>
        {emptyError}
      </form>
    </div>
  );
}

export default App;
