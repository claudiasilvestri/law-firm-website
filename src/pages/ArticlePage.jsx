import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "../data/articles.js";
import "../css/ArticlePage.css"; 

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <p>Articolo non trovato.</p>;

  const otherArticles = articles.filter((a) => a.id !== article.id);

  return (
    <section className="article-page">
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
      </Helmet>

      <img
        src={article.image} // usa l'immagine corretta dell'articolo
        alt={article.title}
        className="article-img"
      />
      <h1>{article.title}</h1>
      <small>{article.date}</small>

      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <Link to="/approfondimenti" className="button-accent">
        Torna indietro
      </Link>

      <div className="other-articles">
        <h3>Altri articoli</h3>
        <ul>
          {otherArticles.map((a) => (
            <li key={a.id}>
              <Link to={`/approfondimenti/${a.id}`}>{a.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

