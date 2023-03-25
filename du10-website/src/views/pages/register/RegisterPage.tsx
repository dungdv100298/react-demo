import { useEffect } from "react";

export default function RegisterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "E-commerce management application - SignUp";
  }, []);

  return (
    <section>
      <div className="">Register Page</div>
    </section>
  );
}
