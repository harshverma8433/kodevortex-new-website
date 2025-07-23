import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import CoursesPage from "./components/CoursesPage/CoursesPage";
import KodeBumps from "./components/KodeBumps/KodeBumps";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Navbar is persistent */}
        <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/KodeBumps" element={<KodeBumps />} />
            {/* Add other pages here */}
          </Route>
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer is persistent */}
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
