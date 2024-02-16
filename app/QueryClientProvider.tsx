'use client';

import {
  QueryClient,
  QueryClientProvider as ReactQueryClient,
} from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

function QueryClientProvider({ children }: PropsWithChildren) {
  return <ReactQueryClient client={queryClient}>{children}</ReactQueryClient>;
}

export default QueryClientProvider;
