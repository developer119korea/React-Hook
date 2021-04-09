const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    console.log("return");
    return;
  }

  if (onCancel && typeof onCancel !== "function") {
    console.log("return");
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  }
  return confirmAction;
}

export const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are You sure", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};