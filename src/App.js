import "./styles.css";
import { App as UseInput } from "./useInput";
import { App as UseTabs } from "./useTabs";

export default function App() {
  return (
    <div className="App">
      <UseInput/>
      <UseTabs/>
    </div>
  );
}
