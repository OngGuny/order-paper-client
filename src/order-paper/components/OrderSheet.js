import {useState} from "react";

const OrderSheet = (({orderByList}) => {

        const [orderMap, setOrderMap] = useState(new Map());

        const writeOrder = (orderBy, item) => {
            const writeOrderMap = new Map(orderMap);
            writeOrderMap.set(orderBy, item);
            setOrderMap(writeOrderMap);
        }

        const submitOrders = () => {
            const orders = Array.from(orderMap.entries());
            console.log('In OrderSheet.js, Submitting orders:', orders);

            // 서버로 전송하는 코드를 여기에 작성
        };
        
        return (
            <div>
                <h3>Order Sheet</h3>
                {orderByList.map((orderBy) => (
                    <div key={orderBy.name}>
                        <span>{orderBy.name}</span>
                        <input
                            type={"text"}
                            placeholder={`Menu For ${orderBy.name}`}
                            value={orderMap.get(orderBy) || ""}
                            onChange={(e) => writeOrder(orderBy, e.target.value)}
                        />
                    </div>
                ))}
                <button onClick={submitOrders}>Submit Orders!</button>
            </div>
        );
    }
)
export default OrderSheet;