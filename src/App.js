import { useEffect, useState } from "react";
import './App.css';
import AdCard from './AdCard';
// import { companies, ads_data } from "./ads_data";
import axios from "axios";

// below function takes ads_data from the express server located on localhost:5000 in the api folder.

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    // if (query.length === 0 || query.length > 2)
    fetchData();
  }, [query]);

  return (
    <div className="app">

      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <div className="wrapper">
        <AdCard data={data} />
      </div>

    </div>

  );
}

export default App;

// ////////////////////////////////////////////////
// the below funnction uses the ads_data.js file present in the client folder as the data set. uncomment import {companies, ads_data} from './ads_data.js  and the below code to see its functioning.


// function App() {
//   const [query, setQuery] = useState("");
//   // method 4
//   // function to merge companies array and ads_data array to create a single array of merged objects.
//   const map = new Map();

//   ads_data.forEach(item => map.set(item.company_id, item));
//   companies.forEach(item => map.set(item._id, { ...map.get(item._id), ...item }));
//   const data = Array.from(map.values());
//   console.log(data)

//   const search = (data) => {
//     return data.filter(
//       (item) =>
//         item.headline?.toLowerCase().includes(query) ||
//         item.company_name?.toLowerCase().includes(query) ||
//         item.description?.toLowerCase().includes(query) ||
//         item.primaryText?.toLowerCase().includes(query)
//     )
//   }
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search Here.."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />

//       <div className="wrapper">
//         {<AdCard data={search(data)} />}
//       </div>

//     </div>
//   );
// }

// export default App;

