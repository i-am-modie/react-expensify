import React from 'react';

const EditExpensePage = (props)=>(
    <p>editing expense with id of {props.match.params.id}</p>
);

export default EditExpensePage;