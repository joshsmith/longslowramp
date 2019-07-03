import React from 'react'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerMediaLibrary(uploadcare)

CMS.registerPreviewTemplate('blog', props => (
  <BlogPostPreview {...props} />
))