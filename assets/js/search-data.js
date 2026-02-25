// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teachings",
          title: "Teachings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-mastering-graph-ml-traditional-approaches-to-generating-graphs",
        
          title: "Mastering Graph ML: Traditional Approaches to Generating Graphs",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/medium-trad-approach-generating/";
          
        },
      },{id: "post-mastering-graph-ml-improving-gnns",
        
          title: "Mastering Graph ML: Improving GNNs",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/medium-improving-gnns/";
          
        },
      },{id: "post-mastering-graph-ml-gnns-and-the-message-passing-framework",
        
          title: "Mastering Graph ML: GNNs and the Message-Passing Framework",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/medium-message-passing/";
          
        },
      },{id: "post-mastering-graph-ml-node-embeddings",
        
          title: "Mastering Graph ML: Node Embeddings",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/medium-node-embeddings/";
          
        },
      },{id: "post-mastering-graph-ml-graph-spectral-clustering",
        
          title: "Mastering Graph ML: Graph Spectral Clustering",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/medium-graph-spectral-clustering/";
          
        },
      },{id: "post-mastering-graph-ml-node-edge-and-graph-statistics",
        
          title: "Mastering Graph ML: Node, Edge, and Graph Statistics",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/medium-graph-statistics/";
          
        },
      },{id: "post-mastering-graph-ml-introduction-to-graph-data",
        
          title: "Mastering Graph ML: Introduction to Graph Data",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/medium-intro-graph-data/";
          
        },
      },{id: "news-finished-my-double-master-degree-at-ecole-centrale-méditerranée-and-aix-marseille-université",
          title: 'Finished my double master degree at Ecole Centrale Méditerranée and Aix-Marseille Université.',
          description: "",
          section: "News",},{id: "news-started-my-phd-at-ecole-polytechnique-in-collaboration-with-cma-cgm",
          title: 'Started my PhD at Ecole Polytechnique in collaboration with CMA-CGM.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%65%78%61%6E%64%72%65.%61%62%65%6C%61@%70%6F%6C%79%74%65%63%68%6E%69%71%75%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5APhcxAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
