'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Save, 
  RefreshCcw, 
  Layout, 
  Type, 
  Menu as MenuIcon, 
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Settings,
  Globe,
  Mail, 
  Edit3, 
  Phone, 
  MapPin,
  Github
} from 'lucide-react'
import Link from 'next/link'

export default function AdminPanel() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/content')
      const data = await res.json()
      setContent(data)
      setLoading(false)
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to load content' })
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    setStatus(null)
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
      })
      if (res.ok) {
        setStatus({ type: 'success', message: 'All changes saved successfully!' })
      } else {
        throw new Error('Save failed')
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to save changes' })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-100 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <RefreshCcw className="text-primary" size={48} />
        </motion.div>
      </div>
    )
  }

  const sidebarItems = [
    { id: 'hero', name: 'Hero Section', icon: Layout },
    { id: 'navbar', name: 'Navigation', icon: MenuIcon },
    { id: 'footer', name: 'Footer Info', icon: Edit3 },
  ]

  return (
    <div className="min-h-screen bg-dark-100 flex text-text-primary">
      {/* Sidebar */}
      <div className="w-64 bg-dark-200 border-r border-primary/20 flex flex-col">
        <div className="p-6 border-b border-primary/10 flex items-center gap-3">
          <Settings className="text-primary" size={24} />
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeSection === item.id 
                  ? 'bg-primary/10 text-primary border border-primary/30' 
                  : 'text-text-muted hover:bg-dark-300'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-primary/10">
          <Link href="/">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-text-muted hover:text-primary transition-colors">
              <ArrowLeft size={16} />
              Back to Site
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-dark-200 border-b border-primary/10 flex items-center justify-between px-8">
          <div>
            <h2 className="text-2xl font-bold capitalize">{activeSection} Configuration</h2>
            <p className="text-sm text-text-muted">Manage the content of your website in real-time.</p>
          </div>
          <div className="flex items-center gap-4">
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                    status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-bold flex items-center gap-2 shadow-lg disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {saving ? <RefreshCcw className="animate-spin" size={20} /> : <Save size={20} />}
              Save Changes
            </motion.button>
          </div>
        </header>

        {/* Form Area */}
        <main className="flex-1 overflow-y-auto p-8 bg-dark-100/50">
          <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {activeSection === 'hero' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Main Title</label>
                    <input
                      type="text"
                      className="w-full bg-dark-300 border border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                      value={content.hero.title}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, title: e.target.value } })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Badge Text</label>
                    <input
                      type="text"
                      className="w-full bg-dark-300 border border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                      value={content.hero.badge}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, badge: e.target.value } })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Typewriter Phrases (one per line)</label>
                    <textarea
                      rows={5}
                      className="w-full bg-dark-300 border border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all font-mono text-sm"
                      value={content.hero.typewriter.join('\n')}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, typewriter: e.target.value.split('\n') } })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Primary CTA</label>
                      <input
                        type="text"
                        className="w-full bg-dark-300 border border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                        value={content.hero.ctaPrimary}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, ctaPrimary: e.target.value } })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Secondary CTA</label>
                      <input
                        type="text"
                        className="w-full bg-dark-300 border border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                        value={content.hero.ctaSecondary}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, ctaSecondary: e.target.value } })}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'navbar' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Brand Display Name</label>
                  <input
                    type="text"
                    className="w-full bg-dark-300 border border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                    value={content.navbar.brandName}
                    onChange={(e) => setContent({ ...content, navbar: { ...content.navbar, brandName: e.target.value } })}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-primary">Navigation Links</label>
                  {content.navbar.links.map((link: any, index: number) => (
                    <div key={index} className="flex gap-4 items-center bg-dark-200 p-4 rounded-xl border border-primary/10">
                      <div className="flex-1 space-y-1">
                        <input
                          type="text"
                          className="w-full bg-dark-100 border-none rounded-lg px-3 py-2 outline-none text-sm"
                          value={link.name}
                          placeholder="Link Name"
                          onChange={(e) => {
                            const newLinks = [...content.navbar.links]
                            newLinks[index].name = e.target.value
                            setContent({ ...content, navbar: { ...content.navbar, links: newLinks } })
                          }}
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <input
                          type="text"
                          className="w-full bg-dark-100 border-none rounded-lg px-3 py-2 outline-none text-sm"
                          value={link.href}
                          placeholder="Link URL"
                          onChange={(e) => {
                            const newLinks = [...content.navbar.links]
                            newLinks[index].href = e.target.value
                            setContent({ ...content, navbar: { ...content.navbar, links: newLinks } })
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'footer' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Footer Brand Name</label>
                  <input
                    type="text"
                    className="w-full bg-dark-300 border border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                    value={content.footer.brandName}
                    onChange={(e) => setContent({ ...content, footer: { ...content.footer, brandName: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Description</label>
                  <textarea
                    rows={3}
                    className="w-full bg-dark-300 border border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                    value={content.footer.description}
                    onChange={(e) => setContent({ ...content, footer: { ...content.footer, description: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Copyright Text</label>
                  <input
                    type="text"
                    className="w-full bg-dark-300 border border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                    value={content.footer.copyright}
                    onChange={(e) => setContent({ ...content, footer: { ...content.footer, copyright: e.target.value } })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Contact Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                      <input
                        type="email"
                        className="w-full bg-dark-300 border border-primary/20 rounded-xl pl-12 pr-4 py-3 focus:border-primary outline-none transition-all"
                        value={content.footer.email}
                        onChange={(e) => setContent({ ...content, footer: { ...content.footer, email: e.target.value } })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Contact Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                      <input
                        type="text"
                        className="w-full bg-dark-300 border border-primary/20 rounded-xl pl-12 pr-4 py-3 focus:border-primary outline-none transition-all"
                        value={content.footer.phone}
                        onChange={(e) => setContent({ ...content, footer: { ...content.footer, phone: e.target.value } })}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input
                      type="text"
                      className="w-full bg-dark-300 border border-primary/20 rounded-xl pl-12 pr-4 py-3 focus:border-primary outline-none transition-all"
                      value={content.footer.address}
                      onChange={(e) => setContent({ ...content, footer: { ...content.footer, address: e.target.value } })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">GitHub URL</label>
                  <div className="relative">
                    <Github className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input
                      type="text"
                      className="w-full bg-dark-300 border border-primary/20 rounded-xl pl-12 pr-4 py-3 focus:border-primary outline-none transition-all"
                      value={content.footer.githubUrl}
                      onChange={(e) => setContent({ ...content, footer: { ...content.footer, githubUrl: e.target.value } })}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
