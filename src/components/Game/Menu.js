import React, { useEffect, useState } from "react";
import styles from "../../style/Menu.module.css";

const Menu = (props) => {
  const [categories, setCategories] = useState("");
  const [selectValue, setSelectValue] = useState("select categories");
  const [selectId, setSelectId] = useState("");
  const [selectCategories, setSelectCategories] = useState([]);
  const [selectCategoriesId, setSelectCategoriesId] = useState([]);
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
    setSelectId(e.target.options[e.target.selectedIndex].dataset.id);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (selectValue === "select categories") return;
    if (selectCategories.includes(selectValue)) return;
    if (selectCategories.length < 4) {
      setSelectCategories((prev) => [...prev, selectValue]);
      setSelectCategoriesId((prev) => [...prev, selectId]);
    }
  };

  const handleFetch = async () => {
    const url1 = `https://opentdb.com/api.php?amount=3&category=${selectCategoriesId[0]}&difficulty=medium&type=boolean`;
    const url2 = `https://opentdb.com/api.php?amount=3&category=${selectCategoriesId[1]}&difficulty=medium&type=boolean`;
    const url3 = `https://opentdb.com/api.php?amount=3&category=${selectCategoriesId[2]}&difficulty=medium&type=boolean`;
    const url4 = `https://opentdb.com/api.php?amount=3&category=${selectCategoriesId[3]}&difficulty=medium&type=boolean`;

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

  const handleRemove = (event, category) => {
    console.log(event)
    event.preventDefault();
    setSelectCategories(selectCategories.filter((el) => el != category));
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
                          <option
                            key={category.id}
                            value={category.name}
                            data-id={category.id}
                          >
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
                    <div className={styles.singleCategory} key={index}>
                      <li>{category}</li>
                      <button onClick={(e) => handleRemove(e, category)}>
                        del
                      </button>
                    </div>
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
