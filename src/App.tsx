import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import About from "./pages/About";
import LoanSelection from "./pages/LoanSelection";
import LocalGovernmentLoan from "./pages/LocalGovernmentLoan";
import SMELoan from "./pages/SMELoan";
import IndividualLoan from "./pages/IndividualLoan";
import ProofOfFundsLoan from "./pages/ProofOfFundsLoan";
import Apply from "./pages/Apply";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/loans" element={<LoanSelection />} />
            <Route path="/loans/local-government" element={<LocalGovernmentLoan />} />
            <Route path="/loans/sme" element={<SMELoan />} />
            <Route path="/loans/individual" element={<IndividualLoan />} />
            <Route path="/loans/proof-of-funds" element={<ProofOfFundsLoan />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
