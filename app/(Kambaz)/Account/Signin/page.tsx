import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-4" style={{ maxWidth: "400px" }}>
      <h3>Sign in</h3>
      <FormControl 
        id="wd-username"
        placeholder="username" 
        className="mb-2"
      />
      <FormControl 
        id="wd-password"
        placeholder="password" 
        type="password"
        className="mb-2"
      />
      <Link href="/Account/Profile" className="text-decoration-none">
        <Button variant="primary" className="w-100 mb-2">
          Sign in
        </Button>
      </Link>
      <Link href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}