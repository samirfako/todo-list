import React, { Fragment } from 'react';

// components
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
};

export default App;
