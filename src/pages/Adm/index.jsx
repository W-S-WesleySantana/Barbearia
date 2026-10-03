import { useState, useEffect } from 'react';
import { supabase } from '../../api/supabaseClient';

import { 
  Container, 
  ImagensTrabalhos, 
  TabelaDeCortes,
  InputFileContainer,
  TextoCarregando,
  AreaPreviewCarrossel,
  ItemPreviewFoto,
  BotaoExcluirFoto,
  BotaoCarrossel,
  AreaInputsServico,
  BotaoAdicionarLista,
  ListaPreviewServicos,
  LinhaServicoItem,
  BotaoRemoverServico,
  BotaoSalvarTabela,
  ButtonVoltaHome
} from '../Adm/styles';


export function Adm() {
  const [urls, setUrls] = useState([]);
  const [carregandoFotos, setCarregandoFotos] = useState(false);

  // Etabela de serviços/cortes
  const [cortes, setCortes] = useState([]);
  const [nomeCorte, setNomeCorte] = useState('');
  const [descricaoCorte, setDescricaoCorte] = useState(''); 
  const [precoCorte, setPrecoCorte] = useState('');
  const [carregandoTabela, setCarregandoTabela] = useState(false);

  useEffect(() => {
    const buscarDadosIniciais = async () => {
      const { data, error } = await supabase.from('configuracoes').select('chave, valor');
      
      if (error) {
        console.error('Erro ao carregar dados iniciais:', error);
        return;
      }

      if (data) {
        const dadosFotos = data.find(item => item.chave === 'imagem_banner');
        const dadosCortes = data.find(item => item.chave === 'tabela_precos');

        if (dadosFotos?.valor) {
          try { setUrls(JSON.parse(dadosFotos.valor)); } catch (e) { console.error(e); }
        }

        if (dadosCortes?.valor) {
          try { setCortes(JSON.parse(dadosCortes.valor)); } catch (e) { console.error(e); }
        }
      }
    };
    buscarDadosIniciais();
  }, []);

  const lidarComUploadDeFoto = async (event) => {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    setCarregandoFotos(true);
    const nomeDoArquivo = `${Date.now()}_${arquivo.name.replace(/\s+/g, '_')}`;

    const { error: erroUpload } = await supabase.storage
      .from('trabalhos')
      .upload(nomeDoArquivo, arquivo);

    if (erroUpload) {
      console.error(erroUpload);
      alert('Erro ao enviar a imagem.');
      setCarregandoFotos(false);
      return;
    }

    const { data: dadosUrl } = supabase.storage
      .from('trabalhos')
      .getPublicUrl(nomeDoArquivo);

    if (dadosUrl?.publicUrl) {
      setUrls(prev => [...prev, dadosUrl.publicUrl]);
    }
    
    setCarregandoFotos(false);
    event.target.value = ''; 
  };

  const removerLinkDaLista = (indexParaRemover) => {
    setUrls(urls.filter((_, index) => index !== indexParaRemover));
  };

  const salvarFotosNoBanco = async () => {
    setCarregandoFotos(true);
    
    let { error } = await supabase
      .from('configuracoes')
      .update({ valor: JSON.stringify(urls) })
      .eq('chave', 'imagem_banner');

   
    const { data: existente } = await supabase
      .from('configuracoes')
      .select('chave')
      .eq('chave', 'imagem_banner')
      .maybeSingle();

    if (!existente) {
      const resultadoInsert = await supabase
        .from('configuracoes')
        .insert({ chave: 'imagem_banner', valor: JSON.stringify(urls) });
      
      error = resultadoInsert.error;
    }

   
    setCarregandoFotos(false);
    
    if (error) {
      console.error(error);
      alert('Erro ao salvar o carrossel.');
    } else {
      alert('Carrossel updated com sucesso!');
    }
  };

  const adicionarCorteNaLista = () => {
    if (!nomeCorte.trim() || !precoCorte.trim()) {
      return alert('Preencha pelo menos o nome e o preço do serviço.');
    }
  
    const novoServico = {
      nome: nomeCorte.trim(),
      descricao: descricaoCorte.trim(),
      preco: precoCorte.trim()
    };
  
    setCortes([...cortes, novoServico]);
    setNomeCorte('');
    setDescricaoCorte('');
    setPrecoCorte('');
  };

  const removerCorteDaLista = (indexParaRemover) => {
    setCortes(cortes.filter((_, index) => index !== indexParaRemover));
  };

  const salvarTabelaNoBanco = async () => {
    setCarregandoTabela(true);

  
    let { error } = await supabase
      .from('configuracoes')
      .update({ valor: JSON.stringify(cortes) })
      .eq('chave', 'tabela_precos');

   
    const { data: existente } = await supabase
      .from('configuracoes')
      .select('chave')
      .eq('chave', 'tabela_precos')
      .maybeSingle();

    if (!existente) {
      const resultadoInsert = await supabase
        .from('configuracoes')
        .insert({ chave: 'tabela_precos', valor: JSON.stringify(cortes) });
      
      error = resultadoInsert.error;
    }

  
    setCarregandoTabela(false);

    if (error) {
      console.error(error);
      alert('Erro ao salvar a tabela de preços.');
    } else {
      alert('Tabela de serviços atualizada com sucesso no site!');
    }
  };


  return (
    <Container>
      <h2>Central do Administrador</h2>
      

      {/* GERENCIAR CARROSSEL */}
      <ImagensTrabalhos>
        <h3>Gerenciar Carrossel de Fotos</h3>
        <InputFileContainer>
          <input 
            type="file" 
            accept="image/*"
            onChange={lidarComUploadDeFoto}
            disabled={carregandoFotos}
          />
          {carregandoFotos && <TextoCarregando>Enviando foto...</TextoCarregando>}
        </InputFileContainer>

        <AreaPreviewCarrossel>
          {urls.map((link, idx) => (
            <ItemPreviewFoto key={idx}>
              <img src={link} alt="preview" />
              <br />
              <BotaoExcluirFoto type="button" onClick={() => removerLinkDaLista(idx)}>
                Excluir
              </BotaoExcluirFoto>
            </ItemPreviewFoto>
          ))}
        </AreaPreviewCarrossel>

        <BotaoCarrossel type="button" onClick={salvarFotosNoBanco} disabled={carregandoFotos}>
          {carregandoFotos ? 'Aguarde...' : 'Aplicar Alterações no Carrossel'}
        </BotaoCarrossel>
      </ImagensTrabalhos>

      {/* GERENCIAR SERVIÇOS */}
      <TabelaDeCortes>
        <h3>Gerenciar Serviços</h3>
        
        <AreaInputsServico>
          <input 
            type="text" 
            placeholder="Nome do Serviço (Ex: Degradê Especial)" 
            value={nomeCorte}
            onChange={(e) => setNomeCorte(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Descrição (Ex: Acabamento na navalha e toalha quente)" 
            value={descricaoCorte}
            onChange={(e) => setDescricaoCorte(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Preço (Ex: 45,00)" 
            value={precoCorte}
            onChange={(e) => setPrecoCorte(e.target.value)}
          />

          <BotaoAdicionarLista type="button" onClick={adicionarCorteNaLista}>
            Adicionar à Lista
          </BotaoAdicionarLista>
        </AreaInputsServico>

        {/* LISTA PREVIEW */}
        <ListaPreviewServicos> 
          {cortes.map((corte, idx) => (
            <LinhaServicoItem key={idx}>
              <div>
                <strong>{corte.nome}</strong>
                {corte.descricao && <p>{corte.descricao}</p>}
                <span>R\$ {corte.preco}</span>
              </div>
              <BotaoRemoverServico type="button" onClick={() => removerCorteDaLista(idx)}>
                Remover
              </BotaoRemoverServico>
            </LinhaServicoItem>
          ))}
        </ListaPreviewServicos>

        <BotaoSalvarTabela type="button" onClick={salvarTabelaNoBanco} disabled={carregandoTabela}>
          {carregandoTabela ? 'Salvando...' : 'Atualizar Serviços no Site'}
        </BotaoSalvarTabela>

        <ButtonVoltaHome to="/">
         VOLTAR PARA PÁGINA INICIAL
         </ButtonVoltaHome>
    
      </TabelaDeCortes>

      

    </Container>
  );
}

export default Adm;
