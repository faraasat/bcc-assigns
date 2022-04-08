import TodoStickComponent from "./todo-stick";

const ActiveTodoComponent = () => {
  return (
    <div>
      <TodoStickComponent
        id={"1"}
        title={"active adasd asd sad asdasdsadsa d sad sadsad ad as d"}
        active={true}
      />
      <TodoStickComponent id={"1"} title={"active"} active={true} />
      <TodoStickComponent id={"1"} title={"active"} active={true} />
    </div>
  );
};

export default ActiveTodoComponent;
