import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiX, HiUsers, HiClock, HiBriefcase } from 'react-icons/hi';
import { PROJECT_GROUPS, Project } from '@/data/projects';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const filteredGroups = selectedCompany
    ? PROJECT_GROUPS.filter((group) => group.company === selectedCompany)
    : PROJECT_GROUPS;

  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
            Project Portfolio
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            14+ successful projects across 3 companies, serving diverse industries from OTT platforms
            to financial services
          </p>
        </motion.div>

        {/* Company Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCompany(null)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedCompany === null
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400'
            }`}
          >
            All Projects (14)
          </button>
          {PROJECT_GROUPS.map((group) => (
            <button
              key={group.company}
              onClick={() => setSelectedCompany(group.company)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCompany === group.company
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400'
              }`}
            >
              {group.company.split(' ')[0]} ({group.projects.length})
            </button>
          ))}
        </motion.div>

        {/* Projects by Company */}
        {filteredGroups.map((group, groupIndex) => (
          <motion.div
            key={group.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            className="mb-16 last:mb-0"
          >
            {/* Company Header */}
            <div className="mb-8 pb-6 border-b-2 border-slate-200 dark:border-slate-700">
              <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {group.company}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <HiBriefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">{group.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiClock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>{group.period}</span>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.name}
                    </h4>
                    {project.link && (
                      <HiExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-2" />
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <HiBriefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium">{project.role}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiUsers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>Team: {project.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiClock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Click to view */}
                  <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-3xl z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-display text-3xl font-bold text-white mb-2">
                      {selectedProject.name}
                    </h3>
                    <p className="text-blue-100">{selectedProject.company}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <HiX className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Project Info Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                    <HiBriefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Role</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{selectedProject.role}</div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                    <HiUsers className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-2" />
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Team Size</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{selectedProject.teamSize}</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                    <HiClock className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Duration</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{selectedProject.duration}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Description</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link */}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
                  >
                    <HiExternalLink className="w-5 h-5" />
                    Visit Live Project
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
