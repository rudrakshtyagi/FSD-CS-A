import React from "react";
import BookCard from "./components/BookCard";

const sampleBooks = [
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    coverUrl:
      "https://m.media-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    rating: 4.8,
    description:
      "Classic book on pragmatic software development techniques — practical advice for engineers at all levels.",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    coverUrl:
      "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
    rating: 4.6,
    description:
      "A handbook of agile software craftsmanship with many examples and heuristics.",
  },
];

const App = () => {
  return (
    <div
      style={{
        padding: 24,
        display: "grid",
        gap: 16,
        justifyContent: "center",
      }}
    >
      {sampleBooks.map((b) => (
        <BookCard
          key={b.title}
          {...b}
          onClick={() => alert(`${b.title} clicked`)}
        />
      ))}
    </div>
  );
};

export default App;
