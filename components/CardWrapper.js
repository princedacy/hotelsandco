import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Card from './Card';

const client = new QueryClient();


function CardWrapper({router}) {
  return (
    <QueryClientProvider client={client}>
      <Card router={router} />
    </QueryClientProvider>
  )
}

export default CardWrapper