/**
 * 純裝飾用的雲朵。這一站的視覺主題，散在 Hero 與 CTA 區塊。
 * 一律 aria-hidden，不進無障礙樹。
 */
export default function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 80"
      className={className}
      fill="currentColor"
    >
      <path d="M42 78a30 30 0 0 1-4-59.7A44 44 0 0 1 121 8a26 26 0 0 1 37 24 24 24 0 0 1-6 46z" />
    </svg>
  );
}
