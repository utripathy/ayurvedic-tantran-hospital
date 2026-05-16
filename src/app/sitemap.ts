import { MetadataRoute } from "next";

export default function sitemap():
  MetadataRoute.Sitemap {
  const baseUrl =
    "https://ayurvedatantran.com";

  return [
    {
      url: baseUrl,
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/services`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blogs`,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/appointments`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
    },
  ];
}