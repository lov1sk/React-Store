import { MailCheck, PhoneIncoming, Users2 } from "lucide-react";
import { ContactComponent } from "../../components/contactPageComponents/contactItem";

export function ContactPage() {
  document.title = "React Store - Contato";
  return (
    <section
      style={{
        padding: "16px",
      }}
    >
      <header style={{ margin: "32px 0" }}>
        <h2 style={{ fontWeight: 600 }}>Entre em contato conosco</h2>
        <h4
          style={{
            marginTop: "16px",
            fontWeight: "400",
            color: "rgb(113 113 122)",
            fontSize: "0.9em",
          }}
        >
          Atraves de algum dos meios abaixo, contate-nos e conseguiremos da
          melhor forma lhe atender
        </h4>
      </header>

      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "48px",
        }}
      >
        <ContactComponent
          title="Ligue para nós"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati voluptas eos, quibusdam a necessitatibus nobis dolore dolores natus facere!"
        >
          <PhoneIncoming strokeWidth={1} size={64} />
        </ContactComponent>
        <ContactComponent
          title="Envie um email"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati voluptas eos, quibusdam a necessitatibus nobis dolore dolores natus facere!"
        >
          <MailCheck strokeWidth={1} size={64} />
        </ContactComponent>
        <ContactComponent
          title="Acompanhe as redes sociais"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati voluptas eos, quibusdam a necessitatibus nobis dolore dolores natus facere!"
        >
          <Users2 strokeWidth={1} size={64} />
        </ContactComponent>
      </section>
    </section>
  );
}
