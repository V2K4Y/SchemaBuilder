import React, { useState } from 'react';
import { Input, Select, Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import 'antd/dist/reset.css';
const { Option } = Select;

const NestedField = ({ field, onChange, onDelete }) => {
  const divStyle = {
    border: 'none', 
    padding: '10px', 
    marginBottom: '10px', 
    borderRadius:5, 
    display: "flex",
    flexDirection: "column", 
    gap: 5,
    background: "#c9ada7",
    boxShadow: '0px 0px 10px rgba(32, 31, 31, 0.3)',
  };

  return (
    <div style={divStyle}>

      <div style={{display: "flex", gap: 5}} className='schema'>

        <Input
          placeholder='Field name'
          value={field.name}
          onChange={(e) => onChange({ ...field, name: e.target.value })}
        />

        <Select 
          style={{minWidth: 105}}
          placeholder="Type"
          value={field.type}
          onChange={(value) => onChange({ ...field, type: value })}
        >
          <Option value="">Field Type</Option>
          <Option value="String">String</Option>
          <Option value="Number">Number</Option>
          <Option value="Nested">Nested</Option>
        </Select>

        <Button 
          type="primary" 
          danger 
          onClick={() => onDelete()} 
          icon={<DeleteFilled />} 
          style={{ justifySelf: "flex-end" }}
        >
          Remove
        </Button>

      </div>

      {field.fields.map((nestedField, index) => (
        <div key={index} style={{ padding: -10, marginLeft: '25px', marginTop: 5, borderRadius: "10px"}}>
          
          <NestedField
            field={nestedField}
            onChange={(newField) => {
              const updatedFields = [...field.fields];
              updatedFields[index] = newField;
              onChange({ ...field, fields: updatedFields });
            }}
            onDelete={() => {
              const updatedFields = [...field.fields];
              updatedFields.splice(index, 1);
              onChange({ ...field, fields: updatedFields });
            }}
          />

        </div>
      ))}

      {field.type === 'Nested' && (
        
        <Button 
          type='primary'
          danger
          onClick={() => onChange({ ...field, fields: [...field.fields, { name: '', type: '', fields: [] }] })} 
          style={{width: "80%", alignSelf: "center"}}
        >
          + Add Nested Field
        </Button>
        
      )}

    </div>
  );
};

export default NestedField;