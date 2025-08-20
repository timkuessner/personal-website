import React from 'react';
import { Layout } from '../../components/Layout';

export const TeReoMaoriRevitalizationGame: React.FC = () => {
  return (
    <Layout title="Te Reo Māori Revitalization Game" showBackButton={true}>
      <div className="max-w-4xl mx-auto p-4">
        <div className="w-full aspect-video rounded-xl border border-gray-700 overflow-hidden bg-[#0a0a0a] py-2">
          <iframe
            src="https://itch.io/embed-upload/14719148?color=0a0a0a"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};
