import { defineField, defineType } from "sanity";

export const postType = defineType({
    name: "post",
    type: "document",
    fields: [
      defineField({
        name: "title",
        type: "string",
      }),
      defineField({
        name: "mainImage",
        type: "image",
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "alt",
            type: "string",
            title: "Alternative Text",
          },
        ],
      }),
    ],
  
    preview: {
      select: {
        title: "title",
        media: "mainImage",
      },
    },
  });