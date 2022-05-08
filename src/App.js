import "./styles.css";
import LoginCard from "./UI/Composition/Cards/LoginCard/LoginCard";
import TextImput from "./UI/Units/TextImput/TextImput";

export default function App() {
  return (
    <div className="App">
      <LoginCard />
      <TextImput type="text" placeholder="Name" />
    </div>
  );
}
