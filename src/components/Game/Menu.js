import React, { useEffect, useState } from "react";
import styles from "../../style/Menu.module.css";

const Menu = (props) => {
  const [categories, setCategories] = useState("");
  const [selectValue, setSelectValue] = useState("select categories");
  const [selectId, setSelectId] = useState("");
  const [selectCategories, setSelectCategories] = useState([]);
  const [error, setError] = useState("");

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
    if (selectCategories.some((el) => el.value === selectValue)) return;
    if (selectCategories.length < 4) {
      setSelectCategories((prev) => [
        ...prev,
        { value: selectValue, id: selectId },
      ]);
    }
  };

  const handleFetch = async (e) => {
    e.preventDefault();
    const url1 = `https://opentdb.com/api.php?amount=3&category=${selectCategories[0].id}&type=boolean`;
    const url2 = `https://opentdb.com/api.php?amount=3&category=${selectCategories[1].id}&type=boolean`;
    const url3 = `https://opentdb.com/api.php?amount=3&category=${selectCategories[2].id}&type=boolean`;
    const url4 = `https://opentdb.com/api.php?amount=3&category=${selectCategories[3].id}&type=boolean`;

    const promiseAll = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
      fetch(url4),
    ]);
    const data = await promiseAll.map((data) => data.json());
    const final = Promise.all(data);
    final.then((el) => props.setData(el));
    final.then((rem) => {
      let sum = 0;
      for (let i = 0; i < rem.length; i++) {
        sum += rem[i].results.length;
      }
      props.setOpenCount(sum);
    });

    props.startGame();
  };

  const handleRemove = (event, category) => {
    event.preventDefault();
    setSelectCategories(selectCategories.filter((el) => el.value != category));
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menuSelect}>
        {error.length > 0 ? (
          error
        ) : (
          <div className={styles.menuSelectContent}>
            <form>
              <h2>Test your knowledge</h2>
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
                  {selectCategories.map((category) => (
                    <div className={styles.singleCategory} key={category.id}>
                      <li>{category.value}</li>
                      <button onClick={(e) => handleRemove(e, category.value)}>
                        del
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={handleFetch}
                className={styles.buttonBattle}
                disabled={selectCategories.length != 4}
              >
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
