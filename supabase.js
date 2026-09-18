import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';


// 1. La URL base que sacaste de la captura (sin /rest/v1/)
const SUPABASE_URL = "https://srsdoofbtvfakkwfnhhe.supabase.co";


// 2. La Publishable Key (sb_publishable_...) que copiaste en la pantalla anterior
const SUPABASE_KEY = "b_publishasble_AMe9sBslEVYsc4OU45nsbw_LJHSFIKe";


export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
