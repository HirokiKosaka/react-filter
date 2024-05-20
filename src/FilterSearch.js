import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

const people = [
  { name: "Alex", age: 20, country: "America", hobby: "Computer" },
  { name: "Jim", age: 18, country: "England", hobby: "Football" },
  { name: "Kim", age: 22, country: "Koria", hobby: "Game" },
  { name: "Katy", age: 27, country: "Canada", hobby: "Tennis" },
  { name: "Taro", age: 25, country: "Japan", hobby: "Reading" },
];

export const FilterSearch = () => {
  const [filterVal, setFilterVal] = useState("");
  const [matchNothing, setmatchNothing] = useState("");
  return (
    <>
      <h1>filterを使った検索機能実装</h1>
      <div className="container">
        <label htmlFor="seachName">名前を検索</label>
        <input
          type="text"
          value={filterVal}
          onChange={(e) => setFilterVal(e.target.value)}
          id="seachName"
        />
        <p>{matchNothing}</p>
      </div>
      <ul>
        {people
          .filter((person) => {
            const isMatch = person.name.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};
