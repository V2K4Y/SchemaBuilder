import React, { useState } from 'react';
import SchemaBuilder from './components/SchemaBuilder';
import JsonTab from './components/JsonTab';

const App = () => {
  const [fields, setFields] = useState([
    { name: '', type: '', fields: [] },
  ]);

const items = ['S', 'c', 'h','e','m','a', '-', 'B', 'u', 'i', 'l', 'd', 'e', 'r'];
const itemj = ['J', 'S', 'O','N','-','O', 'u', 't', 'p', 'u', 't'];

  return (
    <div 
      className='container'
      style={{minHeight: "100vh", width: "100vw", display: "flex", justifyContent: "space-between", gap: 10, background: "#4a4e69"}}>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, paddingTop: 40 }}>
        
        <h1>{items.map((item, index) => (
          <span key={index} content={item}>{item}</span>
        ))}</h1>

        <SchemaBuilder
          fields={fields}
          onChange={setFields}
          onAddField={() => setFields([...fields, { name: '', type: '', fields: [] }])}
        />

      </div>

      <div 
        className='json'
        style={{display: 'flex', flexDirection: 'column', flex: 1, background: "#023047", paddingTop: 40, paddingLeft: 40}}>
        
        <h2>{itemj.map((item, index) => (
          <span key={index} content={item}>{item}</span>
        ))}</h2>

        <JsonTab json={fields} />
        
      </div>
      
    </div>
  )
}  
export default App;
