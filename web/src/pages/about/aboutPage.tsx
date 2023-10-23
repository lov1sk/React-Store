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
      <section>
        <AboutComponent
          cover_url="https://inventta.net/wp-content/uploads/2022/12/Artboard-1.png"
          title="Qualidade, é o que não falta em nós"
          description="Desde o nosso início, temos estabelecido um compromisso inabalável em todos os aspectos do nosso negócio para entregar excelência e consistência em cada interação. A qualidade é a espinha dorsal da nossa empresa e a pedra angular do nosso sucesso!"
          alt="Foto sobre a qualidade"
        />
        <AboutComponent
          cover_url="https://blog.accurate.com.br/wp-content/uploads/2021/04/Seguranca-de-Dados.png"
          title="Garantimos sua segurança"
          description="Nosso compromisso com a segurança permeia todas as áreas do nosso negócio. Desde a seleção criteriosa de nossos funcionários até a implementação de práticas rigorosas de segurança em nossos projetos, não medimos esforços para garantir que você esteja sempre protegido!"
          alt="Foto sobre a segurança"
        />
        <AboutComponent
          cover_url="https://amafresp.org.br/wp-content/uploads/2016/10/selo_destacada-2.jpg"
          title="Melhor custo beneficio"
          description="O princípio do custo-benefício é uma parte fundamental de nossa filosofia. Estamos comprometidos em fornecer o máximo valor a você, nosso cliente, e a todos os envolvidos!"
          alt="Foto sobre o custo beneficio"
        />
      </section>
    </>
  );
}
