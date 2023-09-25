import React from 'react';

const JsonTab = ({ json }) => {
  const combineFields = (fields) => {
    const result = {};

    fields.forEach((field) => {
      if (field.type === 'Nested') {
        result[field.name] = combineFields(field.fields);
      } else {
        result[field.name] = field.type;
      }
    });
    return result;
  };
  const combinedFields = combineFields(json);

  return (
    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <pre>{JSON.stringify(combinedFields, null, 5)}</pre>
    </div>
  );
};
export default JsonTab;