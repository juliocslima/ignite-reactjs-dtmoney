import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 12000,
          type: 'deposit',
          category: 'Recipe',
          date: new Date()
        },
        {
          id: 2,
          title: 'aluguel',
          amount: 12000,
          type: 'withdraw',
          category: 'House',
          date: new Date()
        },
        {
          id: 3,
          title: 'Cashback',
          amount: 500,
          type: 'deposit',
          category: 'Recipe',
          date: new Date()
        },
        {
          id: 4,
          title: 'Almoço',
          amount: 95.6,
          type: 'withdraw',
          category: 'Food',
          date: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);