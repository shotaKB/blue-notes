import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Blue Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#e2eff5",      // Background: "Shallow Water" (A distinct, cool pale blue)
          lightgray: "#cfe2eb",  // Borders/Sidebar: "Seafoam" (Visible separation, very blue)
          gray: "#7a9eb3",       // Metadata: "Overcast Sky" (Muted blue-gray)
          darkgray: "#274152",   // Body Text: "Deep Ocean" (Dark enough to read, blue enough to feel)
          dark: "#152f40",       // Headers: "Midnight Zone" (Almost black, but rich navy)
          secondary: "#1f8cad",  // Links: "Tropical Lagoon" (Bright, saturated cyan-blue)
          tertiary: "#e07a5f",   // Hover/Accents: "Coral" (Kept the coral for contrast, it pops perfectly on blue)
          highlight: "rgba(31, 140, 173, 0.15)", // Highlight: Subtle blue tint
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0b0f19",      // Deepest Ocean Blue
          lightgray: "#1d253a",
          gray: "#5a6b8c",
          darkgray: "#ccd6f6",   // Soft White text
          dark: "#e6f1ff",       // Bright Headers
          secondary: "#64ffda",  // Bioluminescent Cyan Links
          tertiary: "#ffd700",   // Gold Accents
          highlight: "rgba(100, 255, 218, 0.10)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
