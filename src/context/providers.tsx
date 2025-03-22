import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "./authProvider";
import QueryProvider from "./query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
}
