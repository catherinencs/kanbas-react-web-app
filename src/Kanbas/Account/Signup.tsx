import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4">
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control mb-2" /><br/>
      <input placeholder="password" type="password" className="form-control mb-2" /><br/>
      <input placeholder="verify password" type="password" className="form-control mb-2" /><br/>
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100">Sign up</Link><br />
      <Link to="/Kanbas/Account/Signin" className="d-block mt-3">Sign in</Link>
    </div>
  );
}
