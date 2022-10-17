import React from "react";

type TechBook = {
  id: number;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
};

type ListProps = {
  list: TechBooks;
};

type ItemProps = {
  item: TechBook;
};

type TechBooks = TechBook[];

const books = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    id: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    id: 1,
  },
];

const App = () => (
  <div>
    <h1>Hacker Stories</h1>
    <Search />
    <hr />
    <List list={books} />
  </div>
);

const Search = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        className="text-input"
        id="search"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

const List: React.FC<ListProps> = (props) => (
  <ul>
    {props.list.map((book) => (
      <Item key={book.id} item={book} />
    ))}
  </ul>
);

const Item: React.FC<ItemProps> = (props) => (
  <li key={props.item.id}>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default App;
