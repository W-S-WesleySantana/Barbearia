import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xagfbzkaqyukyqueggvg.supabase.co';
const supabaseAnonKey = 'sb_publishable_LDcktI26ueb1wGdnmuhGKA__wwngP1c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);