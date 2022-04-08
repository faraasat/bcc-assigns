import TodoStickComponent from "./todo-stick";

const InactiveTodoComponent = () => {
  return (
    <div>
      <TodoStickComponent id={"1"} title={"inavtive"} active={true} />
    </div>
  );
};

export default InactiveTodoComponent;
