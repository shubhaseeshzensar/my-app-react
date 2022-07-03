import Items from "./Items";

const Employee = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Items
          key={Math.random()}
          fullName={item.fullName}
          age={item.age}
        ></Items>
      ))}
    </ul>
  );
};
export default Employee;
