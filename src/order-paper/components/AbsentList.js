import React from 'react';

const AbsentList = ({absentList}) => (
    <div>
        <h2>Absent List</h2>
        <ul>
            {absentList.map((absentee, index) => (
                <li key={index}>{absentee.name}</li>
            ))}
        </ul>
    </div>
);

export default AbsentList;

