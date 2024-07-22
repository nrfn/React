# react_learning
React学習用のリポジトリです。



## Reactの作成
- 前提`Node.js`がインストールされていること。
- `npx create-react-app プロジェクト名`：※注意プロジェクト名に大文字英を含めることはできない。



## Reactの起動
- `npm start`：起動
- `control + C`：終了



## Reactの基本構造
- `public/index.html`が読み込まれる。
- `src/index.tsx`が読み込まれる。
- `src/App.tsx`が読み込まれる。



## Reactコンポーネントの基本ルール
- `jsx(tsx)`：JSやTSの中でHTML/CSSを記述できる。
- `returnは()で囲む`：returnが複数行に渡る場合は必ず()で囲む。
- `returnされる最上位のHTML要素は1つ`：returnされる最上位のHTML要素は複数存在できない。
- `Fragment`：`<>`でも書ける。Fragmentは実際には画面に描画されない。
- `interfaceを定義できる`：interfaceを定義し派生オブジェクトを作ることができる。継承したオブジェクトは、interfaceで定義された内容を実装していなければならない。



## JSXの記法
- `className`：htmlのクラスを指定。
- `style`：オブジェクトで渡す必要がある。`style={{ color: "blue", fontSize; "30px" }}`など。
- `オブジェクトのプロパティはキャメルケースで記述`：-が利用できない為、次の様に記述する。例）`font-size → fontSize`
- `イベント処理もキャメルケースで命名しオブジェクトを渡す`：例）`<button onClick={clickButton}>`



## アロー関数
- `アロー関数の書き方`：例）`const App: React.FC = () => {}`
- `exportをつけることができる`：しかし`export default`とするとエラーになる。



## アロー関数を使う理由
- `記述の簡略化`
- `thisの弊害を防ぐ`：`function`で関数を定義すると`this`が使える。しかし`this`は利用する場所やタイミングによって参照元が変わってしまう。



## React.FC
`React.FunctionComponent`が略されたもので、constでコンポーネントを定義できる型。



## Atomic Design
Atomic Designとはパーツやコンポーネントを組み合わせて一つのページを作成するUIデザインの手法。\
名前のAtoms（原子）やMolecules（分子）といった単位でページのデザインをしていく考え方。

- `ATOMS`\
ATOMS（原子）は、ボタンやインプットなど単体の要素で構成されるコンポーネントで、それ以上分解できないもの。\
このコンポーネントを基底コンポーネントと呼ぶ。

- `MOLECULES`\
MOLECULES（分子）は、ATOMSを組み合わせであり、ボタンや画像のコンポーネント等を組み合わせて作成する。

- `ORGANISMS`\
ORGANISMS（有機体）は、ATOMSやMOLECULESを組み合わせてできたもので、この時点で一つの意味を持つ機能が出来上がっているようなイメージとなる。

- `TEMPLATES`\
TEMPLATES（テンプレート）は画面のレイアウトのこと。\
ATOMS、MOLECULES、ORGANISMSを組み合わせてページのレイアウトを作成する。

- `PAGES`\
PAGES（ページ）は、最終的にユーザーに対して表示する画面。\
ここまでの全ての項目を組み合わせた上で、さらに表示するデータが組み込まれて、一つのページが完成されている状態となる。



## Props
コンポーネンと間のデータの受け渡し。

- Propsを渡す側の記述
```
  <Button
    text="ボタン１"
    color="blueberry"
    size="S"
    isHollow={false}
    onClickButton={onClickButtonFirst}
  />
```

- Propsを受け取る側の記述
```
const Button: React.FC<Props> = (props) => {
  let className = "";
  className += props.color;
  className += props.isHollow ? 'Hollow' : '';
  className += ' ';
  className += props.size;
}
```



## children
- コンポーネントの開始タグ、閉じタグの間に記述したデータのこと。
- `{props.children}`で展開できる。



## Hooks
- `useState`\
コンポーネントの状態を管理する。
```
useStateのインポート
import { useState } from 'react';

state変数と更新用関数の定義
const [ state変数, 更新用関数 ] = useState(初期値);
```

- `useEffect`
コンポーネントが読み込まれたり、stateが更新された際に実行される副作用関数。\
第一引数に関数を、第二引数にはuseEffectのトリガーになる変数等を記述。\
第二引数が空の場合、コンポーネントが呼び出された初回のみ実行される。
```
useEffectのインポート
import { useEffect } from 'react';

useEffectの定義
useEffect(() => {
  処理
}, [state変数]);
```

###### ▼以下デフォルトのREADME



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).