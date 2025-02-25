import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { articleSingle } from "../../assets/datas/datas";
import { FaCalendarAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Img from "../../components/LazyLoadImg/Img";

function ArticleSingle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    if (!id) return;

    const numericId = parseInt(id, 10);
    const currentArticle = articleSingle.find(
      (article) => article.id === numericId
    );

    setArticle(currentArticle || null);

    if (currentArticle) {
      const related = articleSingle
        .filter((article) => article.id !== numericId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      setRelatedArticles(related);
    }

    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold text-darkBlue">Maqola topilmadi</h2>
      </div>
    );
  }

  return (
    <>
      <div
        className="article-page bg-cover bg-no-repeat bg-center h-[250px] sm:h-[300px] mb-10 py-16 sm:py-20 relative z-[1] w-full"
        style={{
          backgroundImage: `url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)`,
        }}
      >
        <div className="container text-center">
          <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold ">
            Maqolalar
          </h1>
          <div className="breadcrumps flex flex-wrap justify-center items-center mt-2 text-sm sm:text-base">
            <Link to="/" className="text-darkBlue opacity-70 font-bold">
              Bosh sahifa
            </Link>
            <IoIosArrowForward className="mx-2 text-blue" />
            <Link to="/articles" className="text-darkBlue font-bold">
              Maqolalar
            </Link>
            <IoIosArrowForward className="mx-2 text-blue" />
            <span className="text-darkBlue font-bold">
              {article.subTitle || ""}
            </span>
          </div>
        </div>
      </div>

      <section className="pb-10 sm:pb-20">
        <div className="container flex flex-col gap-8">
          <div className="w-full">
            <div className="mb-6 rounded-lg overflow-hidden shadow-md">
              <Img
                src={article.featuredImage || ""}
                alt={article.title || ""}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex items-center mb-4 text-gray-600 text-sm sm:text-base">
              <FaCalendarAlt className="mr-2 text-blue" />
              <span>{article.date || ""}</span>
            </div>

            <div className="mb-6">
              <p className="text-base sm:text-lg font-medium text-darkBlue leading-relaxed">
                {article.intro || ""}
              </p>
            </div>

            <div className="prose max-w-none text-sm sm:text-base">
              {Array.isArray(article.content) &&
                article.content.map((section, index) => (
                  <div key={index} className="mb-6">
                    {section.heading && (
                      <h2 className="text-lg sm:text-xl font-bold text-darkBlue mb-3">
                        {section.heading}
                      </h2>
                    )}
                    {Array.isArray(section.paragraphs) &&
                      section.paragraphs.length > 0 &&
                      section.paragraphs.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="mb-3 text-gray-700 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full">
            <div className=" p-5 rounded-lg ">
              <h3 className="text-lg sm:text-xl font-bold text-darkBlue mb-5 pb-2 border-b border-gray-300">
                O'xshash maqolalar
              </h3>
              <div className="space-y-4">
                {Array.isArray(relatedArticles) &&
                  relatedArticles.map((relArticle) => (
                    <Link
                      key={relArticle.id || Math.random()}
                      to={`/articles/${relArticle.id || ""}`}
                      className="flex gap-3 group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-md overflow-hidden">
                        <img
                          src={
                            relArticle.thumbnailImage ||
                            relArticle.featuredImage ||
                            ""
                          }
                          alt={relArticle.title || ""}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-darkBlue group-hover:text-blue transition-colors">
                          {relArticle.title.length > 40
                            ? relArticle.title.substring(0, 40) + "..."
                            : relArticle.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray mt-1">
                          {relArticle.date || ""}
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
