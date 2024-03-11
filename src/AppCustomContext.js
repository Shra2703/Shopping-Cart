import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomItemContext, { itemContext } from "./contextForCustom";

function AppCustomContext() {
  
  return (
    // behave likes the default provier
    <CustomItemContext>
      <div className="App">
        <h2>Shopping Cart</h2>

        <Navbar />
        <Items />
      </div>
    </CustomItemContext>
  );
}
export default AppCustomContext;
