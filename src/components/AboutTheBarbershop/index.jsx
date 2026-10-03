
import { useState, useEffect } from 'react';
import { supabase } from '../../api/supabaseClient';
import { 
  SecaoSobre
} from './styles';

import { SiGooglemaps } from "react-icons/si";

export default function AboutTheBarbershop() {
  const [info, setInfo] = useState({
    sobre: 'Carregando história da barbearia...',
    endereco: 'Carregando endereço...',
    horario: 'Carregando horários...'
  });


  useEffect(() => {
    // 1. Busca os dados iniciais
    const buscarInfo = async () => {
      const { data, error } = await supabase
        .from('configuracoes')
        .select('valor')
        .eq('chave', 'informacoes_gerais')
        .maybeSingle();

      if (data && !error && data.valor) {
        try {
          setInfo(JSON.parse(data.valor));
        } catch (e) {
          console.error('Erro ao ler informações gerais:', e);
        }
      }
    };

    buscarInfo();

    // 2. Realtime
    const canalRealtime = supabase
      .channel('mudancas-informacoes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'configuracoes' },
        (payload) => {
          if (payload.new && payload.new.chave === 'informacoes_gerais' && payload.new.valor) {
            try {
              setInfo(JSON.parse(payload.new.valor));
            } catch (e) {
              console.error('Erro no Realtime das informações:', e);
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
    <SecaoSobre>

      <div>

      <h2>Quem Somos</h2>


      <p>{info.sobre}</p>

      </div>

      <div>

        <h2>📍 Localização</h2>
       <a href="https://www.google.com/maps/place/Av.+Engenheiro+Lu%C3%ADs+Carlos+Berrini+-+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP/@-23.6054637,-46.7033786,15z/data=!3m1!4b1!4m6!3m5!1s0x94ce5734ed964f87:0xcd3b4eacb68f1ad4!8m2!3d-23.605464!4d-46.6930788!16s%2Fm%2F0hr8j8q?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"> <SiGooglemaps   color='#EA4335'/> Ver Localizaçao </a>

      </div>

      <div>
        
        <h2>🕒 Horário de Funcionamento</h2>

           <span  id='horarioFucionamento'>
         <p>{info.horario}</p>

         <p>horarios</p>
         </span>

      </div>
    </SecaoSobre>
  );
}
