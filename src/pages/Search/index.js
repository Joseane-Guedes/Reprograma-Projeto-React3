import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import './styles.css'

const Search = () => {
  const [repositorios, setRepositorios] = useState([]);
  const [listaRepositorios, setListaRepositorios] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/joseane-guedes/repos")
      .then((resposta) => resposta.json())
      .then((dados) => setRepositorios(dados));
  }, []);

  useEffect(() => {
    setListaRepositorios(
      repositorios.filter((repo) => {
        return repo.name.includes(busca);
      })
    );
  }, [busca, repositorios]);

  return (
    <>
      <Menu />

      <input
      type="text"
        placeholder="Pesquisar repositório"
        onChange={(e) => {
          setBusca(e.target.value);
        }}
      />
      <ul className="repos" >
      {listaRepositorios.map((repo) => (
          <li className="repositorio" key={repo.id}>{repo.name}</li>
      ))}
      </ul>
      <Footer />
    </>
  );
};

export default Search;


