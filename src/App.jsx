import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//  Imoort Component
import Books from "./components/Books";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  return (
    <>
      <h1>Book Buddy</h1>
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <p>Complete the React components needed to allow users to browse a library catalog, check out books, 
  review their account, and return books that they've finished reading.</p>

<p>You may need to use the `token` in this top-level component in other components that need to know 
if a user has logged in or not.</p>

<p>Don't forget to set up React Router to navigate between the different views of your single page application!</p> */
}
