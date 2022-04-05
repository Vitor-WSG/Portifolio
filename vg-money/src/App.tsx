import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionsTables } from './components/TramsactionsTables';
import { GlobalStyle } from './styles/Global';


export default function App(){
  return (
    <div>
      <Header/>
      <Dashboard/>
      <TransactionsTables/>
      <GlobalStyle/>      
    </div>
  )
}