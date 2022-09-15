import express from "express";
const app = express();
import { companies, ads_data } from './ads_data.js'
import cors from "cors";

app.use(cors());

app.get('/', (req, res) => {
  const { q } = req.query;
  // console.log(q);

  // function used to merge companies and ads_data array into one single array of merged objects according to similar keys.

  const map = new Map();

  ads_data.forEach(item => map.set(item.company_id, item));
  companies.forEach(item => map.set(item._id, { ...map.get(item._id), ...item }));
  const merged_array = Array.from(map.values());
  // console.log(merged_array)

  // search funtionality matches the user input query with the company name, description of ad, primary teext of ad or the headline.

  const search = (data) => {
    return data.filter(
      (item) =>
        item.headline?.toLowerCase().includes(q) ||
        item.company_name?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.primaryText?.toLowerCase().includes(q)
    )
  }
  res.json(search(merged_array));

});


app.listen(5000, () => console.log(`Connected to port 5000 , API is working!`));