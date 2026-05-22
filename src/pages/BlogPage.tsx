import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Search, User, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const API_KEY = "462d173c-191d-45ec-b399-4e1d71f13efd";
const API_URL = "http://localhost:5000/api";
const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { currentLanguage } = useLanguage();

  const getField = (post: any, field: string) => {
    const lang = currentLanguage === 'de' ? 'De' : currentLanguage === 'en' ? 'En' : 'Fr';
    return post[`${field}${lang}`] || post[`${field}En`] || post[`${field}Fr`] || post[field] || '';
  };

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ apiKey: API_KEY, limit: "100" });
    if (search) params.set("search", search);
    fetch(`${API_URL}/blogs/public?${params}`)
      .then(r => r.json())
      .then(data => { setPosts(data.blogs || []); setPage(1); })
      .finally(() => setLoading(false));
  }, [search]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginated = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString(
      currentLanguage === 'de' ? 'de-DE' : currentLanguage === 'en' ? 'en-US' : 'fr-FR',
      { month: "long", day: "numeric", year: "numeric" }
    );

  return (
    <main>
      <Navbar />

      <section className="relative min-h-[50vh] flex items-end pb-20 bg-dark overflow-hidden pt-20">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
        <div className="container relative z-10">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            {currentLanguage === 'de' ? 'Geschichten & Einblicke' : currentLanguage === 'en' ? 'Stories & Insights' : 'Histoires & Inspirations'}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-dark-foreground leading-[0.95] max-w-3xl">
            {currentLanguage === 'de' ? 'Unser' : currentLanguage === 'en' ? 'Our' : 'Notre'}<br />
            <em className="text-primary">Journal</em>
          </h1>
          <p className="mt-6 text-dark-foreground/60 text-lg max-w-xl">
            {currentLanguage === 'de'
              ? 'Radführer, Stadtgeschichten und Tipps zur Erkundung Straßburgs auf zwei Rädern.'
              : currentLanguage === 'en'
              ? 'Cycling guides, city stories, and tips for exploring Strasbourg on two wheels.'
              : 'Guides vélo, histoires de la ville et conseils pour explorer Strasbourg à deux roues.'}
          </p>
          <div className="relative max-w-md mt-8">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-foreground/40" />
            <input
              type="text"
              placeholder={currentLanguage === 'de' ? 'Artikel suchen...' : currentLanguage === 'en' ? 'Search articles...' : 'Rechercher des articles...'}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-dark-surface border border-dark-surface rounded-none pl-11 pr-4 py-3 text-sm text-dark-foreground placeholder:text-dark-foreground/40 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[16/10] bg-muted mb-4" />
                  <div className="h-3 bg-muted rounded w-1/4 mb-3" />
                  <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              ))}
            </div>
          ) : paginated.length === 0 ? (
            <div className="text-center py-24">
              <h3 className="font-display text-2xl font-bold mb-2">
                {currentLanguage === 'de' ? 'Keine Artikel gefunden' : currentLanguage === 'en' ? 'No articles found' : 'Aucun article trouvé'}
              </h3>
              <p className="text-muted-foreground">
                {currentLanguage === 'de' ? 'Versuchen Sie einen anderen Suchbegriff.' : currentLanguage === 'en' ? 'Try a different search term.' : 'Essayez un autre terme de recherche.'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden bg-muted mb-5">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={getField(post, 'title')}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">No image</span>
                      </div>
                    )}
                  </div>
                  <div>
                    {post.category?.name && (
                      <span className="text-xs font-semibold text-primary tracking-widest uppercase">{post.category.name}</span>
                    )}
                    <h3 className="font-display text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {getField(post, 'title')}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{getField(post, 'excerpt')}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><User size={11} /> {post.author?.name}</span>
                      <span className="flex items-center gap-1"><Calendar size={11} /> {formatDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-16">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 text-sm font-medium transition-colors ${
                    page === i + 1
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-dark text-dark-foreground text-center">
        <div className="container max-w-xl">
          <h2 className="font-display text-4xl font-black mb-4">
            {currentLanguage === 'de' ? 'Bereit zum ' : currentLanguage === 'en' ? 'Ready to ' : 'Prêt à '}
            <em className="text-primary">{currentLanguage === 'de' ? 'Fahren?' : currentLanguage === 'en' ? 'Ride?' : 'Rouler ?'}</em>
          </h2>
          <p className="text-dark-foreground/60 mb-8">
            {currentLanguage === 'de'
              ? 'Buchen Sie Ihr VéloRouge-Erlebnis und erkunden Sie Straßburg wie ein Einheimischer.'
              : currentLanguage === 'en'
              ? 'Book your VéloRouge experience and explore Strasbourg like a local.'
              : 'Réservez votre expérience VéloRouge et explorez Strasbourg comme un local.'}
          </p>
          <Link to="/visitors" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors">
            {currentLanguage === 'de' ? 'Touren entdecken' : currentLanguage === 'en' ? 'Explore Rides' : 'Voir les balades'} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
