import { Form, Button, Checkbox } from "semantic-ui-react";
import React from "react";

function Login() {
  return (
    <div className="login-form">
      <h2>Log in to Twiller</h2>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to all of Duey's Commands and Conditions" />
        </Form.Field>
        <Button>Log in</Button>
      </Form>
    </div>
  );
}

export default Login;
