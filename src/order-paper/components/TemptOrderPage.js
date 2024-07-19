import {useEffect, useState} from "react";
import OrderByService from "../services/orderByService";
import AbsentList from "./AbsentList";
import TeamMembers from "./draggable/TeamMembers";
import OrderSheet from "./OrderSheet";
import axios from "axios";
import {Box, Card, CardContent} from "@mui/material";

const TemptOrderPage = () => {
  const [orderedByList, setOrderedByList] = useState([]);
  const [absentList, setAbsentList] = useState([]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    OrderByService.getOrderedByListService(cancelTokenSource.token)
    .then(response => {
      setOrderedByList(response.data);
    })
    .catch(error => {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.error(error);
      }
    });

    return () => {
      cancelTokenSource.cancel("Component unmounted");
    }

  }, []);

  const handleOrderedByToggle = (orderedBy) => {
    const isAbsent = absentList.some(absentee => absentee.id === orderedBy.id);

    if (isAbsent) {
      setAbsentList(absentList.filter(absentee => absentee !== orderedBy));
    } else {
      setAbsentList([...absentList, orderedBy]);
    } //todo fix
  };
  return (
      <Box sx={{display: 'flex', justifyContent: 'center', transform: 'translateX(-50px)'}}>
        <Card variant="outlined">
          <CardContent>
            <AbsentList absentList={absentList}/>
            <TeamMembers
                orderByList={orderedByList}
                setOrderedByList={setOrderedByList}
                handleOrderedByToggle={handleOrderedByToggle}
                absentList={absentList}
            />
            <OrderSheet orderedByList={orderedByList} absentList={absentList}/>
          </CardContent>
        </Card>
      </Box>
  );
}
export default TemptOrderPage;