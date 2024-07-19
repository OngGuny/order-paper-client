import React, {useEffect, useState} from 'react';
import {Box, Slide} from "@mui/material";

const AbsentList = ({initialAbsentList = []}) => {
  const [absentList, setAbsentList] = useState(initialAbsentList.map(absentee => ({
    ...absentee,
    visible: true
  })));

  const removeItem = (index) => {
    setAbsentList(current =>
        current.map((item, idx) => idx === index ? {...item, visible: false} : item)
    );
  };

  useEffect(() => {
    if (absentList.some(item => !item.visible)) {
      const timer = setTimeout(() => {
        setAbsentList(current => current.filter(item => item.visible));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [absentList]);
  return (
      <Box>
        <h2>Absent List</h2>

        <ul className="border-5">
          {absentList.map((absentee, index) => (
              <Slide direction="up" in={absentee.visible} mountOnEnter unmountOnExit key={index}>
                <li>
                  {absentee.name}
                  <button onClick={() => removeItem(index)}>Remove</button>
                </li>
              </Slide>
          ))}
        </ul>
      </Box>
  )
};

export default AbsentList;

