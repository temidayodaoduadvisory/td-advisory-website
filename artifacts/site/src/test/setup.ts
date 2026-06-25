import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Unmount React trees and reset jsdom between tests.
afterEach(() => {
  cleanup();
});

// jsdom doesn't implement a few browser APIs that Radix UI primitives touch.
window.matchMedia ||= ((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
})) as typeof window.matchMedia;

window.ResizeObserver ||= class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// framer-motion's `whileInView` relies on IntersectionObserver.
window.IntersectionObserver ||= class {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
} as unknown as typeof IntersectionObserver;

Element.prototype.scrollIntoView ||= vi.fn();
HTMLElement.prototype.hasPointerCapture ||= () => false;
HTMLElement.prototype.setPointerCapture ||= vi.fn();
HTMLElement.prototype.releasePointerCapture ||= vi.fn();
