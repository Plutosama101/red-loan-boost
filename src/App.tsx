import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import LoanSelection from "./pages/LoanSelection";
import LocalGovernmentLoan from "./pages/LocalGovernmentLoan";
import SMELoan from "./pages/SMELoan";
import IndividualLoan from "./pages/IndividualLoan";
import ProofOfFundsLoan from "./pages/ProofOfFundsLoan";
import Apply from "./pages/Apply";
import Calculator from "./pages/Calculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/loans" element={<LoanSelection />} />
          <Route path="/local-government-loan" element={<LocalGovernmentLoan />} />
          <Route path="/sme-loan" element={<SMELoan />} />
          <Route path="/individual-loan" element={<IndividualLoan />} />
          <Route path="/proof-of-funds-loan" element={<ProofOfFundsLoan />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/calculator" element={<Calculator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
