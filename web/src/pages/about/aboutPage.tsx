import { AboutComponent } from "../../components/aboutPageComponents/aboutItem";

export function AboutPage() {
  document.title = "React Store - Sobre";
  return (
    <>
      <header style={{ margin: "32px 0" }}>
        <h2 style={{ fontWeight: "500" }}>Sobre a React Store</h2>
        <h4
          style={{
            marginTop: "8px",
            fontWeight: "400",
            color: "rgb(113 113 122)",
            fontSize: "0.9em",
          }}
        >
          Abaixo, deixamos um relato sobre um pouco de nossas competencias!
        </h4>
      </header>
      <section style={{}}>
        <AboutComponent
          cover_url="https://inventta.net/wp-content/uploads/2022/12/Artboard-1.png"
          title="Qualidade, é o que não falta em nós"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            non blanditiis qui rem, velit dolores debitis ab, minima aspernatur
            ut et ea quam, placeat rerum inventore libero autem voluptates quod.
            Nesciunt explicabo incidunt dolorem illum quibusdam harum delectus
            corporis velit quam maxime quae animi vel doloribus dolorum beatae,
            vero mollitia!"
          alt="Foto sobre a qualidade"
        />
        <AboutComponent
          cover_url="https://blog.accurate.com.br/wp-content/uploads/2021/04/Seguranca-de-Dados.png"
          title="Garantimos sua segurança"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            non blanditiis qui rem, velit dolores debitis ab, minima aspernatur
            ut et ea quam, placeat rerum inventore libero autem voluptates quod.
            Nesciunt explicabo incidunt dolorem illum quibusdam harum delectus
            corporis velit quam maxime quae animi vel doloribus dolorum beatae,
            vero mollitia!"
          alt="Foto sobre a segurança"
        />
        <AboutComponent
          cover_url="https://amafresp.org.br/wp-content/uploads/2016/10/selo_destacada-2.jpg"
          title="Melhor custo beneficio"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            non blanditiis qui rem, velit dolores debitis ab, minima aspernatur
            ut et ea quam, placeat rerum inventore libero autem voluptates quod.
            Nesciunt explicabo incidunt dolorem illum quibusdam harum delectus
            corporis velit quam maxime quae animi vel doloribus dolorum beatae,
            vero mollitia!"
          alt="Foto sobre o custo beneficio"
        />
      </section>
    </>
  );
}
