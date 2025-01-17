import {getExtension, getImageDimensions} from '@sanity/asset-utils'
import {createImageField} from 'sanity-pills'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      options: {
        hotspot: true,
      },

      validation: (Rule) =>
        Rule.custom((images) => {
          if (!images || !Array.isArray(images)) {
            return true // No images to validate, so it's valid
          }

          const maxSizeInBytes = 2 * 1024 * 1024 // 2MB in bytes

          const oversizedImages = images.filter((image) => image.size > maxSizeInBytes)
          if (oversizedImages.length > 0) {
            return 'Some images exceed the maximum size of 2MB.'
          }

          return true // All images are within size limits
        }),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quantityMass',
      title: 'quantity [also mention unit eg. kg, gm, liters]',
      type: 'string',
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Available Colors',
      of: [{type: 'string'}], // You can use a string type for color names
    },
    {
      name: 'size',
      type: 'array',
      title: 'Available Size',
      of: [{type: 'string'}], // You can use a string type for color names
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'brands',
      title: 'Product Brand',
      type: 'reference',
      to: [{type: 'brands'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'listPrice',
      title: 'List Price [MRP of Product]',
      type: 'number',
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price [Price after discounting]',
      type: 'number',
      validation: (Rule) => Rule.max(Rule.valueOfField('listPrice')),
    },

    {
      name: 'description',
      type: 'blockContent',
      title: 'Description',
    },
    {
      name: 'featureProduct',
      title: 'Feature This Product',
      type: 'boolean',
    },
  ],
}
