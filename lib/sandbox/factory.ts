import { SandboxProvider, SandboxProviderConfig } from './types';
import { E2BProvider } from './providers/e2b-provider';

export class SandboxFactory {
  static create(provider?: string, config?: SandboxProviderConfig): SandboxProvider {
    return new E2BProvider(config || {});
  }
  
  static getAvailableProviders(): string[] {
    return ['e2b'];
  }
  
  static isProviderAvailable(provider: string): boolean {
    return !!process.env.E2B_API_KEY;
  }
}