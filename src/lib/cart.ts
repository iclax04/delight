import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useEffect, useState } from "react";

export type CartLine = {
  slug: string;
  color: string;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  add: (slug: string, color: string, qty?: number) => void;
  setQty: (slug: string, color: string, qty: number) => void;
  remove: (slug: string, color: string) => void;
  clear: () => void;
};

function keyOf(line: Pick<CartLine, "slug" | "color">) {
  return `${line.slug}|${line.color}`;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (slug, color, qty = 1) => {
        const lines = get().lines.slice();
        const index = lines.findIndex((line) => line.slug === slug && line.color === color);
        const nextQty = Math.min(9, Math.max(1, qty));
        if (index >= 0) {
          lines[index] = { ...lines[index], qty: Math.min(9, lines[index].qty + nextQty) };
        } else {
          lines.push({ slug, color, qty: nextQty });
        }
        set({ lines });
      },
      setQty: (slug, color, qty) => {
        const next = Math.min(9, Math.max(1, qty));
        set({
          lines: get().lines.map((line) =>
            line.slug === slug && line.color === color ? { ...line, qty: next } : line,
          ),
        });
      },
      remove: (slug, color) => {
        set({
          lines: get().lines.filter((line) => !(line.slug === slug && line.color === color)),
        });
      },
      clear: () => set({ lines: [] }),
    }),
    {
      name: "delight-gadgets-cart",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      merge: (persisted, current) => {
        const stored =
          persisted && typeof persisted === "object" && "lines" in persisted
            ? (persisted.lines as CartLine[])
            : [];
        if (current.lines.length === 0) return { ...current, lines: stored };
        const map = new Map<string, CartLine>();
        for (const line of stored) map.set(keyOf(line), line);
        for (const line of current.lines) {
          const prev = map.get(keyOf(line));
          map.set(keyOf(line), prev ? { ...line, qty: Math.max(prev.qty, line.qty) } : line);
        }
        return { ...current, lines: [...map.values()] };
      },
    },
  ),
);

export function useCartReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const unsub = useCart.persist.onFinishHydration(() => setReady(true));
    void useCart.persist.rehydrate();
    if (useCart.persist.hasHydrated()) setReady(true);
    return unsub;
  }, []);
  return ready;
}
