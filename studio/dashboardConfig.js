export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60106b056e074f1c7e41851e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-cptfxd9t',
                  apiId: 'a9f2348b-fd96-44b3-bba8-c035e70f80a8'
                },
                {
                  buildHookId: '60106b0508dbfa14b29f9e72',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-pf4rr9io',
                  apiId: '15ca060f-2027-4fee-8a27-c8fd11a3d90a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stuartftw/sanity-kitchen-sink-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-pf4rr9io.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
