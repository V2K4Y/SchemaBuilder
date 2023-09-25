// SchemaBuilder.js
import React from 'react';
import NestedField from './NestedField';
import { Button } from 'antd';
import 'antd/dist/reset.css';

const SchemaBuilder = ({ fields, onChange, onAddField }) => {
  return (
      <div style={{ width:"45vw", marginLeft: '20px', padding: '20px',  borderRadius:10, background: "#9a8c98",
                    display: "flex", flexDirection: "column", gap: 5, zIndex: 5 }}>
        {fields.map((field, index) => (
          <NestedField
            key={index}
            field={field}
            onChange={(newField) => {
              const updatedFields = [...fields];
              updatedFields[index] = newField;
              onChange(updatedFields);
            }}
            onDelete={() => {
              const updatedFields = [...fields];
              updatedFields.splice(index, 1);
              onChange(updatedFields);
            }}
            onAddField={() => {
              const updatedFields = [...fields, { name: '', type: 'String', fields: [] }];
              onChange(updatedFields);
            }}
          />
        ))}
        <Button type="primary" onClick={onAddField}>+ Add Field</Button>
      </div>
  );
};

export default SchemaBuilder;
