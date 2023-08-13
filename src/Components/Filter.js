import Styles from "../Styles/style.module.css"
function Filter() {

    return (
        <>
            <div className={Styles.filter}>
                <h3 className={Styles.filterTitle}><strong>Filter</strong></h3>
                <hr />
                {/* <p style={{ marginLeft: "5%" }}> Price : <span></span></p> */}
                <h3 style={{ marginLeft: "5%" }}> Category</h3>
                <div className={Styles.categoryList}>
                    <p><input type="checkbox" /> Men's Clothing </p>
                    <p><input type="checkbox" /> Women's Clothing </p>
                    <p><input type="checkbox" /> Jewelery</p>
                    <p><input type="checkbox" /> Electronics</p>
                </div>
            </div>
        </>
    );
}

export default Filter;