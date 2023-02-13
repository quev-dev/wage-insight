// * IMPORTS


// * HOME
export default function NotFound() {
  // Render NotFound Page
  return (
    <div id="qd-page-notfound" className="
      flex flex-col text-center justify-center items-center
      h-screen
    ">
      
      <section className="
        animate__animated animate__bounceIn
      ">
        <h2>Error 404</h2>
        <h3>Page Not Found</h3>
      </section>

      <section className="
        animate__animated animate__bounceIn
      ">
        <p className="mb-4">
          The page you're looking for does not exist.
        </p>
        
        <a href="/" className="qd-dark-link">Return to Main Page</a>
      </section>

    </div>
  );
}