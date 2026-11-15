import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// The Direction A type scale adds custom `text-*` font-size tokens.
// Without this, tailwind-merge reads them as text colours and drops them
// when a colour class is merged in the same call.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["label", "caption", "body-s", "body", "body-l", "quote", "h3", "h2", "display"] },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
