import React, { useEffect, useState } from "react";
import styles from "../../style/Menu.module.css";

const Menu = (props) => {
  const [categories, setCategories] = useState("");
  const [selectValue, setSelectValue] = useState("select categories");
  const [selectId, setSelectId] = useState("");
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

  const handleFetch = async () => {
    const url11 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[0].id}&difficulty=easy&type=boolean`;
    const url12 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[0].id}&difficulty=medium&type=boolean`;
    const url13 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[0].id}&difficulty=hard&type=boolean`;
    const url21 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[1].id}&difficulty=easy&type=boolean`;
    const url22 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[1].id}&difficulty=medium&type=boolean`;
    const url23 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[1].id}&difficulty=hard&type=boolean`;
    const url31 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[2].id}&difficulty=easy&type=boolean`;
    const url32 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[2].id}&difficulty=medium&type=boolean`;
    const url33 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[2].id}&difficulty=hard&type=boolean`;
    const url41 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[3].id}&difficulty=easy&type=boolean`;
    const url42 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[3].id}&difficulty=medium&type=boolean`;
    const url43 = `https://opentdb.com/api.php?amount=1&category=${selectCategories[3].id}&difficulty=hard&type=boolean`;

    const promiseAll = await Promise.all([
      fetch(url11),
      fetch(url12),
      fetch(url13),
      fetch(url21),
      fetch(url22),
      fetch(url23),
      fetch(url31),
      fetch(url32),
      fetch(url33),
      fetch(url41),
      fetch(url42),
      fetch(url43),
    ]);
    const data = await promiseAll.map((data) => data.json());
    const final = Promise.all(data);
    final.then((el) => props.setData(el));
  };

  const handleRemove = (event, category) => {
    console.log(event);
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
