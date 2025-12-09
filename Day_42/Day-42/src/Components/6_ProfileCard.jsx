// Task 6: Create a ProfileCard component with props (name, job, avatar)

function ProfileCard({ name, job, avatar }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '10px',
      textAlign: 'center',
      maxWidth: '300px'
    }}>
      <img 
        src={avatar} 
        alt={name} 
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <h3>{name}</h3>
      <p>{job}</p>
    </div>
  );
}

export default ProfileCard;

