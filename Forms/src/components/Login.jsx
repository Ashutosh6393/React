import {useState} from 'react'

export default function Login() {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (identifier, event)=>{
    setInputValues(preValues => (
      {...preValues, 
        [identifier]: event.target.value
      }
    ))
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log(inputValues);

  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={inputValues.email} onChange={(event)=> handleInputChange('email', event)}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={inputValues.password} onChange={(event) => handleInputChange('password', event)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
