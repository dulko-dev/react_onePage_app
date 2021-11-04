import React, { useEffect, useState } from "react";
import styles from "../../style/Menu.module.css";

const Menu = (props) => {
  const [categories, setCategories] = useState("");
  const [selectCategories, setSelectCategories] = useState([]);
  const [error, setError] = useState("");

  console.log(selectCategories);

  useEffect(() => {
    const urlCategory = "https://opentdb.com/api_category.php";
    fetch(urlCategory)
      .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          setError("something gonna wrong");
          return;
        }
      })
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  const markCategory = (e) => {
    const marked = e.target.value;
    setSelectCategories((prev) => [...prev, marked]);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menuSelect}>
        {error.length > 0 ? (
          error
        ) : (
          <div className={styles.menuSelectContent}>
            <h2>Select Menu</h2>
            <form>
              <select onChange={markCategory}>
                <option>Select categories...</option>
                {categories &&
                  categories.map((category) => {
                    return (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    );
                  })}
              </select>
              <button type="submit" onClick={() => props.startGame()}>
                Battle
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
