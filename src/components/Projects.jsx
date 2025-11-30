import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fynance',
      image: '/Fynance.png',
      likes: 203,
    },
    {
      id: 2,
      title: 'EzNotes',
      image: '/EzNotes.png',
      likes: 89,
    },
    {
      id: 3,
      title: 'MixedAR',
      image: '/MixedAR.jpeg',
      likes: 156,
    },
    {
      id: 4,
      title: 'EzChat',
      image: '/EzChat.png',
      likes: 124,
    },
  ]

  return (
    <section id="projects" className="bg-black text-white pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Instagram 3-column grid */}
        <div className="grid grid-cols-3 gap-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative aspect-square bg-gray-900 overflow-hidden group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400/1f2937/ffffff?text=' + project.title
                }}
              />
              {/* Hover overlay showing likes/comments like Instagram */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>{project.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                  <span>{Math.floor(project.likes / 3)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects