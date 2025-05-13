// pages/Home.tsx
import React from 'react';
import MainLayout from '../templates/MainLayout/MainLayout';
import KalimbaBoard from '../organisms/KalimbaBoard/KalimbaBoard';

export default function Home() {
  return (
    <MainLayout>
      <KalimbaBoard />
    </MainLayout>
  );
}
