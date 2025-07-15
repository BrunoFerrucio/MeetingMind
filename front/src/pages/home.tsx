export function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Welcome to the home page!
        <div className="inline-grid *:[grid-area:1/1]">
          <div className="status status-error animate-ping"></div>
          <div className="status status-error"></div>
        </div> Server is down
      </p>
    </div>
  );
}