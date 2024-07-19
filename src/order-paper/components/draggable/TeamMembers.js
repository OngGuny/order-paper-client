import {Button} from "@mui/material";
import {useRef} from "react";
import {DndProvider, useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "./ItemTypes";
import {HTML5Backend} from "react-dnd-html5-backend";

const DraggableMember = ({orderBy, index, moveMember, handleOrderedByToggle, absentList}) => {
  const dragRef = useRef(null);

  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.MEMBER,
    drop(item) {
      if (!dragRef.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      moveMember(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  const [{isDragging}, drag, dragPreview] = useDrag({
    type: ItemTypes.MEMBER,
    item: {index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(dragRef));

  return (
      <div
          ref={dragRef}
          style={{
            opacity: isDragging ? 0.5 : 1,
            backgroundColor: absentList.includes(orderBy) ? 'red' : 'green',
            cursor: isDragging ? 'grabbing' : 'grab',
            border: isOver ? '4px solid black' : 'none',
          }}
      >
        <Button
            variant="contained"
            onClick={() => handleOrderedByToggle(orderBy)}
        >
          <div>
            <h6>{orderBy.position}</h6>
            {orderBy.name}
          </div>
        </Button>
      </div>
  )
}

const TeamMembers = ({orderByList, setOrderedByList, handleOrderedByToggle, absentList}) => {
  const moveMember = (dragIndex, hoverIndex) => {
    const copiedOrderByList = [...orderByList];
    const [draggedMember] = copiedOrderByList.splice(dragIndex, 1);
    copiedOrderByList.splice(hoverIndex, 0, draggedMember);
    setOrderedByList(copiedOrderByList);
  };
  return (
      <DndProvider backend={HTML5Backend}>
        <div>
          <h2>Team Members</h2>
          <Button variant="contained">Add Team Member!</Button>
        </div>
        {orderByList.map((orderBy, index) => (
            <DraggableMember
                key={orderBy.id}
                index={index}
                orderBy={orderBy}
                moveMember={moveMember}
                handleOrderedByToggle={handleOrderedByToggle}
                absentList={absentList}
            />
        ))
        }
      </DndProvider>
  );
}

export default TeamMembers;