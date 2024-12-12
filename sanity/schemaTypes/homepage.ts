// schemas/homepage.ts
export default {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    fields: [
     
          {
            name: 'heading',
            type: 'string',
            title: 'Heading',
            
          },
          {
            name: 'paragraph',
            type: 'text',
            title: 'Paragraph',
            
          },
          {
            name: 'image',
            type: 'image',
            title: 'Image',
          },
          {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text',
        
          },
        ],
      };
    
  
  