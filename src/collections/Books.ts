import type { CollectionConfig } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "synopsis",
      type: "textarea",
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "content",
      label: "Artikkel",
      type: "richText",
    },
  ],
};
