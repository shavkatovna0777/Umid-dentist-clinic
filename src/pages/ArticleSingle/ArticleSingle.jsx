import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { articleSingle } from "../../assets/datas/datas";
import { FaCalendarAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

function ArticleSingle() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const { i18n } = useTranslation();
  useEffect(() => {
    if (!id) return;

    const numericId = parseInt(id, 10);
    console.log("Converted ID:", numericId);

    const currentArticle = articleSingle.find(
      (article) => article.id === numericId
    );
    console.log("Found Article:", currentArticle);

    setArticle(currentArticle || null);

    if (currentArticle) {
      const related = articleSingle
        .filter((article) => article.id !== numericId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setRelatedArticles(related);
    }

    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold text-darkBlue">
          {t("articles_page.article_not_found")}
        </h2>
      </div>
    );
  }

  return (
    <>
      <div
        className="article-page bg-cover bg-no-repeat bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] w-full"
        style={{
          backgroundImage: `url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)`,
        }}
      >
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-full">
              <h1 className="text-darkBlue text-[42px] font-bold">
                {t("articles_page.subHeading")}
              </h1>
              <div className="breadcrumps flex items-center mt-2 text-[16px]">
                <Link to="/" className="text-darkBlue opacity-70 font-bold">
                  {t("articles_page.home")}
                </Link>
                <IoIosArrowForward className="mx-2 text-blue" />
                <Link to="/articles" className="text-darkBlue font-bold">
                  {t("articles_page.articles")}
                </Link>
                <IoIosArrowForward className="mx-2 text-blue" />
                <Link
                  to={`/articles/${article.id}`}
                  className="text-darkBlue font-bold"
                >
                  {t("articles_page.articles")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-20">
        <div className="container flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="mb-6 rounded-lg overflow-hidden shadow-md ">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex items-center mb-6 text-gray-600">
              <FaCalendarAlt className="mr-2 text-blue" />
              <span>{article.date}</span>
            </div>

            <div className="mb-8">
              <p className="text-lg font-medium text-darkBlue leading-relaxed">
                {article.intro}
              </p>
            </div>

            <div className="prose max-w-none">
              {(article.content || []).map((section, index) => (
                <div key={index} className="mb-8">
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-darkBlue mb-4">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="mb-4 text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-darkBlue mb-6 pb-3 border-b border-gray-300">
                {t("articles_page.related_articles")}
              </h3>
              <div className="space-y-6">
                {relatedArticles.map((relArticle) => (
                  <Link
                    key={relArticle.id}
                    to={`/articles/${relArticle.id}`}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                      <img
                        src={
                          relArticle.thumbnailImage || relArticle.featuredImage
                        }
                        alt={relArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-darkBlue group-hover:text-blue transition-colors">
                        {relArticle.title.length > 40
                          ? relArticle.title.substring(0, 40) + "..."
                          : relArticle.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {relArticle.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleSingle;
