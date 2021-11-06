import React, { useEffect, useState } from "react";
import styles from "../../style/Menu.module.css";

const Menu = (props) => {
  const [categories, setCategories] = useState("");
  const [selectValue, setSelectValue] = useState("select categories");
  const [selectCategories, setSelectCategories] = useState([]);
  const [error, setError] = useState("");

  const multipleFunction = () => {
    props.startGame();
    handleFetch();
  };

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
    setSelectValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (selectValue === "select categories") return;
    if (selectCategories.includes(selectValue)) return;
    if (selectCategories.length < 4) {
      setSelectCategories((prev) => [...prev, selectValue]);
    }
  };

  const handleFetch = async () => {
    const url1 =
      "https://opentdb.com/api.php?amount=3&category=17&difficulty=medium&type=boolean";
    const url2 =
      "https://opentdb.com/api.php?amount=3&category=17&difficulty=medium&type=boolean";
    const url3 =
      "https://opentdb.com/api.php?amount=3&category=17&difficulty=medium&type=boolean";
    const url4 =
      "https://opentdb.com/api.php?amount=3&category=17&difficulty=medium&type=boolean";

    const promiseAll = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
      fetch(url4),
    ]);
    const data = await promiseAll.map((data) => data.json());
    const final = Promise.all(data);
    final.then((el) => props.setData(el));
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menuSelect}>
        {error.length > 0 ? (
          error
        ) : (
          <div className={styles.menuSelectContent}>
            <form>
              <h2>Select Menu</h2>
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                onChange={(e) => props.setPlayer(e.target.value)}
                placeholder="Enter your name"
              />
              <div className={styles.selectOptions}>
                <div className={styles.contentSelect}>
                  <select onChange={markCategory} value={selectValue}>
                    <option>select categories</option>
                    {categories &&
                      categories.map((category) => {
                        return (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <button className={styles.addButton} onClick={handleAdd}>
                  Add
                </button>
              </div>
              <div className={styles.poolQuestion}>
                <ul>
                  {selectCategories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
                </ul>
              </div>
              <button type="submit" onClick={multipleFunction}>
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
