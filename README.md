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
- `returnされるHTMLは一つの要素で囲まれている必要がある`：returnされる最上位のHTML要素は複数存在できない。
- `Fragment`：Fragmentは実際には画面に描画されない。
- `interfaceを定義できる`：interfaceを定義し派生オブジェクトを作ることができる。継承したオブジェクトは、interfaceで定義された内容を実装していなければならない。



## コンポーネントの記法
- `className`：htmlのクラスを指定
- `style`：styleの中身はオブジェクトで渡す必要がある。`style={{ color: "blue" }}`など。
- `オブジェクトのプロパティはキャメルケースで記述`：-が利用できない為、次の様に記述する。例）`font-size → fontSize`
- `イベント処理もキャメルケースで命名しオブジェクトを渡す`：例）`<button onClick={clickButton}>`



## アロー関数
- `アロー関数の書き方`：例）`const App: React.FC = () => {}`
- `exportをつけることができる`：しかし`export default`とするとエラーになる。


### ▼以下デフォルトのREADME



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