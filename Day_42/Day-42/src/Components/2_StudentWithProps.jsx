// Task 2: Create a component that accepts name and age as props

function StudentWithProps(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default StudentWithProps;


