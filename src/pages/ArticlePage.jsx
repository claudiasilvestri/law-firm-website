import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "../data/articles.js";
import "../css/ArticlePage.css";

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) return <p>Articolo non trovato.</p>;

  // Ordina gli articoli per data crescente
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const currentIndex = sortedArticles.findIndex(a => a.id === article.id);

  const suggestedArticles = [];

  if (currentIndex > 0) suggestedArticles.push(sortedArticles[currentIndex - 1]);
  if (currentIndex < sortedArticles.length - 1) suggestedArticles.push(sortedArticles[currentIndex + 1]);

  return (
    <section className="article-page">
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
      </Helmet>

      <img src={article.image} alt={article.title} className="article-img" />
      <h1>{article.title}</h1>
      <small>{article.date}</small>

      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="article-navigation">
        <Link to="/approfondimenti" className="back-button">
          Torna indietro
        </Link>

        <div className="suggested-articles">
          <h3>Leggi anche</h3>
          <ul>
            {suggestedArticles.map(a => (
              <li key={a.id}>
                <Link to={`/approfondimenti/${a.id}`}>{a.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}




