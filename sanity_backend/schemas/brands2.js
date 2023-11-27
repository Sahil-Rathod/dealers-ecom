import {BiCategory} from 'react-icons/bi'

export default {
  name: 'brands2',
  title: 'brands2',
  type: 'document',
  icon: BiCategory,
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      // validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'brandsName',
    //   title:
    //     "brands Name [Keep if blank if you don't want brands name displayed or brands name is already present inside image]",
    //   type: 'string',
    //   options: {
    //     hotspot: true,
    //   },
    // },
  ],
}
