export default function sitemap() {
  const baseUrl = "https://lp.vitora.com.br";

  return [
    {
      url: `${baseUrl}/saude`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/querovitora`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}