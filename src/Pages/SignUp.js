import Styles from "../Styles/style.module.css";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useValue } from "../ItemsContext";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";
import { DnaSpinner } from "../Components/Spinner";
function SignUp() {
  const { showPassword, setValue, signUpValue, signInSpinner, setSignInSpinner, emptyField } = useValue();

  const navigate = useNavigate();
  function handelSignUpBack() {
    navigate("/sign-in");
  }

  async function handelSubmitSignup() {
    if (signUpValue.name === "") {
      emptyField("Name Can't be empty");
      return;
    }
    if (signUpValue.password === signUpValue.confirmPassword) {
      setSignInSpinner(true);
      await createUserWithEmailAndPassword(auth, signUpValue.email, signUpValue.password).then(
        async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: signUpValue.name,
          });
          setValue({ name: "", email: "", password: "", confirmPassword: "" });
          setSignInSpinner(false);
          navigate('/sign-in');
        }
      ).catch(
        (err) => {
          setValue({ name: "", email: "", password: "", confirmPassword: "" });
          setSignInSpinner(false);
          emptyField(err.message.slice(22, 35));
        }
      )
    }
    else if (signUpValue.confirmPassword === "") {
      emptyField("Confirm Password Can't be empty");
      return;
    }
  }

  return (
    <>
      {
        signInSpinner ? <DnaSpinner /> :
          <>
            <IoMdArrowRoundBack className={Styles.signupback} size="2rem" onClick={handelSignUpBack} />
            <div className={Styles.main}>
              <h1 style={{ fontFamily: "Gill Sans, sans-serif" }}>Sign Up</h1>
              <div class="form-floating mb-3 col-8 m-auto">
                <input type="text" class="form-control " id="floatingName" placeholder="Name" required onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))} />
                <label for="floatingName">Name</label>
              </div>
              <div class="form-floating mb-3 col-8 m-auto">
                <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" required onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-3 col-8 m-auto">
                <input type="password" class="form-control " id="floatingPassword" placeholder="Password" required onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))} />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating col-8 m-auto">
                <input type="password" class="form-control " id="floatingPassword2" placeholder="Confirm Password" required onChange={(e) => setValue((prev) => ({ ...prev, confirmPassword: e.target.value }))} />
                <label for="floatingPassword2">Confirm Password</label>
              </div>
              <div className={Styles.showPassword}>
                <input type="checkbox" onClick={() => showPassword("up")} />Show Password
              </div>
              <button type="submit" onClick={handelSubmitSignup} class="btn btn-outline-dark mt-4">Sign Up</button>
            </div>
          </>
      }
    </>
  );
}

export default SignUp;