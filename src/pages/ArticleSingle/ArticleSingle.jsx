import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { articleSingle } from "../../assets/datas/datas";
import { FaCalendarAlt, FaShare, FaFacebookF, FaTwitter, FaTelegram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState, useEffect } from "react";
function ArticleSingle(articles) {
  const { t } = useTranslation();
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  // const { id } = useParams();
  console.log("Received ID from URL:", id);
  
  useEffect(() => {
    console.log("Current ID:", id);
    const currentArticle = articleSingle.find((article) => article.id === id);
    console.log("Found Article:", currentArticle);
  
    setArticle(currentArticle);
  
    const related = articleSingle
      .filter((article) => article.id !== id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    setRelatedArticles(related);
  
    window.scrollTo(0, 0);
  }, [id]);
  

  // Agar article topilmasa, foydalanuvchiga "Maqola topilmadi" xabarini chiqaramiz
  // if (!article) {
  //   return (
  //     <div className="container py-20 text-center">
  //       <h2 className="text-2xl font-bold text-darkBlue">
  //         {t("articles_page.article_not_found")}
  //       </h2>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="article-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                {t("articles_page.subHeading")}
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  {t("articles_page.home")}
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <Link to={"/"} className="current opacity-[1] text-darkBlue ">
                  {t("articles_page.articles")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maqola kontenti */}
      <section className="pb-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={articles.featuredImage} 
                  alt={articles.title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex justify-between items-center mb-6 text-gray-600">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue" />
                  <span>{articles.date}</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-lg font-medium text-darkBlue leading-relaxed">
                  {articles.intro}
                </p>
              </div>

              <div className="prose max-w-none">
              {(article?.content || []).map((section, index) => 
                  <div key={index} className="mb-8">
                    {section.heading && (
                      <h2 className="text-2xl font-bold text-darkBlue mb-4">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
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
                          src={relArticle.thumbnailImage || relArticle.featuredImage} 
                          alt={relArticle.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-darkBlue group-hover:text-blue transition-colors">
                          {relArticle.title.length > 40 ? relArticle.title.substring(0, 40) + "..." : relArticle.title}
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
        </div>
      </section>
    </>
  );
}

export default ArticleSingle;
