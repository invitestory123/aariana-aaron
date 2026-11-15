/**
 * wedding-data.js — Customer-facing editable data layer for wax-seal-royale
 * Couple: Ariana & Aaron
 * Wedding Date: January 16, 2027
 * Venue: Kovilakom Resort, Muhamma, Kerala, India
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Ariana",
    groom: "Aaron",
    brideFull: "Ariana Higuera",
    groomFull: "Aaron Parampil",
    monogram: "A&A",
    order: "bride-first",
    quote: {
      spanish: "“Dos almas, un solo corazón”",
      english: "Two souls, one heart.",
    },
    subtitle: "“Dos almas, un solo corazón”<br /><span style='font-family:\"Ovo\",serif; font-size:18px; font-weight:400; font-style:italic; color:#846f61; display:block; margin-top:6px;'>Two souls, one heart.</span>",
  },

  wedding: {
    eventName: "A&A",
    dateLabel: "January 16, 2027",
    shortDate: "16.01.27",
    dateISO: "2027-01-16T15:30:00+05:30",
    invitationNote: "Dear Friends and Family,<br /><br />With hearts full of love and happiness, we invite you to join us as we celebrate the beginning of our forever. Your presence would make our special day even more meaningful.",
  },

  schedule: [
    { title: "Guest Arrival", time: "3:30 PM" },
    { title: "Wedding Ceremony", time: "4:30 PM" },
    { title: "Mocktail Hour", time: "5:30 PM" },
    { title: "Reception", time: "7:00 PM" },
    { title: "Dinner", time: "7:30 PM" },
    { title: "Party & Dance", time: "8:00 PM" },
  ],

  venue: {
    name: "Kovilakom Resort",
    address: "Muhamma, Kerala, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kovilakom+Resort+Muhamma+Kerala+India",
  },

  details: {
    dressCode: "We kindly ask our guests to avoid wearing white and red.",
    giftPreference: "Your presence is our greatest gift. For those who wish to celebrate us with a gift, you can find our registries below.",
  },

  registry: {
    title: "Wedding Gift Registry",
    note: "Your presence is our greatest gift. For those who wish to celebrate us with a gift, you can find our registries below.",
    items: [
      {
        title: "Honeyfund Registry",
        url: "https://www.honeyfund.com/site/higuera-parampil-01-16-2027",
      },
      {
        title: "Amazon Registry",
        subtitle: "Aaron Parampil & Ariana Higuera",
        url: "https://www.amazon.com/wedding/guest-view/CKDCW0TK5M7",
      },
    ],
  },

  media: {
    photo1: "./editable/assets/photo1.jpg",
    overlayImage: "./editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png",
    sealVideo: "./editable/assets/1782224012851.mp4",
    heroVideo: "./editable/assets/Swans2.mov",
    audio: "./editable/assets/Einaudi_ Divenire (1) (1).mp3",
  },
};
