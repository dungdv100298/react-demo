import { useEffect } from "react";

export default function OrderPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "E-commerce management application - Order management";
  }, []);

  return (
    <section>
      <div className="">OrderPage</div>
    </section>
  );
}
