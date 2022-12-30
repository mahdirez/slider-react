import Item from "./component/Item";

function App() {
  return (
  <div className="flex items-center justify-center flex-col w-screen h-screen">
    <p className="text-3xl border-b-4">نظرات کاربران</p>
    <Item/>
  </div>
  );
}

export default App;
