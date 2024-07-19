import {useState} from "react";

const OrderSheet = (({orderedByList, absentList}) => {

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
      const presentList = orderedByList.filter(orderBy => !absentList.some(absentee => absentee.id === orderBy.id));

      return (
          <div>
            <h3>Order Sheet</h3>
            {presentList.map((orderBy) => (
                <div key={orderBy.name}>
                  <span>{orderBy.name + " : "}</span>
                  <div className="form-floating mb-3">
                            <textarea
                                className={"form-control"}
                                id={"menu"}
                                type="text"
                                placeholder={`Menu For ${orderBy.name}`}
                                style={{height: "5rem"}}
                                data-sb-validations={"required"}
                            >
                            </textarea>
                    <label htmlFor={"menu"}>Menu</label>
                    <div
                        className="invalid-feedback"
                        data-sb-feedback="menu:required"
                    >
                      A Menu is required.
                    </div>

                  </div>
                  {/*<input*/}
                  {/*    type={"text"}*/}
                  {/*    placeholder={`Menu For ${orderBy.name}`}*/}
                  {/*    value={orderMap.get(orderBy) || ""}*/}
                  {/*    onChange={(e) => writeOrder(orderBy, e.target.value)}*/}
                  {/*/>*/}
                </div>
            ))}
            <button onClick={submitOrders}>Submit Orders!</button>
          </div>
      );
    }
)
export default OrderSheet;