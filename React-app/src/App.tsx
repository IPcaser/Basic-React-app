import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";

function App() {
  let item = ["New York", "Mumbai", "Mumbatan", "Paris", "Pune", "Weed"];
  return (
    <div>
      <Alert>Baisc React Implementation</Alert>
      <ListGroup
        items={item}
        heading="Cities"
        onSelectItem={(item: string) => console.log(item)}
      ></ListGroup>
    </div>
  );
}

export default App;
