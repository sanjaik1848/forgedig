'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, Download, Share2, Calendar, CheckCircle, ExternalLink } from 'lucide-react'

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)
  const certificateRef = useRef<HTMLDivElement>(null)

  // Sample certificates data
  const certificates = [
    {
      id: 1,
      courseName: 'Full Stack Web Development',
      completionDate: '2024-12-15',
      certificateId: 'TF-2024-FS-001234',
      instructor: 'Dr. Sarah Johnson',
      duration: '12 weeks',
      grade: 'A+',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      verified: true,
    },
    {
      id: 2,
      courseName: 'Python for Data Science',
      completionDate: '2024-11-20',
      certificateId: 'TF-2024-DS-005678',
      instructor: 'Prof. Michael Chen',
      duration: '8 weeks',
      grade: 'A',
      skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
      verified: true,
    },
    {
      id: 3,
      courseName: 'IoT & Embedded Systems',
      completionDate: '2024-10-05',
      certificateId: 'TF-2024-IOT-009012',
      instructor: 'Eng. Priya Sharma',
      duration: '10 weeks',
      grade: 'A+',
      skills: ['Arduino', 'Raspberry Pi', 'Sensors', 'MQTT'],
      verified: true,
    },
  ]

  const downloadCertificate = (cert: any) => {
    // In a real app, this would generate a PDF
    alert(`Downloading certificate: ${cert.certificateId}\n\nIn production, this would generate a PDF certificate.`)
  }

  const shareCertificate = (cert: any) => {
    const shareUrl = `https://forgedigitalsolution.com/verify/${cert.certificateId}`
    navigator.clipboard.writeText(shareUrl)
    alert('Certificate verification link copied to clipboard!')
  }

  const viewCertificate = (certId: number) => {
    setSelectedCertificate(certId)
  }

  return (
    <div className="min-h-screen pt-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-primary" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-glow">
              My <span className="text-primary">Certificates</span>
            </h1>
          </div>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            View, download, and share your Forge Digital Solution certificates
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-dark-200 rounded-2xl border border-primary/20 overflow-hidden hover:border-primary/50 transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => viewCertificate(cert.id)}
            >
              {/* Certificate Preview */}
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-8 h-48 flex items-center justify-center">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-secondary"></div>
                </div>
                <Award className="text-primary" size={64} />
                {cert.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <CheckCircle size={14} />
                    Verified
                  </div>
                )}
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {cert.courseName}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Calendar size={16} className="text-primary" />
                    <span>Completed: {new Date(cert.completionDate).toLocaleDateString()}</span>
                  </div>
                  <div className="text-sm text-text-muted">
                    <span className="text-primary font-semibold">ID:</span> {cert.certificateId}
                  </div>
                  <div className="text-sm text-text-muted">
                    <span className="text-primary font-semibold">Grade:</span> {cert.grade}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <motion.button
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-dark-100 rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      downloadCertificate(cert)
                    }}
                  >
                    <Download size={16} />
                    Download
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-dark-100 border border-primary/30 text-primary rounded-lg font-semibold text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      shareCertificate(cert)
                    }}
                  >
                    <Share2 size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              ref={certificateRef}
              className="bg-white rounded-2xl max-w-4xl w-full p-12 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => setSelectedCertificate(null)}
              >
                ×
              </button>

              {/* Certificate Content */}
              {certificates.find(c => c.id === selectedCertificate) && (() => {
                const cert = certificates.find(c => c.id === selectedCertificate)!
                return (
                  <div className="text-center">
                    {/* Decorative Border */}
                    <div className="border-8 border-double border-primary/30 p-8 rounded-xl">
                      {/* Header */}
                      <div className="mb-8">
                        <Award className="text-primary mx-auto mb-4" size={80} />
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">
                          Certificate of Completion
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                      </div>

                      {/* Body */}
                      <div className="space-y-6 mb-8">
                        <p className="text-gray-600 text-lg">This certifies that</p>
                        <p className="text-5xl font-bold text-gray-900">Your Name</p>
                        <p className="text-gray-600 text-lg">has successfully completed</p>
                        <p className="text-3xl font-bold text-primary">{cert.courseName}</p>
                        <p className="text-gray-600">
                          Duration: {cert.duration} • Grade: {cert.grade}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="mb-8">
                        <p className="text-gray-600 mb-3">Skills Acquired:</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {cert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="grid grid-cols-2 gap-8 pt-8 border-t-2 border-gray-200">
                        <div>
                          <div className="w-48 h-0.5 bg-gray-800 mx-auto mb-2"></div>
                          <p className="text-gray-800 font-semibold">{cert.instructor}</p>
                          <p className="text-gray-600 text-sm">Instructor</p>
                        </div>
                        <div>
                          <div className="w-48 h-0.5 bg-gray-800 mx-auto mb-2"></div>
                          <p className="text-gray-800 font-semibold">
                            {new Date(cert.completionDate).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </p>
                          <p className="text-gray-600 text-sm">Date of Completion</p>
                        </div>
                      </div>

                      {/* Certificate ID */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-gray-600 text-sm">
                          Certificate ID: <span className="font-mono font-semibold text-primary">{cert.certificateId}</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                          Verify at: forgedigitalsolution.com/verify/{cert.certificateId}
                        </p>
                      </div>

                      {/* Tech Forge Logo/Brand */}
                      <div className="mt-8">
                        <p className="text-2xl font-bold text-primary">Forge Digital Solution</p>
                        <p className="text-gray-600 text-sm">Learn. Code. Build. Grow.</p>
                      </div>
                    </div>

                    {/* Download Button */}
                    <motion.button
                      className="mt-8 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold flex items-center gap-2 mx-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => downloadCertificate(cert)}
                    >
                      <Download size={20} />
                      Download Certificate
                    </motion.button>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* Empty State */}
        {certificates.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Award className="text-primary/30 mx-auto mb-4" size={80} />
            <h3 className="text-2xl font-bold text-text-muted mb-2">No Certificates Yet</h3>
            <p className="text-text-muted mb-6">Complete courses to earn certificates</p>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark-100 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Courses
            </motion.button>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">About Your Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-muted">
            <div>
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <CheckCircle size={20} />
                Verified & Authentic
              </h4>
              <p className="text-sm">
                All certificates are digitally signed and can be verified using the unique certificate ID.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Share2 size={20} />
                Share on LinkedIn
              </h4>
              <p className="text-sm">
                Add your certificates to your LinkedIn profile to showcase your skills to employers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Download size={20} />
                Download as PDF
              </h4>
              <p className="text-sm">
                Download high-quality PDF versions of your certificates for printing or sharing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <ExternalLink size={20} />
                Lifetime Access
              </h4>
              <p className="text-sm">
                Your certificates are stored permanently and can be accessed anytime from your account.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
