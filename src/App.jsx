import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return true;
  };

  const clearForm = () => {
    // Implement this function
    setFirstName('')
    setLastName('')
    setPassword('');
    setEmail('');
    setRole('')
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstname">
              First name <sup>*</sup>
            </label>
            <input name="firstname" placeholder="First name" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}/>
          </div>
          <div className="Field">
            <label htmlFor="lastname">Last name</label>
            <input name="lastname" placeholder="Last name"  onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input name="email" placeholder="Email address" type="email"   onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
          </div>
          <div className="Field">
            <label htmlFor="pass">
              Password <sup>*</sup>
            </label>
            <input type="password" name="pass" placeholder="Password" onClick={(e)=>{setPassword({value:e.target.value,isTouched:true}); console.log(password)}} onChange={(e)=>{setPassword(e.target.value)}} value={password.value}/>
            {(password.length < 8 || password.isTouched === true) && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label htmlFor="role">
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e)=>{setRole(e.target.value)}}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
