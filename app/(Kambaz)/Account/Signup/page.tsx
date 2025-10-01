import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-4" style={{ maxWidth: "400px" }}>
      <h3>Sign up</h3>
      <FormControl 
        placeholder="username" 
        className="wd-username mb-2"
      />
      <FormControl 
        placeholder="password" 
        type="password"
        className="wd-password mb-2"
      />
      <FormControl 
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2"
      />
      <Link href="/Account/Profile" className="text-decoration-none">
        <Button variant="primary" className="w-100 mb-2">
          Sign up
        </Button>
      </Link>
      <Link href="/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}