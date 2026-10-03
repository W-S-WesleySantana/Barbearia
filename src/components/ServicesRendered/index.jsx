import { useState, useEffect } from "react";
import { supabase } from "../../api/supabaseClient";

import {
  Container,
  IconeNaTela,
  NamePriceDescription,
  ServicePrice,
  EmptyStateText,
  ButaoScheduling,
  Overlay,
  ModalCard,
  FormGroup,
  ButtonContainer,
  BotaoFechar,
  BotaoEnviar,
  Description
} from "./styles.js";

export default function Servicos() {
  const [listaServicos, setListaServicos] = useState([]);
  

  const [aberto, setAberto] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [mensagemUsuario, setMensagemUsuario] = useState('');
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  useEffect(() => {
    const buscarServicos = async () => {
      const { data, error } = await supabase
        .from("configuracoes")
        .select("valor")
        .eq("chave", "tabela_precos")
        .maybeSingle();

      if (error) {
        console.error("Erro ao buscar serviços:", error);
        return;
      }

      if (data && data.valor) {
        try {
          const servicosConvertidos = JSON.parse(data.valor);

          if (Array.isArray(servicosConvertidos)) {
            setListaServicos(servicosConvertidos);
          }
        } catch (e) {
          console.error("Erro ao converter JSON de serviços:", e);
        }
      }
    };

    buscarServicos();

    const canalRealtime = supabase
      .channel("mudancas-tabela-precos")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "configuracoes" },
        (payload) => {
          if (
            payload.new &&
            payload.new.chave === "tabela_precos" &&
            payload.new.valor
          ) {
            try {
              const novosServicos = JSON.parse(payload.new.valor);
              if (Array.isArray(novosServicos)) {
                setListaServicos(novosServicos);
              }
            } catch (e) {
              console.error("Erro no Realtime dos serviços:", e);
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(canalRealtime);
    };
  }, []);


  const enviarWhatsApp = (e) => {
    e.preventDefault();
    
   
    const seuNumero = "5511971985753"; 
    

    const textoMensagem = `Olá! Meu nome é ${nomeUsuario}.\n` +
                          `Gostaria de agendar o seguinte serviço:\n\n` +
                          `• *Serviço:* ${servicoSelecionado.nome}\n` +
                          `• *Preço:* R$ ${servicoSelecionado.preco}\n\n` +
                          `*Observações:* ${mensagemUsuario}`;

    const textoCodificado = encodeURIComponent(textoMensagem);
    
    window.open(`https://wa.me/${seuNumero}?text=${textoCodificado}`, '_blank');
    

    setAberto(false);
    setNomeUsuario('');
    setMensagemUsuario('');
    setServicoSelecionado(null);
  };



  const lidarComCliqueAgendar = (servico) => {
    setServicoSelecionado(servico);
    setAberto(true);
  };

  return (
    <Container>
      <h2>Nossos Serviços & Valores</h2>

      <NamePriceDescription>
        {listaServicos.length > 0 ? (
          listaServicos.map((item, index) => {
        
            const textoDescricao =
              item.descricao || item.description || item.descriçao;

            return (
              <IconeNaTela key={item.id || index}>
                <div>
                  <h3>{item.nome}</h3>
                  
                  

                  <Description>
                    
                    {textoDescricao || "Sem descrição informada."}

                  </Description>
 
               

                  <ServicePrice>R$ {item.preco}</ServicePrice>
                </div>

                <ButaoScheduling> 
                 
                  <button onClick={() => lidarComCliqueAgendar(item)}>Agendar</button>
                </ButaoScheduling>
              </IconeNaTela>
            );
          })
        ) : (
          <EmptyStateText>
            Nenhum serviço cadastrado no momento.
          </EmptyStateText>
        )}
      </NamePriceDescription>

      {/*MÁSCARA PRETA */}
      {aberto && (
        <Overlay>
          <ModalCard>
            <h2>Solicitar Agendamento</h2>
            {servicoSelecionado && (
              <p>
                Você está agendando: <strong>{servicoSelecionado.nome}</strong>
              </p>
            )}
            
            <form onSubmit={enviarWhatsApp}>
              <FormGroup>
                <label htmlFor="nome">Seu Nome:</label>
                <input 
                  id="nome"
                  type="text" 
                  value={nomeUsuario}
                  onChange={(e) => setNomeUsuario(e.target.value)}
                  required 
                  placeholder="Digite seu nome"
                />
              </FormGroup>

            
              
              <FormGroup>
                <label htmlFor="mensagem">Informações Adicionais Hora / Data:</label>
                <textarea 
                  id="mensagem"
                  rows="4" 
                  value={mensagemUsuario}
                  onChange={(e) => setMensagemUsuario(e.target.value)}
                  required 
                  placeholder="Ex: Gostaria de agendar para sábado à tarde..."
                />
              </FormGroup>
              
              <ButtonContainer>
                <BotaoFechar type="button" onClick={() => { setAberto(false); setServicoSelecionado(null); }}>
                  Fechar
                </BotaoFechar>
                <BotaoEnviar type="submit">
                  Enviar WhatsApp
                </BotaoEnviar>
              </ButtonContainer>
            </form>
          </ModalCard>
        </Overlay>
      )}
    </Container>
  );
}
