import "./styles.css";
import { App as UseInput } from "./useInput";
import { App as UseTabs } from "./useTabs";
import { App as UseTitle } from "./useTitle";
import { App as UseClick } from "./useClick";

export default function App() {
  return (
    <div className="App">
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
    </div>
  );
}
