/**
 * PageTexture — fixed, full-page decorative layer: a whisper of film grain
 * plus soft radial gold/teal glows. pointer-events-none, purely decorative,
 * and static (no animation) so it stays cheap and reduced-motion safe.
 * Render once near the top of the page.
 */
export default function PageTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[200]"
    >
      {/* soft radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(52rem_30rem_at_50%_-8rem,rgba(217,164,65,0.07),transparent_70%)] dark:bg-[radial-gradient(52rem_30rem_at_50%_-8rem,rgba(217,164,65,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(44rem_28rem_at_88%_108%,rgba(22,68,73,0.05),transparent_70%)] dark:bg-[radial-gradient(44rem_28rem_at_88%_108%,rgba(217,164,65,0.05),transparent_70%)]" />
      {/* film grain */}
      <div className="grain-overlay absolute inset-0 opacity-[0.05] dark:opacity-[0.08]" />
    </div>
  );
}
