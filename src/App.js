import "./styles.css";
import { App as UseInput } from "./useInput";
import { App as UseTabs } from "./useTabs";
import { App as UseTitle } from "./useTitle";
import { App as UseClick } from "./useClick";
import { App as UsePrevent } from "./usePreventLeave";
import { App as UseConfirm } from "./useConfirm";
import { App as UseBeforeLeave } from "./useBeforeLeave";
import { App as UseFadeIn } from "./useFadeIn";

export default function App() {
  return (
    <div className="App">
      {/* <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UsePrevent />
      <UseConfirm />
      <UseBeforeLeave /> */}
      <UseFadeIn />
    </div>
  );
}
