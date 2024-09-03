import { DocumentEditor } from "@mindfiredigital/react-canvas-editor";

function App() {
  const toolbarItem: any = {
    bold: true,
    italic: true,
    underline: true,
    undo: true,
    redo: true,
    image: true,
  };

  const handleChange = (data:any) => {
    console.log("test ->", data);
  };

  const handleSelectedText = (text:any) => {
    console.log(text);
  };

  return (
    <DocumentEditor
      toolbar={toolbarItem}
      on_change={handleChange}
      on_select={handleSelectedText}
      value='Hello world'
    />
  );
}

export default App;
