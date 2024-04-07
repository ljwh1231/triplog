import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ymwinqfkbptfnicuqvku.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inltd2lucWZrYnB0Zm5pY3Vxdmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODE5NDksImV4cCI6MjAyMzA1Nzk0OX0.UFR21T_34v5EJPE9onV3NcZjITZeARdh3Ma5ULgahf4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
