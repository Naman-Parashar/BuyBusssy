import Styles from "../Styles/style.module.css";
import { Link } from 'react-router-dom';
import { useValue } from "../ItemsContext";
import { useNavigate } from "react-router-dom";
// FireBase Auth import
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";
import { MagnifyingGlassSpinner } from "../Components/Spinner";


function SignIn() {
  const { showPassword, setValueIn, signInValue, setLogedIn, signInSpinner, setSignInSpinner, emptyField } = useValue();
  const navigate = useNavigate();

  async function handelSubmitSignIn() {
    setSignInSpinner(true);
    await signInWithEmailAndPassword(auth, signInValue.email, signInValue.password).then(
      (res) => {
        setLogedIn(true);
        // setValueIn({email:"",password:""});
        setSignInSpinner(false);
        navigate('/')
      }
    ).catch(
      (err) => {
        setValueIn({ email: "", password: "" });
        setSignInSpinner(false);
        emptyField(err.message.slice(22, 35));
      }
    );
  }

  return (
    <>
      {signInSpinner
        ? <MagnifyingGlassSpinner />
        :
        <div className={Styles.main}>
          <h1 style={{ fontFamily: "Gill Sans, sans-serif" }}>Sign In</h1>
          <div class="form-floating mb-3 col-8 m-auto">
            <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" required onChange={(e) => setValueIn((prev) => ({ ...prev, email: e.target.value }))} />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating col-8 m-auto">
            <input type="password" class="form-control " id="floatingPassword" placeholder="Password" required onChange={(e) => setValueIn((prev) => ({ ...prev, password: e.target.value }))} />
            <label for="floatingPassword">Password</label>
          </div>
          <div className={Styles.showPassword}>
            <input type="checkbox" onClick={() => showPassword("in")} />Show Password
          </div>
          <div>
            <Link to="/sign-up" >No Account? Sign up Instead</Link>
          </div>
          <button onClick={handelSubmitSignIn} class="btn btn-outline-dark mt-4">Sign In</button>

        </div>}
    </>
  );
}



export default SignIn;