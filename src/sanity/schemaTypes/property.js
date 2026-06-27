// schemas/property.js

export default {
  name: "property",
  title: "Katalog Properti",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Properti",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL Web)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "propertyType",
      title: "Tipe Properti",
      type: "string",
      options: {
        list: [
          { title: "Rumah", value: "rumah" },
          { title: "Tanah", value: "tanah" },
        ],
        layout: "radio", // Muncul sebagai tombol pilihan
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Harga Total (Rp)",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "landSize",
      title: "Luas Tanah (m²)",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pricePerMeter",
      title: "Harga per Meter (Rp)",
      type: "number",
      description: "Hanya muncul jika tipe properti adalah Tanah",
      // KUNCI OPTIMASI: Field ini cuma muncul kalau Tipe = Tanah
      hidden: ({ document }) => document?.propertyType !== "tanah",
    },
    {
      name: "bedrooms",
      title: "Jumlah Kamar Tidur",
      type: "number",
      description: "Hanya muncul jika tipe properti adalah Rumah",
      // KUNCI OPTIMASI: Field ini disembunyikan kalau Tipe = Tanah
      hidden: ({ document }) => document?.propertyType !== "rumah",
    },
    {
      name: "bathrooms",
      title: "Jumlah Kamar Mandi",
      type: "number",
      // Sembunyikan juga kalau Tanah
      hidden: ({ document }) => document?.propertyType !== "rumah",
    },
    {
      name: "address",
      title: "Alamat Lengkap",
      type: "text",
      rows: 3,
    },
    {
      name: "description",
      title: "Deskripsi Lengkap Properti",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Ceritakan keunggulan properti ini (bebas banjir, dekat tol, dll).",
    },
    {
      name: "images",
      title: "Galeri Foto",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }], // hotspot buat motong gambar otomatis
    },
  ],
};
