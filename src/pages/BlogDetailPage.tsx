import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, User, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";

const API_URL = "https://bolg-backend.vercel.app/api";
const API_KEY = "5453531f-1866-4c39-a0d1-caf5a82bc310";


const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const { currentLanguage } = useLanguage();

  const isFr = currentLanguage?.startsWith('fr');

  const getField = (field: string) => {
    if (isFr) {
      const frField = field + 'Fr';
      if (post?.[frField]) return post[frField];
    }
    return post?.[field] || '';
  };

  useEffect(() => {
    if (!slug) return;
    fetch(`${API_URL}/blogs/public/${slug}`, {
      headers: { 'x-api-key': API_KEY }
    })
      .then(r => r.json())
      .then(data => { if (data.blog) setPost(data.blog); else setNotFound(true); })
      .catch(() => setNotFound(true));
  }, [slug]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString(
      currentLanguage?.startsWith('fr') ? 'fr-FR' : 'en-US',
      { month: "long", day: "numeric", year: "numeric" }
    );

  const backLabel = currentLanguage === 'de' ? 'Zurück zum Journal' : currentLanguage === 'en' ? 'Back to Journal' : 'Retour au Journal';
  const allLabel = currentLanguage === 'de' ? 'Alle Artikel' : currentLanguage === 'en' ? 'All Articles' : 'Tous les articles';
  const readLabel = currentLanguage === 'de' ? 'Min. Lesezeit' : currentLanguage === 'en' ? 'min read' : 'min de lecture';

  if (notFound) {
    return (
      <main>
        <Navbar />
        <div className="container pt-40 pb-24 text-center">
          <h1 className="font-display text-4xl font-black mb-4">
            {currentLanguage === 'de' ? 'Artikel nicht gefunden' : currentLanguage === 'en' ? 'Article Not Found' : 'Article introuvable'}
          </h1>
          <p className="text-muted-foreground mb-8">
            {currentLanguage === 'de' ? 'Der gesuchte Artikel existiert nicht.' : currentLanguage === 'en' ? "The article you're looking for doesn't exist." : "L'article que vous cherchez n'existe pas."}
          </p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors">
            <ArrowLeft size={16} /> {backLabel}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="container pt-40 pb-24 max-w-3xl animate-pulse space-y-4">
          <div className="h-4 bg-muted rounded w-1/4" />
          <div className="h-10 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-1/3" />
          <div className="aspect-[16/9] bg-muted rounded" />
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <article className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft size={15} /> {backLabel}
          </Link>

          {post.category?.name && (
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">{post.category.name}</span>
          )}

          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight mt-3 mb-6">
            {getField('title')}
          </h1>

          {getField('excerpt') && (
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{getField('excerpt')}</p>
          )}

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-y border-border py-4 mb-10">
            <span className="flex items-center gap-1.5"><User size={14} /> {post.author?.name}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(post.publishedAt)}</span>
            {post.readingTime && <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readingTime} {readLabel}</span>}
          </div>

          {post.featuredImage && (
            <div className="aspect-[16/9] overflow-hidden mb-12">
              <img src={post.featuredImage} alt={getField('title')} className="w-full h-full object-cover" />
            </div>
          )}

          <div
            className="prose prose-base max-w-none text-foreground
              prose-headings:font-display prose-headings:font-black prose-headings:mb-3 prose-headings:mt-6
              prose-p:my-2 prose-p:leading-relaxed
              prose-li:my-0.5
              prose-ul:my-2 prose-ol:my-2
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-none prose-img:my-4
              prose-blockquote:border-primary prose-blockquote:my-3"
            dangerouslySetInnerHTML={{ __html: getField('content') }}
          />

          {post.tags?.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-border">
              <Tag size={14} className="text-muted-foreground" />
              {post.tags.map((tag: any) => (
                <span key={tag.id} className="text-xs border border-border px-3 py-1 text-muted-foreground">
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft size={15} /> {allLabel}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default BlogDetailPage;
