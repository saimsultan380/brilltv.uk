"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import type { PublishedReview } from "@/lib/reviews-data";

type ReviewsSliderProps = {
  reviews: PublishedReview[];
};

const AUTO_PLAY_MS = 5200;
const TRANSITION_MS = 520;
const DESKTOP_BREAKPOINT = 1024;
const DESKTOP_SLIDES = 3;
const MOBILE_SLIDES = 1;

function getSlidesPerView(width: number) {
  return width >= DESKTOP_BREAKPOINT ? DESKTOP_SLIDES : MOBILE_SLIDES;
}

export function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [slidesPerView, setSlidesPerView] = useState(MOBILE_SLIDES);
  const [slideWidth, setSlideWidth] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [skipTransition, setSkipTransition] = useState(false);

  const total = reviews.length;
  const pageCount = Math.max(1, total - slidesPerView + 1);
  const trackSlides = [
    ...reviews,
    ...reviews.slice(0, slidesPerView),
  ];

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextSlidesPerView = getSlidesPerView(window.innerWidth);
    setSlidesPerView(nextSlidesPerView);
    setSlideWidth(viewport.offsetWidth / nextSlidesPerView);
  }, []);

  useEffect(() => {
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(motionMedia.matches);

    updateMotion();
    motionMedia.addEventListener("change", updateMotion);
    return () => motionMedia.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    measure();

    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    setTrackIndex((index) => Math.min(index, pageCount - 1));
    setDotIndex((index) => Math.min(index, pageCount - 1));
  }, [pageCount]);

  const resetToStart = useCallback(() => {
    setSkipTransition(true);
    setTrackIndex(0);
    setDotIndex(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setSkipTransition(false));
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      const nextIndex = ((index % pageCount) + pageCount) % pageCount;
      setSkipTransition(false);
      setTrackIndex(nextIndex);
      setDotIndex(nextIndex);
    },
    [pageCount, total],
  );

  const goNext = useCallback(() => {
    if (pageCount <= 1) return;

    setSkipTransition(false);

    if (trackIndex >= pageCount - 1) {
      setTrackIndex(pageCount);
      setDotIndex(0);
      return;
    }

    const nextIndex = trackIndex + 1;
    setTrackIndex(nextIndex);
    setDotIndex(nextIndex);
  }, [pageCount, trackIndex]);

  const goPrev = useCallback(() => {
    if (pageCount <= 1) return;

    setSkipTransition(false);

    if (trackIndex <= 0) {
      setTrackIndex(pageCount - 1);
      setDotIndex(pageCount - 1);
      return;
    }

    const nextIndex = trackIndex - 1;
    setTrackIndex(nextIndex);
    setDotIndex(nextIndex);
  }, [pageCount, trackIndex]);

  useEffect(() => {
    if (pageCount <= 1 || isPaused || reduceMotion) return;

    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, pageCount, reduceMotion]);

  const handleTransitionEnd = () => {
    if (trackIndex >= pageCount) {
      resetToStart();
    }
  };

  if (total === 0) return null;

  const offset = slideWidth > 0 ? trackIndex * slideWidth : 0;
  const trackStyle = {
    transform: `translate3d(-${offset}px, 0, 0)`,
    transition:
      skipTransition || reduceMotion
        ? "none"
        : `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
  };

  return (
    <div
      className="telvis-review-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="telvis-review-slider-shell">
        <button
          type="button"
          className="telvis-review-slider-arrow is-prev"
          aria-label="Show previous reviews"
          onClick={goPrev}
        >
          <ChevronLeft size={20} strokeWidth={2.2} aria-hidden="true" />
        </button>

        <div
          ref={viewportRef}
          className="telvis-review-slider-viewport"
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            className="telvis-review-slider-track"
            style={trackStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {trackSlides.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="telvis-review-slider-slide"
                style={{ width: slideWidth > 0 ? `${slideWidth}px` : undefined }}
              >
                <ReviewCard review={review} className="telvis-review-slide-card" />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="telvis-review-slider-arrow is-next"
          aria-label="Show next reviews"
          onClick={goNext}
        >
          <ChevronRight size={20} strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>

      <div
        className="telvis-review-slider-dots"
        role="tablist"
        aria-label="Choose a review slide"
      >
        {Array.from({ length: pageCount }, (_, index) => {
          const isActive = index === dotIndex;

          return (
            <button
              key={index}
              type="button"
              role="tab"
              className={`telvis-review-slider-dot${isActive ? " is-active" : ""}`}
              aria-label={`Show review slide ${index + 1} of ${pageCount}`}
              aria-selected={isActive}
              onClick={() => goTo(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
