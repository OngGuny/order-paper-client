import {useState} from 'react';
import {saveOrderPaper} from "../services/orderPaperService";

const OrderPaperComponent = () => {
    const [orderMap, setOrderMap] = useState({});
    const [place, setPlace] = useState('');
    const [absentList, setAbsentList] = useState([]);

    const addOrder = (who, menu) => {
        setOrderMap({
            ...orderMap,
            [who]: menu
        });
    };

    const removeOrder = (who) => {
        const newOrderMap = {...orderMap};
        delete newOrderMap[who];
        setOrderMap(newOrderMap);
    };

    const changePlace = (newPlace) => {
        setPlace(newPlace);
    };


    const handleSubmit = () => {
        try {
            saveOrderPaper(orderMap, place, absentList);
        } catch (error) {
            console.error('failed to save orderPaper', error);
        }
    };

    return (
        <div>
            {/* 폼 구현 */}
            <button onClick={handleSubmit}> Order!</button>
        </div>

    );

};