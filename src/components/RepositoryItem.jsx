import React from "react";

const RepositoryItem = (props) => {
  return (
    <li>
      <h1>{props.repository.name}</h1>
      <p> Forms in React</p>

      <a href={props.repository.html_url}>acessar repositório</a>
    </li>
  );
};

export default RepositoryItem;