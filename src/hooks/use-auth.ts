import { useState, useEffect, useCallback } from "react";
import type { User, Session } from "@supabase/supabase-js";

export interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import("@/integrations/supabase/client").then(({ supabase }) => {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      });

      supabase.auth.getSession().then(({ data: { session } }: any) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      });

      return () => subscription.unsubscribe();
    });
  }, []);

  const signOut = useCallback(async () => {
    const { supabase } = await import("@/integrations/supabase/client");
    await supabase.auth.signOut();
  }, []);

  return { user, session, isLoading, signOut };
}
