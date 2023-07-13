import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Bili" animal="Dog" breed="Mixed" />
      <Pet name="Jack" animal="Dog" breed="Jack Houssel" />
      <Pet name="Toby" animal="Dog" breed="Mixed" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
