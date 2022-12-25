import Form from "./components/Form";

import Surgery from "./components/Surgery";

function App() {
  return (
    <>
      <div className="flex justify-between">        
        <Surgery />
        <div className="flex  items-center">
          <Form />
        </div>
      </div>
      {/* <Surgery/> */}
      
    </>
  );
}

export default App;
