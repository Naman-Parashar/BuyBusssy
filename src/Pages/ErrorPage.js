import Styles from "../Styles/style.module.css"
function ErrorPage() {
  return (
    <>
      <div className={Styles.errorpage}>
        <h1>Oops! Something went wrong.</h1>
        <p>We apologize for the inconvenience. Please try again later.</p>
      </div>
    </>
  );
}

export default ErrorPage;