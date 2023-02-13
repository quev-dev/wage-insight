export default function Loading() {
  // Render Loading Page
  return (
    <div id="qd-page-loading" className="
      flex flex-col
      text-center justify-center items-center
      h-screen w-screen
    ">
      <h2 className="
        animate__animated animate__bounce animate__flash animate__slow
        px-4 py-1 rounded-full
        shadow-lg shadow-emerald-200 bg-white
      ">Loading...</h2>
    </div>
  );
}