import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App(){
  const journalElement = data.map((d) => {
    return (
      <Entry
        key={d.id}
        {...d}
      />
    )
  });
  return (
    <>
      <Header />
      {journalElement}
    </>
  )
}