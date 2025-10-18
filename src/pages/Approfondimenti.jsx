import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles.js";
import "../css/Approfondimenti.css";

export default function Approfondimenti() {
  return (
    <section className="approfondimenti-section">
      <h1>Approfondimenti</h1>
      {articles.map((article) => (
        <div key={article.id} className="card">
          <img
            src={article.imageCard}
            alt={article.title}
            className="card-img"
          />
          <h2>{article.title}</h2>
          <small>{article.date}</small>
          <p>{article.description}</p>
          <Link
            to={`/approfondimenti/${article.id}`}
            className="button-accent"
          >
            Leggi articolo
          </Link>
        </div>
      ))}
    </section>
  );
}




