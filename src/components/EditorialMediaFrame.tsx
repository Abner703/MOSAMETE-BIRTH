import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Expand, Pause, Play, Volume2, VolumeX, X } from 'lucide-react';

interface EditorialPhotoFrameProps {
  src: string;
  alt: string;
  caption: string;
  figureNumber: string;
  aspectClass?: string;
  imageClassName?: string;
  darkSurface?: boolean;
}

export function EditorialPhotoFrame({
  src,
  alt,
  caption,
  figureNumber,
  aspectClass = 'aspect-[3/4]',
  imageClassName = 'object-cover object-center',
  darkSurface = false,
}: EditorialPhotoFrameProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <figure className="space-y-3">
        <div
          className={`group relative rounded-2xl p-2.5 sm:p-3 border transition-colors ${
            darkSurface
              ? 'bg-[#FAF7F0] border-[#C5A46D]/45 shadow-[0_24px_54px_-28px_rgba(0,0,0,0.55)]'
              : 'bg-[#FAF7F0] border-[#292723]/12 shadow-[0_20px_48px_-30px_rgba(41,39,35,0.28)]'
          }`}
        >
          {/* Subtle architectural corner marks */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#C5A46D]/70 rounded-tl-sm"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#C5A46D]/70 rounded-br-sm"
          />

          <div
            className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-[#EBE4D6]`}
          >
            {!hasError ? (
              <img
                src={src}
                alt={alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setHasError(true)}
                className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.03] ${imageClassName}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6 text-center bg-gradient-to-br from-[#F4EFE6] to-[#E6DDD0]">
                <p className="font-serif italic text-sm text-[#772E45]">{caption}</p>
              </div>
            )}

            {!hasError && (
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={`Agrandir ${figureNumber}`}
                className="absolute bottom-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#292723]/75 text-[#FAF7F0] backdrop-blur-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F0]"
              >
                <Expand className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <figcaption
          className={`text-xs font-serif italic leading-relaxed text-center max-w-sm mx-auto ${
            darkSurface ? 'text-[#F4EFE6]/75' : 'text-[#292723]/65'
          }`}
        >
          <span className="font-mono not-italic uppercase tracking-wider mr-1.5 text-[11px] opacity-80">
            {figureNumber}
          </span>
          · {caption}
        </figcaption>
      </figure>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${figureNumber} — ${caption}`}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-[#292723]/88 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#FAF7F0] rounded-2xl p-3 sm:p-4 border border-[#C5A46D]/45 shadow-2xl space-y-3"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer l’aperçu"
              className="absolute top-5 right-5 z-10 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#292723]/80 text-[#FAF7F0] hover:bg-[#772E45] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F0]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="max-h-[75vh] overflow-hidden rounded-xl bg-[#EBE4D6] flex items-center justify-center">
              <img
                src={src}
                alt={alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm font-serif italic text-[#292723]/80 text-center pb-1">
              {figureNumber} · {caption}
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
}

interface EditorialVideoFrameProps {
  src: string;
  caption: string;
  figureNumber: string;
}

export function EditorialVideoFrame({
  src,
  caption,
  figureNumber,
}: EditorialVideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (prefersReducedMotion) {
      video.pause();
      setIsPlaying(false);
    } else {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [prefersReducedMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <figure className="space-y-3 max-w-[290px] w-full mx-auto">
      <div className="relative rounded-2xl p-2.5 sm:p-3 bg-[#FAF7F0] border border-[#C5A46D]/45 shadow-[0_22px_50px_-28px_rgba(41,39,35,0.25)]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#772E45]/50 rounded-tl-sm"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#772E45]/50 rounded-br-sm"
        />

        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-[#EBE4D6]">
          {!hasError ? (
            <video
              ref={videoRef}
              src={src}
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              onError={() => setHasError(true)}
              onClick={togglePlay}
              aria-label={caption}
              className="w-full h-full object-cover cursor-pointer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-6 text-center bg-gradient-to-br from-[#F4EFE6] to-[#E6DDD0]">
              <p className="font-serif italic text-sm text-[#772E45]">{caption}</p>
            </div>
          )}

          {!hasError && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Mettre la vidéo en pause' : 'Lire la vidéo'}
                className="inline-flex items-center gap-1.5 px-3 min-h-[40px] rounded-lg bg-[#292723]/75 text-[#FAF7F0] text-xs font-medium backdrop-blur-sm hover:bg-[#772E45] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F0]"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Play</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Activer le son de la vidéo' : 'Couper le son de la vidéo'}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#292723]/75 text-[#FAF7F0] backdrop-blur-sm hover:bg-[#772E45] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F0]"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </div>

      <figcaption className="text-xs font-serif italic leading-relaxed text-center text-[#292723]/65">
        <span className="font-mono not-italic uppercase tracking-wider mr-1.5 text-[11px] opacity-80">
          {figureNumber}
        </span>
        · {caption}
      </figcaption>
    </figure>
  );
}
