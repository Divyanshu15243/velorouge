import { ImgHTMLAttributes } from "react";

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Same-size AVIF sibling of `src` (smallest, best-compressed format). */
  avif?: string;
  /** srcSet string for the AVIF source, e.g. "a-640w.avif 640w, a-1024w.avif 1024w" */
  avifSrcSet?: string;
  /** srcSet string for the WebP source (fallback), same width descriptors as avifSrcSet. */
  webpSrcSet?: string;
  /** sizes attribute shared by both <source> entries, e.g. "(min-width: 1024px) 1024px, 100vw" */
  sizes?: string;
}

/**
 * Wraps a standard <img> in <picture><source> so browsers negotiate AVIF ->
 * WebP -> the <img src> fallback. The <img> tag itself is untouched, so all
 * existing width/height/loading/fetchPriority/className props behave exactly
 * as before for browsers that don't support picture (there are none in
 * practice, but it keeps the fallback path identical to a plain <img>).
 */
const Picture = ({ avif, avifSrcSet, webpSrcSet, sizes, src, ...imgProps }: PictureProps) => (
  <picture>
    {(avifSrcSet || avif) && <source type="image/avif" srcSet={avifSrcSet ?? avif} sizes={sizes} />}
    {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
    <img src={src} {...imgProps} />
  </picture>
);

export default Picture;
