import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Filter } from './Filter'
import { RequestList } from './RequestList'

import "./style.css";

export const Search = () => {
const [search, setSearch] = useState(null);


  return (
    <div className="filter__containter">
      <Filter onChange={setSearch}/>
      <RequestList search={search} />
    </div>
  );
};
