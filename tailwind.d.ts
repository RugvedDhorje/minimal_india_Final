declare module "tailwindcss/lib/util/flattenColorPalette" {
  export default function flattenColorPalette(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    colors: any
  ): Record<string, string>;
}
