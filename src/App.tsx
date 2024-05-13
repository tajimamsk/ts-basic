import React from "react";
import logo from "./logo.svg";
import "./App.css";

// const let
const name = "hello"; //文字列リテラル
let nameChange = "hello";
nameChange = "hello2";

// アノテーション or 型推論
let username: string = "Hello";
let dummyNum = 2;
let bool: boolean = true;
let array1: boolean[] = [true, false, true];
let array2: (string | number)[] = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
}
// let nameObj: NAME = { first: "Yamada", last: "Taro" };
// let nameObj: NAME = { first: "Yamada", last: 1 };
// let nameObj: NAME = { first: "Yamada" };
let nameObj: NAME = { first: "Yamada", last: null };

const func1 = (x: number, y: number): number => {
  return x + y;
};

// Interseption Types
type PROFILE = {
  age: number;
  city: string;
};
type LOGIN = {
  username: string;
  password: string;
};
type USER = PROFILE & LOGIN;

const userA = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

// Union Types
let value: boolean | number;
value = true;
// value = "hello";

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello", true];

// Literal Types
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";
company = "Apple";

let memory: 256 | 512;
memory = 12;

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
