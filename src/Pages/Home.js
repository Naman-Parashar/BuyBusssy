import Styles from "../Styles/style.module.css";
import Filter from "../Components/Filter";
import ItemsContainer from "./ItemsContainer";


function Home() {
  return (
    <>
    <div className={Styles.homeMain}>
      <Filter />
      <div className={Styles.ItemscontainerComp}>
        <ItemsContainer />
      </div>
    </div>
    </>
  );
}

export default Home;