import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  const [open, setOpen] = useState(null);
  return (
    <div className="App">
      {faqs.map((i, c) => {
        return <List item={i} count={c} setOpen={setOpen} open={open} />;
      })}
    </div>
  );
}
function List({ item, count, setOpen, open }) {
  const isopen = count === open;
  return (
    <div className="itemdescription">
      <div
        className="item"
        onClick={() => {
          setOpen(isopen ? "null" : count);
        }}
      >
        <span>{count}</span>
        <p>{item.title}</p>
        <span>{isopen ? "-" : "+"} </span>
      </div>
      <div className="text">{isopen && <p>{item.text}</p>}</div>
    </div>
  );
}
