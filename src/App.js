import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Connexion from './components/connexion/Connexion';
import Réinitialisation from './components/connexion/Réinitialisation';
import InscriptionService from './components/inscription/InscriptionService';

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="connexion" element={<Connexion />} />
          <Route
            path="connexion/réinitialisation"
            element={<Réinitialisation />}
          />
          <Route path="inscription-service" element={<InscriptionService />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
