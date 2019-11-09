import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

import SearchForm from "./SearchForm";

export default function CharacterList() {
  const Wrapper = styled.div`
    display: flex;
    text-align: center;
  `;

  // TODO: Add useState to track data from useEffect
  // const [characters, setCharacter] = useState([]);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);

        // console.log(response.data.results)
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);
  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <SearchForm handleChange={handleChange} value={query} />
      {data.map(character => (
        <Wrapper key={character.id}>
          <Card>
            <CardBody>
              <CardTitle>
                <p>{character.name}</p>
              </CardTitle>
            </CardBody>
            <CardBody>
              <img src={character.image} alt="rick and morty" />
            </CardBody>
          </Card>
        </Wrapper>
      ))}
    </section>
  );
}
