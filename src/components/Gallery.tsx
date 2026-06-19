import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { blogPosts, CategoryTag } from "@/pages/BlogPage";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage as "en" | "fr";

  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Blog section */}
        <div className="mt-0">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              {t('gallery.blogTitle')} <em className="text-primary">{t('gallery.blogTitleHighlight')}</em>
            </h2>
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {t('gallery.blogViewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col border border-border hover:border-primary transition-colors overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title[lang] ?? post.title.en}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <CategoryTag category={post.category} />
                    <span className="text-xs text-muted-foreground">{post.date[lang] ?? post.date.en}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title[lang] ?? post.title.en}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt[lang] ?? post.excerpt.en}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    {t('gallery.blogReadMore')} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {t('gallery.blogViewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
