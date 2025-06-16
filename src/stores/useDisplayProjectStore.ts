import { create } from 'zustand';

import { fetchDisplayProjects } from 'api/project';

import type { DataType } from 'interface';

interface DisplayProjectState {
  projects: DataType[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
}

export const useDisplayProjectStore = create<DisplayProjectState>(set => ({
  projects: [],
  loading: false,
  error: null,
  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchDisplayProjects();
      set({ projects: data, loading: false });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      set({ error: message, loading: false });
    }
  },
}));
