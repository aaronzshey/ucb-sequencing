import { Provider } from "../src/components/ui/provider.tsx";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import CellLineAuthentication from './routes/CellLineAuthentication.tsx'
/* routes */



import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = [
  { element: <CellLineAuthentication />, value: "cell-line-authentication" },
  { element: "DNAFragmentAnalysis", value: "dna-fragment-analysis" },
  { element: "DNANormalization", value: "dna-normalization" },
  { element: "DNAQuantification", value: "dna-quantification" },
  { element: "NanodropletGeneration", value: "nanodroplet-generation" },
  { element: "NanoporeSequencing", value: "nanopore-sequencing" },
  { element: "OpenAccessInstruments", value: "open-access-instruments" },
  { element: "PCRReactionCleanup", value: "pcr-reaction-cleanup" },
  { element: "PlasmidGenomicDNA", value: "plasmid-genomic-dna" },
  { element: "SangerSequencing", value: "sanger-sequencing" },
  { element: "StemCellAuthentication", value: "stem-cell-authentication" },
  { element: "StockPrimersFree", value: "stock-primers-free" },
];



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider forcedTheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          {routes.map((route) => (
            <Route path={`/${route.value}`} element={route.element}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
