import { useEffect } from "react";

export default function UserProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "E-commerce management application - Your profile";
  }, []);

  return (
    <section>
      <div className="">User Profile Page</div>
    </section>
  );
}
