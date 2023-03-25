import { Col, Row } from "antd";

export default function ContributingPage() {
  const contributor = [
    {
      id: 1,
      image: "https://vmogroup.jp/_nuxt/img/yoshiki-asai.a7c4b04.png",
      name: "Sakura",
      role: "Frontend Developer",
    },
    {
      id: 2,
      image: "https://vmogroup.jp/_nuxt/img/yoshiki-asai.a7c4b04.png",
      name: "Sakura",
      role: "Backend Developer",
    },
    {
      id: 3,
      image: "https://vmogroup.jp/_nuxt/img/yoshiki-asai.a7c4b04.png",
      name: "Sakura",
      role: "Frontend Developer",
    },
    {
      id: 4,
      image: "https://vmogroup.jp/_nuxt/img/yoshiki-asai.a7c4b04.png",
      name: "Sakura",
      role: "Backend Developer",
    },
    {
      id: 5,
      image: "https://vmogroup.jp/_nuxt/img/yoshiki-asai.a7c4b04.png",
      name: "Sakura",
      role: "Backend Developer",
    },
    {
      id: 6,
      image: "https://vmogroup.jp/_nuxt/img/yoshiki-asai.a7c4b04.png",
      name: "Sakura",
      role: "Frontend Developer",
    },
  ];

  const style: React.CSSProperties = {
    background: `url(/images/in-slide-bg.webp),linear-gradient(126deg, rgb(255, 255, 255) 40%, rgba(252, 162, 215, 0.25) 80%)`,
    backgroundSize: "cover",
  };

  return (
    <section style={style} className="!bg-no-repeat">
      <div className="container pt-[20vh] pb-[50px]">
        <div className="text-center pb-[50px]">
          <p className="text-4xl xl:text-6xl font-bold text-[#951e3d]">
            Contributing
          </p>
        </div>
        <Row gutter={[48, 48]}>
          {contributor &&
            contributor.map((item, index) => (
              <Col key={index} xs={24} sm={12} md={6} className="">
                <div className="rounded-full p-2 border-4 border-[#fff] hover:scale-110 cursor-pointer">
                  <img
                    className=""
                    src={item.image}
                    alt={"logo-" + index + 1}
                  />
                </div>
                <div className="text-center pt-2 my-4 text-xl xl:text-2xl font-medium text-[#5a5555]">
                  {item.name}
                </div>
                <div className="text-center">{item.role}</div>
              </Col>
            ))}
        </Row>
      </div>
    </section>
  );
}
