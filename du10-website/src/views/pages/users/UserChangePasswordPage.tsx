import { useEffect } from "react";

export default function UserChangePasswordPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "E-commerce management application - Change password";
  }, []);

  return (
    <section>
      <div className="">User Change Password Page</div>
    </section>
  );
}
