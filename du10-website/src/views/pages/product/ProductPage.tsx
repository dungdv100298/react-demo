import { useEffect } from "react";

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "E-commerce management application - Product management";
  }, []);

  return (
    <section>
      <div className="">Product Page</div>
    </section>
  );
}
