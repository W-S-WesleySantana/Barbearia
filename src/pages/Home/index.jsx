import { useState, useEffect } from "react";
import { supabase } from "../../api/supabaseClient";

import Header from "../../components/Header";
import { BestCuts } from "../../components/BestCuts";
import Serviços from "../../components/ServicesRendered";
import SistemaAvaliacoes from "../../components/CustomerReviews";
import AboutTheBarbershop from "../../components/AboutTheBarbershop";
import GlobalStyles from "../../styles/GlobalStyles";
import Footer from "../../components/Foteer";

import Foto1 from "../../assets/foto1.png";
import Foto2 from "../../assets/foto2.png";
import Foto3 from "../../assets/foto3.png";

import { LoadingText } from "../Home/styles";

export function Home() {
  const [listaImagens, setListaImagens] = useState([]);

  useEffect(() => {
    const buscarImagensIniciais = async () => {
      const { data, error } = await supabase
        .from("configuracoes")
        .select("valor")
        .eq("chave", "imagem_banner")
        .maybeSingle();

      if (data && !error && data.valor) {
        try {
          const arrayDeFotos = JSON.parse(data.valor);
          if (Array.isArray(arrayDeFotos) && arrayDeFotos.length > 0) {
            setListaImagens(arrayDeFotos);
            return;
          }
        } catch (e) {
          console.error("Erro ao converter JSON do carrossel:", e);
        }
      }

      setListaImagens([Foto1, Foto2, Foto3]);
    };

    buscarImagensIniciais();

    const canalRealtime = supabase
      .channel("mudancas-carrossel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "configuracoes",
          filter: "chave=eq.imagem_banner",
        },
        (payload) => {
          if (payload.new && payload.new.valor) {
            try {
              const arrayDeFotos = JSON.parse(payload.new.valor);
              if (Array.isArray(arrayDeFotos) && arrayDeFotos.length > 0) {
                setListaImagens(arrayDeFotos);
              }
            } catch (e) {
              console.error("Erro no realtime do carrossel:", e);
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(canalRealtime);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />

      {listaImagens.length > 0 ? (
        <BestCuts
          key={JSON.stringify(listaImagens)}
          imagensDoBanco={listaImagens}
        />
      ) : (
        <LoadingText>Carregando carrossel...</LoadingText>
      )}

      <Serviços />
      <AboutTheBarbershop />
      
      <SistemaAvaliacoes />
      <Footer/>

      
    </>
  );
}

export default Home;