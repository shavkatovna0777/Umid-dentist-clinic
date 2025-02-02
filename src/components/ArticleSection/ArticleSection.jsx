import { ArticleSectionCardData } from '../../assets/datas/datas.js';
import ArticleCards from '../ArticleCards/ArticleCards.jsx';

const ArticleSection = () => {
  if (!Array.isArray(ArticleSectionCardData)) {
    console.error('ArticleSectionCardData is not an array:', ArticleSectionCardData);
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ArticleSectionCardData.map((article) => (
          <ArticleCards
            key={article.id}
            image={article.image}
            title={article.title}
            date={article.date}
            views={article.views}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;