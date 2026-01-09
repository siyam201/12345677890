export function createNovemixs({ apiKey, baseURL }: { apiKey: string; baseURL: string }) {
  return {
    chat: async (message: string, model = 'gpt-4o') => {
      const res = await fetch(`${baseURL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ message, model }),
      });
      const data = await res.json();
      return data.response; // AI response text
    },

    code: async (message: string, language = 'typescript', max_tokens = 99999999, model = 'gpt-4o') => {
      const res = await fetch(`${baseURL}/code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ message, language, max_tokens, model }),
      });
      const data = await res.json();
      return data.response; // generated code
    },

    bulkLinks: async (links: string[]) => {
      const res = await fetch(`${baseURL}/links/bulk`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ links }),
      });
      return await res.json();
    },
  };
}
