import { useState } from 'react';
import {   
  ContainerStar, 
  ConteinerForm,  
  RegistrationForm, 
  ViewReviews,
  EstrelaSpan,
  ItemAvaliacaoBox,
  ItemAvaliacaoHeader,
  ItemAvaliacaoNome,
  ItemAvaliacaoTexto
} from './styles';

function RenderizarEstrelas({
  quantidade,
  interativo = false,
  hoverNota = null,
  onHoverNota = () => {},
  onSelecionarNota = () => {}
}) {
  return (
    <ContainerStar>
      {[1, 2, 3, 4, 5].map((estrela) => {
        const ativa = estrela <= (hoverNota ?? quantidade);

        return (
          <EstrelaSpan
            key={estrela}
            $interativo={interativo}
            $ativa={ativa}
            onClick={() => interativo && onSelecionarNota(estrela)}
            onMouseEnter={() => interativo && onHoverNota(estrela)}
            onMouseLeave={() => interativo && onHoverNota(null)}
          >
            ★
          </EstrelaSpan>
        );
      })}
    </ContainerStar>
  );
}

export default function SistemaAvaliacoes() {
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');
  const [nota, setNota] = useState(5);
  const [hoverNota, setHoverNota] = useState(null);

  const [avaliacoes, setAvaliacoes] = useState([
    { id: 1, nome: 'Ana Silva', comentario: 'Excelente serviço! Recomendo.', nota: 5 }
  ]);

  const lidarComEnvio = (e) => {
    e.preventDefault();
    if (!nome.trim() || !comentario.trim()) return;

    const novaAvaliacao = {
      id: Date.now(),
      nome,
      comentario,
      nota
    };

    setAvaliacoes((prev) => [novaAvaliacao, ...prev]);
    setNome('');
    setComentario('');
    setNota(5);
    setHoverNota(null);
  };

  return (
    <>
      <ConteinerForm>
        <RegistrationForm>
          <h3>Deixe sua Avaliação</h3>

          <form onSubmit={lidarComEnvio}>
            <div>
              <label>Seu Nome:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div>
              <label>Sua Nota:</label>
              <RenderizarEstrelas
                quantidade={nota}
                interativo={true}
                hoverNota={hoverNota}
                onHoverNota={setHoverNota}
                onSelecionarNota={setNota}
              />
            </div>

            <div>
              <label>Comentário:</label>
              <textarea
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                placeholder="Conte o que achou..."
                required
                rows="3"
              />
            </div>

            <button type="submit">
              Enviar Avaliação
            </button>
          </form>
        </RegistrationForm>

        <div>
          <h3>Avaliações dos Clientes ({avaliacoes.length})</h3>

          <ViewReviews>
            {avaliacoes.map((item) => (
              <ItemAvaliacaoBox key={item.id}>
                <ItemAvaliacaoHeader>
                  <ItemAvaliacaoNome>{item.nome}</ItemAvaliacaoNome>
                  <RenderizarEstrelas quantidade={item.nota} />
                </ItemAvaliacaoHeader>
                <ItemAvaliacaoTexto>
                  {'"'}{item.comentario}{'"'}
                </ItemAvaliacaoTexto>
              </ItemAvaliacaoBox>
            ))}
          </ViewReviews>
        </div>
      </ConteinerForm>
    </>
  );
}
