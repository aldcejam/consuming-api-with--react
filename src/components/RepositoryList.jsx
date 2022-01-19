import React from "react";
import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";
import reactDom from "react-dom";

import '../styles/repositories.scss';



const RepositoryList = () => {
    /* ================================= */
    const [repositories, Setrepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos').
            then(response => response.json()).
            then(data => Setrepositories(data))
    }, [])

    console.log(repositories)

    return (
        <section className={'repository-list'}>
            <h1>Lista de repositorios</h1>
            <ul>
                {repositories.map(repository => {
                    return (
                        <RepositoryItem repository={repository}/>
                    )
                })}

            </ul>
        </section>
    );
};

export default RepositoryList;