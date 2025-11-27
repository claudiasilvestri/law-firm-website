import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "../data/articles.js";
import "../css/ArticlePage.css";

export default function ArticlePage() {
  const { id } = useParams();

  const article = useMemo(() => articles.find(a => a.id === parseInt(id)), [id]);

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => new Date(a.date) - new Date(b.date));
  }, []);

  const currentIndex = useMemo(() => sortedArticles.findIndex(a => a.id === article?.id), [article, sortedArticles]);

  const suggestedArticles = useMemo(() => {
    if (!article) return [];
    const suggestions = [];
    if (currentIndex > 0) suggestions.push(sortedArticles[currentIndex - 1]);
    if (currentIndex < sortedArticles.length - 1) suggestions.push(sortedArticles[currentIndex + 1]);
    return suggestions;
  }, [article, currentIndex, sortedArticles]);

  if (!article) return <p>Articolo non trovato.</p>;

  return (
    <section className="article-page" aria-label={`Pagina articolo: ${article.title}`}>
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
      </Helmet>

      <img 
        src={article.image} 
        alt={`Immagine rappresentativa dell'articolo: ${article.title}`} 
        className="article-img" 
      />

      <h1>{article.title}</h1>
      <small>{article.date}</small>

      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="article-navigation">
        <Link to="/approfondimenti" className="back-button" aria-label="Torna alla lista articoli">
          Torna indietro
        </Link>

        <div className="suggested-articles" aria-label="Articoli suggeriti">
          <h3>Leggi anche</h3>
          <ul>
            {suggestedArticles.map(a => (
              <li key={a.id}>
                <Link to={`/approfondimenti/${a.id}`} aria-label={`Leggi l'articolo: ${a.title}`}>
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}