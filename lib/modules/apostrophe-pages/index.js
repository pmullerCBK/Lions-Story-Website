// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'about',
      label: 'About'
    },
    {
      name: 'services',
      label: 'Services'
    },
    {
      name: 'resources',
      label: 'Resources'
    },
    {
      name: 'lions-stories',
      label: "Lion's Stories"
    },
    {
      name: 'team-member-page',
      label: 'Team Member'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ]
};
