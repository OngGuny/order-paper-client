import {useEffect, useState} from "react";
import {getOrderByListService} from "../services/orderByService";
import AbsentList from "./AbsentList";
import TeamMembers from "./TeamMembers";
import OrderSheet from "./OrderSheet";

const TemptOrderPage = () => {
    const [orderByList, setOrderByList] = useState([]);
    const [absentList, setAbsentList] = useState([]);

    useEffect(() => {
        const getOrderByList = async () => {
            try {
                const orderByList = await getOrderByListService();
                setOrderByList(orderByList);
            } catch (error) {
                console.error('Failed to fetch OrderByList', error);
            }
        };
        getOrderByList();
    }, []);

    const handleOrderByToggle = (orderBy) => {
        const isAbsent = absentList.some(absentee => absentee.id === orderBy.id);

        if (isAbsent) {
            setAbsentList(absentList.filter(absentee => absentee !== orderBy));
        } else {
            setAbsentList([...absentList, orderBy]);
        }
    };
    return (
        <div>
            <AbsentList absentList={absentList}/>
            <TeamMembers
                orderByList={orderByList}
                handleOrderByToggle={handleOrderByToggle}
                absentList={absentList}
            />
            <OrderSheet orderByList={orderByList}/>
        </div>
    );
}
export default TemptOrderPage;