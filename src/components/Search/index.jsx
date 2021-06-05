import React from "react";
import { Link } from "react-router-dom";
import { Filter } from './Filter'
import { RequestList } from './RequestList'

import "./style.css";

export const Search = () => {
  return (
    <div className="filter__containter">
      <Filter />
      <RequestList />
    </div>
  );
};
