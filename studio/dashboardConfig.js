export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '617e615725c04b2ab9b6a1d3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-awym63a3',
                  apiId: 'db298970-a5e5-4908-aae3-52764933cfee'
                },
                {
                  buildHookId: '617e615797042da47cc0b1d4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hzus24fh',
                  apiId: 'a7d96368-9d53-4051-837a-a49e9e1acfe6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mufaqar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hzus24fh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
