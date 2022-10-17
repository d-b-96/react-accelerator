import React from "react";

type TechBook = {
  id: number;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
};

type TechBooks = TechBook[];

type ListProps = {
  list: TechBooks;
};
type ItemProps = {
  title: String;
  url: string;
  author: string;
  num_comments: number;
  points: number;
};

const List: React.FC<ListProps> = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.id} {...item} />
    ))}
  </ul>
);

type SearchProps = {
  search: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<SearchProps> = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      className="text-input"
      id="search"
      type="text"
      value={search}
      onChange={onSearch}
    />
  </div>
);

const App = () => {
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

  const [searchTerm, setSearchTerm] = React.useState("react");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchedBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedBooks} />
    </div>
  );
};

const Item: React.FC<ItemProps> = ({
  title,
  url,
  author,
  num_comments,
  points,
}) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

export default App;
