import TodoStickComponent from "./todo-stick";

const InactiveTodoComponent = () => {
  return (
    <div>
      <TodoStickComponent
        id={"1"}
        title={"active adasd asd sad asdasdsadsa d sad sadsad ad as d"}
        active={false}
      />
    </div>
  );
};

export default InactiveTodoComponent;
