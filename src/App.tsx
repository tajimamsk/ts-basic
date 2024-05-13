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

// typeof 継承
// jsonの構造を継承したりする
let msg: string = "Hi";
let msg2: typeof msg;

let animal = { cat: "small cats" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum
// メンテナンス性が高い
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性　代入される側の方が抽象度の高い型
const comp1 = "test";
let comp2: string = comp1; //comp1はあくまでstring
let comp3: string = "test";
let comp4: "test" = comp3; //comp3はstring型

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

funcComp1 = funcComp2;
funcComp2 = funcComp1;

// ジェネリクス 要はテンプレート
// Tはエイリアス
interface GEN<T> {
  item: T;
}

const gen0: GEN<string> = { item: "Hello" };
const gen1: GEN = { item: "Hello" };
const gen2: GEN<number> = { item: "Hello" };

// デフォルトの値を設定
interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello" };

// 指定した型だけ許可
interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<number> = { item: 1 };
// const gen4: GEN2<boolean> = { item: true };

// 関数型
function funcGen<T>(props: T) {
  return { item: props };
}

const gen6 = funcGen("test");
const gen7 = funcGen<string | null>(null);

function functionGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen8 = functionGen1("hello");

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen10 = funcGen3({ price: 10 });

// アロー関数
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
