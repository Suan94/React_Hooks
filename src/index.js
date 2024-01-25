import React from 'react';
import ReactDOM from 'react-dom/client';
import { Padre } from './component/07-tarea-memo/Padre';

import './index.css';
// import { HookApp } from './HookApp';
// import { CounterApp } from './component/01-useState/CounterApp';
// import { CounterWithCustomeHook } from './component/01-useState/CounterWithCustomeHook';
// import { SimpleForm } from './component/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './component/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './component/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './component/04-useRef/FocusScreen';
// import { RealExampleRef } from './component/04-useRef/RealExampleRef';
// import { Layout } from './component/05-useLayoutEffect/Layout';
// import { Memorize } from './component/06-memos/Memorize';
// import { MemoHook } from './component/06-memos/MemoHook';
// import { CallbackHook } from './component/06-memos/CallbackHook';

// import { CountWithForm } from './component/00-test/CountWithForm';
// import { Test } from './component/00-test/test';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Padre />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
