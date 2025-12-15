import { useState } from 'react'

function ProfilePreviewForm() {
  const [profile, setProfile] = useState({
    name: '',
    title: '',
    bio: '',
  })

  const handleChange = (field) => (e) => {
    setProfile((prev) => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <div className="card">
      <h3>Profile Update</h3>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            value={profile.name}
            onChange={handleChange('name')}
            placeholder="Jane Doe"
          />
        </label>
        <label className="field">
          <span>Title</span>
          <input
            type="text"
            value={profile.title}
            onChange={handleChange('title')}
            placeholder="Designer"
          />
        </label>
        <label className="field">
          <span>Bio</span>
          <textarea
            rows="3"
            value={profile.bio}
            onChange={handleChange('bio')}
            placeholder="A short note about yourself"
          />
        </label>
      </form>

      <div className="preview profile-preview">
        <h4>{profile.name || 'Your Name'}</h4>
        <p className="muted">{profile.title || 'Your Title'}</p>
        <p>{profile.bio || 'Start typing to see a live preview.'}</p>
      </div>
    </div>
  )
}

export default ProfilePreviewForm

