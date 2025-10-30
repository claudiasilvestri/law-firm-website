import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles.js";
import "../css/Approfondimenti.css";

export default function Approfondimenti() {
  const mesi = {
    Gennaio: 0, Febbraio: 1, Marzo: 2, Aprile: 3,
    Maggio: 4, Giugno: 5, Luglio: 6, Agosto: 7,
    Settembre: 8, Ottobre: 9, Novembre: 10, Dicembre: 11
  };

  const sortedArticles = [...articles].sort((a, b) => {
    const [gA, mA, yA] = a.date.split(" ");
    const [gB, mB, yB] = b.date.split(" ");
    const dateA = new Date(parseInt(yA), mesi[mA], parseInt(gA));
    const dateB = new Date(parseInt(yB), mesi[mB], parseInt(gB));
    return dateB - dateA;
  });

  return (
    <section className="approfondimenti-section">
      <h1>Approfondimenti</h1>

      {sortedArticles.map((article) => (
        <div key={article.id} className="card">
          <img
            src={article.imageCard}
            alt={`Immagine rappresentativa dell'articolo: ${article.title}`}
            className="card-img"
          />
          <h2>{article.title}</h2>
          <small>{article.date}</small>
          <p>{article.description}</p>
          <Link
            to={`/approfondimenti/${article.id}`}
            className="button-accent"
            aria-label={`Leggi l'articolo: ${article.title}`}
          >
            Leggi articolo
          </Link>
        </div>
      ))}
    </section>
  );
}
