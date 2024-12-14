import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1 style={{ color: "black" }}>Oops!</h1>
      <p style={{ color: "black" }}>Sorry, I have not added that page in my web.</p>
      <p style={{ color: "black" }}>
        <i style={{ color: "black" }}>{error.statusText || error.message}!</i>
      </p>
    </div>
  );
}
