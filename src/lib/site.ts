export const site = {
  name: "Infinit Modas",
  tagline: "Moda e tendências desde 2016",
  since: 2016,
  instagramHandle: "infinitmodasloja",
  instagramUrl: "https://www.instagram.com/infinitmodasloja/",
  threadsUrl: "https://www.threads.com/@infinitmodasloja",
  facebookUrl: "https://www.facebook.com/people/Infinit-Modas/100063652145912/",
  followers: "11,5 mil",
  address: {
    street: "Travessa Butantã, 58",
    district: "Centro",
    city: "Santa Rosa",
    state: "RS",
  },
  phones: [
    { label: "(55) 98414-3524", wa: "5555984143524" },
    { label: "(55) 98406-7751", wa: "5555984067751" },
  ],
  hours: ["08:30 às 12:00", "13:30 às 18:00"],
};

export const fullAddress = `${site.address.street} – ${site.address.district}, ${site.address.city} – ${site.address.state}`;

const mapsQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}`,
);
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export function whatsappLink(
  text = "Olá, Infinit Modas! Vim pelo site e gostaria de saber mais sobre as novidades.",
  number = site.phones[0].wa,
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
