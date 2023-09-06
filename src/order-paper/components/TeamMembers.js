const TeamMembers = ({orderByList, handleOrderByToggle, absentList}) => (
    <div>
        <h2>Team Members</h2>
        {orderByList.map((orderBy, index) => (
            <button
                key={index}
                onClick={() => handleOrderByToggle(orderBy)}
                style={{backgroundColor: absentList.includes(orderBy) ? 'red' : 'green'}}
            >
                {orderBy.name}
            </button>
        ))}
    </div>
);

export default TeamMembers;